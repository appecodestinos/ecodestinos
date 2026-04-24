export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { nombre, correo, destinos } = req.body;

  if (!nombre || !correo || !destinos) {
    return res.status(400).json({ message: 'Faltan campos obligatorios' });
  }

  const apiKey = process.env.BREVO_API_KEY;

  if (!apiKey) {
    console.error('Falta la variable de entorno BREVO_API_KEY');
    return res.status(500).json({ message: 'Error de configuración del servidor' });
  }

  const payload = {
    sender: {
      name: "Ecodestinos",
      email: "info@ecodestinos.com.co"
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
        <body style="font-family: sans-serif; color: #333;">
          <h2 style="color: #064E3B;">Hola ${nombre},</h2>
          <p>¡Gracias por conectar con el latido de la tierra!</p>
          <p>Basado en tu resonancia, te sugerimos explorar los siguientes territorios:</p>
          <ul>
            ${Array.isArray(destinos) ? destinos.map(d => `<li style="margin-bottom: 5px;"><strong>${d.toUpperCase()}</strong></li>`).join('') : `<li><strong>${destinos.toUpperCase()}</strong></li>`}
          </ul>
          <p>Entra a nuestra plataforma interactiva para descubrir los detalles, fotos y procesos alquímicos de cada destino.</p>
          <br/>
          <p>Con cariño,</p>
          <p><strong>El equipo de Ecodestinos</strong></p>
        </body>
      </html>
    `
  };

  try {
    const response = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'api-key': apiKey
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Error de Brevo:', errorData);
      return res.status(500).json({ message: 'Error enviando el correo', details: errorData });
    }

    const data = await response.json();
    return res.status(200).json({ message: 'Correo enviado exitosamente', data });

  } catch (error) {
    console.error('Error en fetch a Brevo:', error);
    return res.status(500).json({ message: 'Error interno del servidor', error: error.toString() });
  }
}
