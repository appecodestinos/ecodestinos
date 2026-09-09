export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { nombre, correo, destinos } = req.body || {};

  if (!nombre || !correo || !destinos) {
    console.error("🔴 [submitLead] Faltan campos obligatorios:", { nombre, correo, destinos });
    return res.status(400).json({ message: 'Faltan campos obligatorios (nombre, correo o destinos).' });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(correo.trim())) {
    console.error("🔴 [submitLead] Correo con formato inválido:", correo);
    return res.status(400).json({ message: 'El correo electrónico proporcionado no es válido.' });
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

  // 1. Crear o actualizar contacto en Brevo (/v3/contacts)
  try {
    const contactPayload = {
      email: correo.trim(),
      attributes: {
        NOMBRE: nombre.trim(),
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

    let contactText = await contactResponse.text();
    let contactData;
    try {
      contactData = JSON.parse(contactText);
    } catch (e) {
      contactData = { rawResponse: contactText };
    }

    if (!contactResponse.ok) {
      console.warn(`⚠️ [submitLead] Primer intento en /v3/contacts falló (Status ${contactResponse.status}):`, contactData);
      
      const fallbackPayload = { email: correo.trim(), updateEnabled: true };
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

      let fallbackText = await fallbackResponse.text();
      let fallbackData;
      try {
        fallbackData = JSON.parse(fallbackText);
      } catch (e) {
        fallbackData = { rawResponse: fallbackText };
      }
      
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

  // Map of territory metadata for email template
  const DATA_DESTINOS = {
    Amazonas: {
      nombre: "Amazonía",
      cualidad: "Raíz · Equilibrio",
      descripcion: "Invita a volver a lo esencial, reconocer lo que nos sostiene y recuperar sentido de pertenencia y equilibrio."
    },
    Macizo: {
      nombre: "Macizo / San Agustín",
      cualidad: "Renacer · Intención",
      descripcion: "Invita a sembrar una intención, soltar aquello que ya cumplió su ciclo y abrir espacio para lo nuevo."
    },
    Guainia: {
      nombre: "Guainía",
      cualidad: "Amor · Relación",
      descripcion: "Invita al encuentro, la escucha, la reciprocidad y al cuidado de los vínculos."
    },
    SierraNevada: {
      nombre: "Sierra Nevada",
      cualidad: "Manifestación",
      descripcion: "Invita a materializar, llevar la intención a la acción y dar forma a aquello que viene gestándose."
    },
    Pacífico: {
      nombre: "Pacífico",
      cualidad: "Linaje · Sonido",
      descripcion: "Invita a escuchar la memoria, reconocer nuestras raíces y conectar con aquello que nos precede."
    },
    Pacifico: {
      nombre: "Pacífico",
      cualidad: "Linaje · Sonido",
      descripcion: "Invita a escuchar la memoria, reconocer nuestras raíces y conectar con aquello que nos precede."
    },
    Putumayo: {
      nombre: "Putumayo / Caquetá",
      cualidad: "Medicina · Armonía",
      descripcion: "Invita a limpiar la mirada, perdonar el pasado y restablecer la armonía del espíritu."
    },
    SabanaDeBogota: {
      nombre: "Bogotá / Sabana",
      cualidad: "Conciencia · Claridad",
      descripcion: "Invita a observar, integrar, comprender y elegir con mayor claridad."
    },
    Bogota: {
      nombre: "Bogotá / Sabana",
      cualidad: "Conciencia · Claridad",
      descripcion: "Invita a observar, integrar, comprender y elegir con mayor claridad."
    },
    Sabana: {
      nombre: "Bogotá / Sabana",
      cualidad: "Conciencia · Claridad",
      descripcion: "Invita a observar, integrar, comprender y elegir con mayor claridad."
    },
    Antioquia: {
      nombre: "Antioquia / Zona Cafetera",
      cualidad: "Fuerza · Vitalidad",
      descripcion: "Invita a activar la fuerza interior, transformar y poner en movimiento aquello que necesita acción."
    },
    Medellin: {
      nombre: "Antioquia / Zona Cafetera",
      cualidad: "Fuerza · Vitalidad",
      descripcion: "Invita a activar la fuerza interior, transformar y poner en movimiento aquello que necesita acción."
    }
  };

  const key1 = arrayDestinos[0] || 'Amazonas';
  const key2 = arrayDestinos[1] || 'SierraNevada';
  const t1 = DATA_DESTINOS[key1] || DATA_DESTINOS.Amazonas;
  const t2 = DATA_DESTINOS[key2] || DATA_DESTINOS.SierraNevada;
  const nombreUsuario = nombre.trim();

  // 2. Enviar correo transaccional de Brevo (/v3/smtp/email)
  const senderEmail = process.env.BREVO_SENDER_EMAIL || "info@ecodestinos.com.co";
  const emailPayload = {
    sender: {
      name: "Ecodestinos",
      email: senderEmail
    },
    to: [
      {
        email: correo.trim(),
        name: nombreUsuario
      }
    ],
    bcc: [
      {
        email: "info@ecodestinos.com.co",
        name: "Equipo Ecodestinos"
      }
    ],
    subject: "Tu conexión con Territorios Vivos 🌿",
    textContent: `Hola, ${nombreUsuario}:

Gracias por conectar con el latido de la Tierra.

A partir de las respuestas que compartiste, hoy aparecen como una invitación para ti los siguientes Territorios Vivos:

• ${t1.nombre} — ${t1.cualidad}
${t1.descripcion}

• ${t2.nombre} — ${t2.cualidad}
${t2.descripcion}

Más que destinos, queremos que los sientas como posibilidades de encuentro. Cada territorio puede acompañarte desde una dimensión diferente y abrir nuevas formas de relacionarte contigo, con los demás y con la Tierra.

Tal vez uno de ellos te llamó más la atención. O quizás la combinación entre varios sea justamente lo que resuena contigo en este momento.

¿Qué te gustaría hacer ahora?

• Conversar con nosotros para explorar qué territorio —o qué convergencia entre ellos— puede acompañar mejor lo que estás buscando.
• Recibir una propuesta de viaje diseñada a partir de tu intención.
• Conocer algunas experiencias y planes para revisarlos con calma, a tu propio ritmo.

No necesitas decidir ahora. Este es simplemente un primer momento de escucha.

¿Qué sentiste al descubrir estos territorios?
Puedes responder directamente a este mensaje y estaremos felices de acompañarte.

Con cariño,
Equipo Ecodestinos
Viajes que inspiran sonrisas

Territorios Vivos
"El territorio no te dice quién eres; te invita a escucharte de otra manera."`,
    htmlContent: `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; background-color: #f4f6f4; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #2c3e50; line-height: 1.6;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #f4f6f4; padding: 30px 15px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" style="max-width: 600px; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.05); padding: 40px 30px;">
          <tr>
            <td>
              <h2 style="color: #0f2619; font-size: 20px; margin-top: 0; margin-bottom: 16px;">Hola, ${nombreUsuario}:</h2>
              
              <p style="margin-bottom: 20px; font-size: 15px; color: #333333;">Gracias por conectar con el latido de la Tierra.</p>
              
              <p style="margin-bottom: 24px; font-size: 15px; color: #333333;">A partir de las respuestas que compartiste, hoy aparecen como una invitación para ti los siguientes Territorios Vivos:</p>
              
              <!-- Territorio 1 -->
              <div style="background-color: #f8faf8; border-left: 4px solid #2e7d32; padding: 16px 20px; margin-bottom: 20px; border-radius: 0 8px 8px 0;">
                <p style="margin: 0 0 6px 0; font-size: 16px; font-weight: bold; color: #1b4332;">
                  &bull; ${t1.nombre} &mdash; <span style="color: #d97706; font-style: italic;">${t1.cualidad}</span>
                </p>
                <p style="margin: 0; font-size: 14px; color: #4a5568; line-height: 1.5;">
                  ${t1.descripcion}
                </p>
              </div>

              <!-- Territorio 2 -->
              <div style="background-color: #f8faf8; border-left: 4px solid #2e7d32; padding: 16px 20px; margin-bottom: 24px; border-radius: 0 8px 8px 0;">
                <p style="margin: 0 0 6px 0; font-size: 16px; font-weight: bold; color: #1b4332;">
                  &bull; ${t2.nombre} &mdash; <span style="color: #d97706; font-style: italic;">${t2.cualidad}</span>
                </p>
                <p style="margin: 0; font-size: 14px; color: #4a5568; line-height: 1.5;">
                  ${t2.descripcion}
                </p>
              </div>

              <p style="margin-bottom: 16px; font-size: 15px; color: #333333;">
                Más que destinos, queremos que los sientas como posibilidades de encuentro. Cada territorio puede acompañarte desde una dimensión diferente y abrir nuevas formas de relacionarte contigo, con los demás y con la Tierra.
              </p>

              <p style="margin-bottom: 24px; font-size: 15px; color: #333333;">
                Tal vez uno de ellos te llamó más la atención. O quizás la combinación entre varios sea justamente lo que resuena contigo en este momento.
              </p>

              <p style="margin-bottom: 12px; font-size: 15px; font-weight: bold; color: #0f2619;">
                ¿Qué te gustaría hacer ahora?
              </p>

              <ul style="margin: 0 0 24px 0; padding-left: 20px; font-size: 15px; color: #333333;">
                <li style="margin-bottom: 8px;">Conversar con nosotros para explorar qué territorio —o qué convergencia entre ellos— puede acompañar mejor lo que estás buscando.</li>
                <li style="margin-bottom: 8px;">Recibir una propuesta de viaje diseñada a partir de tu intención.</li>
                <li style="margin-bottom: 8px;">Conocer algunas experiencias y planes para revisarlos con calma, a tu propio ritmo.</li>
              </ul>

              <p style="margin-bottom: 20px; font-size: 15px; color: #333333;">
                No necesitas decidir ahora. Este es simplemente un primer momento de escucha.
              </p>

              <p style="margin-bottom: 20px; font-size: 15px; color: #333333;">
                <strong>¿Qué sentiste al descubrir estos territorios?</strong><br/>
                Puedes responder directamente a este mensaje y estaremos felices de acompañarte.
              </p>

              <div style="border-top: 1px solid #e2e8f0; padding-top: 20px; margin-top: 30px;">
                <p style="margin: 0; font-size: 15px; color: #333333;">Con cariño,</p>
                <p style="margin: 4px 0 0 0; font-size: 16px; font-weight: bold; color: #0f2619;">Equipo Ecodestinos</p>
                <p style="margin: 2px 0 16px 0; font-size: 13px; color: #6b7280; font-style: italic;">Viajes que inspiran sonrisas</p>
                
                <p style="margin: 16px 0 4px 0; font-size: 14px; font-weight: bold; color: #2e7d32;">Territorios Vivos</p>
                <p style="margin: 0; font-size: 13px; color: #4a5568; font-style: italic;">"El territorio no te dice quién eres; te invita a escucharte de otra manera."</p>
              </div>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`
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

    let emailText = await emailResponse.text();
    let emailData;
    try {
      emailData = JSON.parse(emailText);
    } catch (e) {
      emailData = { rawResponse: emailText };
    }

    if (!emailResponse.ok) {
      console.error(`🔴 [submitLead] Error enviando correo Brevo /v3/smtp/email (Status ${emailResponse.status}):`, emailData);
      emailResult = { success: false, status: emailResponse.status, error: emailData };

      return res.status(emailResponse.status || 500).json({
        message: emailData.message || 'Error en la API de Brevo al enviar correo',
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
