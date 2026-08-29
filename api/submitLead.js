export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { nombre, correo, destinos } = req.body;

  if (!nombre || !correo || !destinos) {
    console.error("🔴 [submitLead] Faltan campos obligatorios:", { nombre, correo, destinos });
    return res.status(400).json({ message: 'Faltan campos obligatorios' });
  }

  const apiKey = process.env.BREVO_API_KEY;

  if (!apiKey) {
    console.error('🔴 [submitLead] Falta la variable de entorno BREVO_API_KEY');
    return res.status(500).json({ message: 'Error de configuración del servidor: Falta BREVO_API_KEY' });
  }

  console.log(`🟢 [submitLead] Procesando lead para: ${correo} (${nombre}). API Key detectada (${apiKey.substring(0, 6)}...)`);

  const arrayDestinos = Array.isArray(destinos) ? destinos : [destinos];
  const stringDestinos = arrayDestinos.join(', ');

  let contactResult = null;
  let emailResult = null;

  // 1. Crear o actualizar contacto en la lista de contactos de Brevo (/v3/contacts)
  try {
    const contactPayload = {
      email: correo,
      attributes: {
        NOMBRE: nombre,
        DESTINOS: stringDestinos
      },
      updateEnabled: true
    };

    console.log("🟡 [submitLead] Creando/actualizando contacto en Brevo...", contactPayload);

    let contactResponse = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'api-key': apiKey
      },
      body: JSON.stringify(contactPayload)
    });

    let contactData = await contactResponse.json();

    if (!contactResponse.ok) {
      console.warn(`⚠️ [submitLead] Primer intento con atributos en /v3/contacts falló (Status ${contactResponse.status}):`, contactData);
      
      // Fallback: si falla por atributos no definidos en Brevo, reintentar solo con email
      const fallbackPayload = { email: correo, updateEnabled: true };
      console.log("🟡 [submitLead] Reintentando registro de contacto solo con email...", fallbackPayload);
      
      const fallbackResponse = await fetch('https://api.brevo.com/v3/contacts', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'api-key': apiKey
        },
        body: JSON.stringify(fallbackPayload)
      });
      const fallbackData = await fallbackResponse.json();
      
      if (!fallbackResponse.ok) {
        console.error(`🔴 [submitLead] Fallback en Brevo /v3/contacts también falló (Status ${fallbackResponse.status}):`, fallbackData);
        contactResult = { success: false, status: fallbackResponse.status, error: fallbackData };
      } else {
        console.log(`🟢 [submitLead] Contacto registrado en Brevo (modo fallback):`, fallbackData);
        contactResult = { success: true, data: fallbackData, note: "Registrado sin atributos custom" };
      }
    } else {
      console.log(`🟢 [submitLead] Contacto registrado en Brevo exitosamente:`, contactData);
      contactResult = { success: true, data: contactData };
    }
  } catch (err) {
    console.error(`🔴 [submitLead] Excepción al llamar a /v3/contacts:`, err);
    contactResult = { success: false, error: err.toString() };
  }

  // 2. Enviar correo transaccional de Brevo (/v3/smtp/email)
  const senderEmail = process.env.BREVO_SENDER_EMAIL || "info@ecodestinos.com.co";
  const emailPayload = {
    sender: {
      name: "Ecodestinos",
      email: senderEmail
    },
    to: [
      {
        email: correo,
        name: nombre
      }
    ],
    bcc: [
      {
        email: "info@ecodestinos.com.co",
        name: "Equipo Ecodestinos"
      }
    ],
    subject: "¡Tu viaje ha comenzado! Tus rutas recomendadas",
    htmlContent: `
      <html>
        <body style="font-family: sans-serif; color: #333; line-height: 1.6;">
          <h2 style="color: #064E3B;">Hola ${nombre},</h2>
          <p>¡Gracias por conectar con el latido de la tierra!</p>
          <p>Basado en tu resonancia, te sugerimos explorar los siguientes territorios:</p>
          <ul>
            ${arrayDestinos.map(d => `<li style="margin-bottom: 5px;"><strong>${d.toUpperCase()}</strong></li>`).join('')}
          </ul>
          <p>Entra a nuestra plataforma interactiva para descubrir los detalles, fotos y procesos de cada destino.</p>
          <br/>
          <p>Con cariño,</p>
          <p><strong>El equipo de Ecodestinos</strong></p>
        </body>
      </html>
    `
  };

  try {
    console.log("🟡 [submitLead] Enviando correo transaccional en Brevo...", { to: correo, sender: emailPayload.sender.email });

    const emailResponse = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'api-key': apiKey
      },
      body: JSON.stringify(emailPayload)
    });

    const emailData = await emailResponse.json();

    if (!emailResponse.ok) {
      console.error(`🔴 [submitLead] Error enviando correo Brevo /v3/smtp/email (Status ${emailResponse.status}):`, emailData);
      emailResult = { success: false, status: emailResponse.status, error: emailData };

      return res.status(emailResponse.status || 500).json({
        message: 'Error en la API de Brevo al enviar correo',
        status: emailResponse.status,
        brevoError: emailData,
        contactResult
      });
    }

    console.log(`🟢 [submitLead] Correo transaccional enviado con éxito:`, emailData);
    emailResult = { success: true, data: emailData };

    return res.status(200).json({
      message: 'Lead registrado y correo enviado exitosamente',
      contactResult,
      emailResult
    });

  } catch (error) {
    console.error('🔴 [submitLead] Error grave en fetch a Brevo:', error);
    return res.status(500).json({ message: 'Error interno del servidor', error: error.toString(), contactResult });
  }
}
