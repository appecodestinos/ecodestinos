export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { nombre, correo, destinos, lang } = req.body || {};

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

  console.log(`🟢 [submitLead] Procesando lead para: ${correo} (${nombre}). Idioma: ${lang || 'es'}. API Key detectada (${apiKey.substring(0, 6)}...)`);

  const arrayDestinos = Array.isArray(destinos) ? destinos : [destinos];

  // Nombres comerciales para almacenar en Brevo (atributo DESTINOS). Los identificadores
  // del quiz/claves internas -> nombre humano estable. getLiveStats normaliza TODAS
  // estas variantes al identificador común (p.ej. antioquia_eje_cafetero).
  const NOMBRES_BREVO = {
    Amazonas: 'Amazonas',
    Macizo: 'Macizo / San Agustín',
    Guainia: 'Guainía',
    SierraNevada: 'Sierra Nevada',
    'Pacífico': 'Pacífico',
    Pacifico: 'Pacífico',
    Putumayo: 'Putumayo',
    SabanaDeBogota: 'Bogotá / Sabana',
    Bogota: 'Bogotá / Sabana',
    Sabana: 'Bogotá / Sabana',
    Antioquia: 'Antioquia / Eje Cafetero',
    Medellin: 'Antioquia / Eje Cafetero'
  };

  const stringDestinos = arrayDestinos.map((d) => NOMBRES_BREVO[d] || d).join(', ');

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

  // Multilingual territory metadata for email templates
  const DATA_DESTINOS = {
    es: {
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
        nombre: "Antioquia / Eje Cafetero",
        cualidad: "Fuerza · Vitalidad",
        descripcion: "Invita a activar la fuerza interior, transformar y poner en movimiento aquello que necesita acción."
      },
      Medellin: {
        nombre: "Antioquia / Eje Cafetero",
        cualidad: "Fuerza · Vitalidad",
        descripcion: "Invita a activar la fuerza interior, transformar y poner en movimiento aquello que necesita acción."
      }
    },
    en: {
      Amazonas: {
        nombre: "Amazon",
        cualidad: "Root · Balance",
        descripcion: "Invites you to return to the essential, recognize what sustains us, and recover belonging and balance."
      },
      Macizo: {
        nombre: "Colombian Massif / San Agustín",
        cualidad: "Rebirth · Intention",
        descripcion: "Invites you to plant an intention, release what completed its cycle, and make space for the new."
      },
      Guainia: {
        nombre: "Guainía",
        cualidad: "Love · Relation",
        descripcion: "Invites encounter, listening, reciprocity, and caring for sacred bonds."
      },
      SierraNevada: {
        nombre: "Sierra Nevada",
        cualidad: "Manifestation",
        descripcion: "Invites materializing, taking intention into action, and shaping what has been gestating."
      },
      Pacífico: {
        nombre: "Pacific",
        cualidad: "Lineage · Sound",
        descripcion: "Invites listening to memory, recognizing our roots, and connecting with what precedes us."
      },
      Pacifico: {
        nombre: "Pacific",
        cualidad: "Lineage · Sound",
        descripcion: "Invites listening to memory, recognizing our roots, and connecting with what precedes us."
      },
      Putumayo: {
        nombre: "Putumayo / Caquetá",
        cualidad: "Medicine · Harmony",
        descripcion: "Invites you to clear your gaze, forgive the past, and restore harmony of the spirit."
      },
      SabanaDeBogota: {
        nombre: "Bogotá / Savanna",
        cualidad: "Consciousness · Clarity",
        descripcion: "Invites observing, integrating, understanding, and choosing with greater clarity."
      },
      Bogota: {
        nombre: "Bogotá / Savanna",
        cualidad: "Consciousness · Clarity",
        descripcion: "Invites observing, integrating, understanding, and choosing with greater clarity."
      },
      Sabana: {
        nombre: "Bogotá / Savanna",
        cualidad: "Consciousness · Clarity",
        descripcion: "Invites observing, integrating, understanding, and choosing with greater clarity."
      },
      Antioquia: {
        nombre: "Antioquia / Eje Cafetero",
        cualidad: "Strength · Vitality",
        descripcion: "Invites activating inner strength, transforming, and setting into motion what needs action."
      },
      Medellin: {
        nombre: "Antioquia / Eje Cafetero",
        cualidad: "Strength · Vitality",
        descripcion: "Invites activating inner strength, transforming, and setting into motion what needs action."
      }
    },
    de: {
      Amazonas: {
        nombre: "Amazonas",
        cualidad: "Wurzel · Gleichgewicht",
        descripcion: "Lädt ein, zum Wesentlichen zurückzukehren und Gleichgewicht wiederzuerlangen."
      },
      Macizo: {
        nombre: "Kolumbianisches Massiv / San Agustín",
        cualidad: "Wiedergeburt · Absicht",
        descripcion: "Lädt ein, eine Absicht zu säen, Altes loszulassen und Raum für Neues zu schaffen."
      },
      Guainia: {
        nombre: "Guainía",
        cualidad: "Liebe · Beziehung",
        descripcion: "Lädt ein zur Begegnung, zum Zuhören, zur Gegenseitigkeit und Pflege der Bande."
      },
      SierraNevada: {
        nombre: "Sierra Nevada",
        cualidad: "Manifestation",
        descripcion: "Lädt ein zu materialisieren, Absichten in Taten umzusetzen und Gestalt zu geben."
      },
      Pacífico: {
        nombre: "Pazifik",
        cualidad: "Abstammung · Klang",
        descripcion: "Lädt ein, der Erinnerung zu lauschen, unsere Wurzeln zu erkennen und zu verbinden."
      },
      Pacifico: {
        nombre: "Pazifik",
        cualidad: "Abstammung · Klang",
        descripcion: "Lädt ein, der Erinnerung zu lauschen, unsere Wurzeln zu erkennen und zu verbinden."
      },
      Putumayo: {
        nombre: "Putumayo / Caquetá",
        cualidad: "Medizin · Harmonie",
        descripcion: "Lädt ein, den Blick zu klären, der Vergangenheit zu vergeben und die Harmonie des Geistes wiederherzustellen."
      },
      SabanaDeBogota: {
        nombre: "Bogotá / Savanne",
        cualidad: "Bewusstsein · Klarheit",
        descripcion: "Lädt ein zu beobachten, zu integrieren, zu verstehen und mit Klarheit zu wählen."
      },
      Bogota: {
        nombre: "Bogotá / Savanne",
        cualidad: "Bewusstsein · Klarheit",
        descripcion: "Lädt ein zu beobachten, zu integrieren, zu verstehen und mit Klarheit zu wählen."
      },
      Sabana: {
        nombre: "Bogotá / Savanne",
        cualidad: "Bewusstsein · Klarheit",
        descripcion: "Lädt ein zu beobachten, zu integrieren, zu verstehen und mit Klarheit zu wählen."
      },
      Antioquia: {
        nombre: "Antioquia / Eje Cafetero",
        cualidad: "Kraft · Vitalität",
        descripcion: "Lädt ein, innere Kraft zu aktivieren, zu transformieren und in Bewegung zu setzen."
      },
      Medellin: {
        nombre: "Antioquia / Eje Cafetero",
        cualidad: "Kraft · Vitalität",
        descripcion: "Lädt ein, innere Kraft zu aktivieren, zu transformieren und in Bewegung zu setzen."
      }
    },
    fr: {
      Amazonas: {
        nombre: "Amazonie",
        cualidad: "Racine · Équilibre",
        descripcion: "Invite à revenir à l'essentiel, reconnaître ce qui nous soutient et retrouver le sentiment d'appartenance."
      },
      Macizo: {
        nombre: "Massif Colombien / San Agustín",
        cualidad: "Renaissance · Intention",
        descripcion: "Invite à semer une intention, libérer ce qui a accompli son cycle et ouvrir l'espace au nouveau."
      },
      Guainia: {
        nombre: "Guainía",
        cualidad: "Amour · Relation",
        descripcion: "Invite à la rencontre, l'écoute, la réciprocité et le soin des liens sacrés."
      },
      SierraNevada: {
        nombre: "Sierra Nevada",
        cualidad: "Manifestation",
        descripcion: "Invite à matérialiser, passer de l'intention à l'action et donner forme à ce qui germe."
      },
      Pacífico: {
        nombre: "Pacifique",
        cualidad: "Lignée · Son",
        descripcion: "Invite à écouter la mémoire, reconnaître nos racines et se connecter à ce qui nous précède."
      },
      Pacifico: {
        nombre: "Pacifique",
        cualidad: "Lignée · Son",
        descripcion: "Invite à écouter la mémoire, reconnaître nos racines et se connecter à ce qui nous précède."
      },
      Putumayo: {
        nombre: "Putumayo / Caquetá",
        cualidad: "Médecine · Harmonie",
        descripcion: "Invite à purifier le regard, pardonner le passé et rétablir l'harmonie de l'esprit."
      },
      SabanaDeBogota: {
        nombre: "Bogotá / Savane",
        cualidad: "Conscience · Clarté",
        descripcion: "Invite à observer, intégrer, comprendre et choisir avec plus de clarté."
      },
      Bogota: {
        nombre: "Bogotá / Savane",
        cualidad: "Conscience · Clarté",
        descripcion: "Invite à observer, intégrer, comprendre et choisir avec plus de clarté."
      },
      Sabana: {
        nombre: "Bogotá / Savane",
        cualidad: "Conscience · Clarté",
        descripcion: "Invite à observer, intégrer, comprendre et choisir avec plus de clarté."
      },
      Antioquia: {
        nombre: "Antioquia / Eje Cafetero",
        cualidad: "Force · Vitalité",
        descripcion: "Invite à activer la force intérieure, transformer et mettre en mouvement ce qui nécessite de l'action."
      },
      Medellin: {
        nombre: "Antioquia / Eje Cafetero",
        cualidad: "Force · Vitalité",
        descripcion: "Invite à activer la force intérieure, transformer et mettre en mouvement ce qui nécessite de l'action."
      }
    }
  };

  // Email text templates by language
  const EMAIL_TEMPLATES = {
    es: {
      subject: "Tu conexión con Territorios Vivos 🌿",
      greeting: `Hola, {{nombre}}:`,
      intro: "Gracias por conectar con el latido de la Tierra.",
      territories_intro: "A partir de las respuestas que compartiste, hoy aparecen como una invitación para ti los siguientes Territorios Vivos:",
      more_than_destinations: "Más que destinos, queremos que los sientas como posibilidades de encuentro. Cada territorio puede acompañarte desde una dimensión diferente y abrir nuevas formas de relacionarte contigo, con los demás y con la Tierra.",
      maybe_one: "Tal vez uno de ellos te llamó más la atención. O quizás la combinación entre varios sea justamente lo que resuena contigo en este momento.",
      what_next: "¿Qué te gustaría hacer ahora?",
      options: [
        "Conversar con nosotros para explorar qué territorio —o qué convergencia entre ellos— puede acompañar mejor lo que estás buscando.",
        "Recibir una propuesta de viaje diseñada a partir de tu intención.",
        "Conocer algunas experiencias y planes para revisarlos con calma, a tu propio ritmo."
      ],
      no_decide_now: "No necesitas decidir ahora. Este es simplemente un primer momento de escucha.",
      what_felt: "¿Qué sentiste al descubrir estos territorios?",
      reply_direct: "Puedes responder directamente a este mensaje y estaremos felices de acompañarte.",
      closing: "Con cariño,",
      team: "Equipo Ecodestinos",
      tagline: "Viajes que inspiran sonrisas",
      territories_vivos: "Territorios Vivos",
      quote: '"El territorio no te dice quién eres; te invita a escucharte de otra manera."'
    },
    en: {
      subject: "Your connection with Living Territories 🌿",
      greeting: `Hello, {{nombre}}:`,
      intro: "Thank you for connecting with the heartbeat of the Earth.",
      territories_intro: "Based on the answers you shared, the following Living Territories appear as an invitation for you:",
      more_than_destinations: "More than destinations, we want you to feel them as possibilities of encounter. Each territory can accompany you from a different dimension and open new ways of relating to yourself, others, and the Earth.",
      maybe_one: "Perhaps one of them called to you more. Or maybe the combination of several is exactly what resonates with you right now.",
      what_next: "What would you like to do now?",
      options: [
        "Chat with us to explore which territory —or which convergence between them— can best accompany what you're seeking.",
        "Receive a travel proposal designed from your intention.",
        "Learn about some experiences and plans to review at your own pace."
      ],
      no_decide_now: "You don't need to decide now. This is simply a first moment of listening.",
      what_felt: "What did you feel when discovering these territories?",
      reply_direct: "You can reply directly to this message and we'll be happy to accompany you.",
      closing: "With love,",
      team: "Ecodestinos Team",
      tagline: "Journeys that inspire smiles",
      territories_vivos: "Living Territories",
      quote: '"The territory doesn\'t tell you who you are; it invites you to listen to yourself in a different way."'
    },
    de: {
      subject: "Deine Verbindung zu lebendigen Gebieten 🌿",
      greeting: `Hallo, {{nombre}}:`,
      intro: "Danke, dass du dich mit dem Herzschlag der Erde verbunden hast.",
      territories_intro: "Basierend auf deinen Antworten erscheinen die folgenden lebendigen Gebiete als Einladung für dich:",
      more_than_destinations: "Mehr als Reiseziele möchten wir, dass du sie als Begegnungsmöglichkeiten spürst. Jedes Gebiet kann dich aus einer anderen Dimension begleiten und neue Wege eröffnen, dich mit dir selbst, anderen und der Erde zu verbinden.",
      maybe_one: "Vielleicht hat dich eines mehr angesprochen. Oder die Kombination mehrerer ist genau das, was jetzt mit dir resoniert.",
      what_next: "Was möchtest du jetzt tun?",
      options: [
        "Mit uns sprechen, um zu erkunden, welches Gebiet —oder welche Konvergenz— dich am besten begleiten kann.",
        "Ein Reisevorschlag erhalten, der aus deiner Absicht gestaltet wurde.",
        "Einige Erlebnisse und Pläne kennenlernen, um sie in deinem Tempo zu prüfen."
      ],
      no_decide_now: "Du musst jetzt nicht entscheiden. Dies ist einfach ein erster Moment des Zuhörens.",
      what_felt: "Was hast du gefühlt, als du diese Gebiete entdeckt hast?",
      reply_direct: "Du kannst direkt auf diese Nachricht antworten und wir freuen uns, dich zu begleiten.",
      closing: "Mit Liebe,",
      team: "Team Ecodestinos",
      tagline: "Reisen, die Lächeln inspirieren",
      territories_vivos: "Lebendige Gebiete",
      quote: '"Das Gebiet sagt dir nicht, wer du bist; es lädt dich ein, dich selbst anders zu hören."'
    },
    fr: {
      subject: "Votre connexion aux Territoires Vivants 🌿",
      greeting: `Bonjour, {{nombre}} :`,
      intro: "Merci de vous connecter au battement de cœur de la Terre.",
      territories_intro: "D'après les réponses que vous avez partagées, les Territoires Vivants suivants apparaissent comme une invitation pour vous :",
      more_than_destinations: "Plus que des destinations, nous voulons que vous les sentiez comme des possibilités de rencontre. Chaque territoire peut vous accompagner sous une dimension différente et ouvrir de nouvelles façons de vous relier à vous-même, aux autres et à la Terre.",
      maybe_one: "Peut-être que l'un d'entre eux vous a davantage interpellé. Ou peut-être que la combinaison de plusieurs résonne exactement avec vous en ce moment.",
      what_next: "Qu'aimeriez-vous faire maintenant ?",
      options: [
        "Échanger avec nous pour explorer quel territoire —ou quelle convergence entre eux— peut le mieux accompagner ce que vous cherchez.",
        "Recevoir une proposition de voyage conçue à partir de votre intention.",
        "Découvrir quelques expériences et programmes pour les examiner à votre rythme."
      ],
      no_decide_now: "Vous n'avez pas besoin de décider maintenant. C'est simplement un premier moment d'écoute.",
      what_felt: "Qu'avez-vous ressenti en découvrant ces territoires ?",
      reply_direct: "Vous pouvez répondre directement à ce message et nous serons ravis de vous accompagner.",
      closing: "Avec affection,",
      team: "Équipe Ecodestinos",
      tagline: "Voyages qui inspirent des sourires",
      territories_vivos: "Territoires Vivants",
      quote: '"Le territoire ne vous dit pas qui vous êtes ; il vous invite à vous écouter autrement."'
    }
  };

  const currentLang = (lang && DATA_DESTINOS[lang]) ? lang : 'es';
  const territories = DATA_DESTINOS[currentLang];
  const tpl = EMAIL_TEMPLATES[currentLang] || EMAIL_TEMPLATES.es;

  const key1 = arrayDestinos[0] || 'Amazonas';
  const key2 = arrayDestinos[1] || 'SierraNevada';
  const t1 = territories[key1] || territories.Amazonas;
  const t2 = territories[key2] || territories.SierraNevada;
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
    subject: tpl.subject,
    textContent: `${tpl.greeting.replace('{{nombre}}', nombreUsuario)}

${tpl.intro}

${tpl.territories_intro}

• ${t1.nombre} — ${t1.cualidad}
${t1.descripcion}

• ${t2.nombre} — ${t2.cualidad}
${t2.descripcion}

${tpl.more_than_destinations}

${tpl.maybe_one}

${tpl.what_next}

${tpl.options.map(opt => `• ${opt}`).join('\n')}

${tpl.no_decide_now}

${tpl.what_felt}
${tpl.reply_direct}

${tpl.closing}
${tpl.team}
${tpl.tagline}

${tpl.territories_vivos}
${tpl.quote}`,
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
              <h2 style="color: #0f2619; font-size: 20px; margin-top: 0; margin-bottom: 16px;">${tpl.greeting.replace('{{nombre}}', nombreUsuario)}</h2>
              
              <p style="margin-bottom: 20px; font-size: 15px; color: #333333;">${tpl.intro}</p>
              
              <p style="margin-bottom: 24px; font-size: 15px; color: #333333;">${tpl.territories_intro}</p>
              
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
                ${tpl.more_than_destinations}
              </p>

              <p style="margin-bottom: 24px; font-size: 15px; color: #333333;">
                ${tpl.maybe_one}
              </p>

              <p style="margin-bottom: 12px; font-size: 15px; font-weight: bold; color: #0f2619;">
                ${tpl.what_next}
              </p>

              <ul style="margin: 0 0 24px 0; padding-left: 20px; font-size: 15px; color: #333333;">
                ${tpl.options.map(opt => `<li style="margin-bottom: 8px;">${opt}</li>`).join('')}
              </ul>

              <p style="margin-bottom: 20px; font-size: 15px; color: #333333;">
                ${tpl.no_decide_now}
              </p>

              <p style="margin-bottom: 20px; font-size: 15px; color: #333333;">
                <strong>${tpl.what_felt}</strong><br/>
                ${tpl.reply_direct}
              </p>

              <div style="border-top: 1px solid #e2e8f0; padding-top: 20px; margin-top: 30px;">
                <p style="margin: 0; font-size: 15px; color: #333333;">${tpl.closing}</p>
                <p style="margin: 4px 0 0 0; font-size: 16px; font-weight: bold; color: #0f2619;">${tpl.team}</p>
                <p style="margin: 2px 0 16px 0; font-size: 13px; color: #6b7280; font-style: italic;">${tpl.tagline}</p>
                
                <p style="margin: 16px 0 4px 0; font-size: 14px; font-weight: bold; color: #2e7d32;">${tpl.territories_vivos}</p>
                <p style="margin: 0; font-size: 13px; color: #4a5568; font-style: italic;">${tpl.quote}</p>
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

  // 2. Enviar correo transaccional de Brevo (/v3/smtp/email)
  //    DESACOPLADO: el correo tarda o falla y NUNCA bloquea la respuesta.
  //    El contador del Mapa Live depende del CONTACTO (paso 1), no del correo.
  const enviarCorreoConReintento = async (intentos = 2) => {
    for (let i = 0; i < intentos; i++) {
      try {
        if (i > 0) await new Promise((r) => setTimeout(r, 800));

        console.log(`🟡 [submitLead] Enviando correo transaccional en Brevo (intento ${i + 1}/${intentos})...`, { to: correo, sender: emailPayload.sender.email, lang: currentLang });

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

        if (emailResponse.ok) {
          console.log(`🟢 [submitLead] Correo transaccional enviado con éxito:`, emailData);
          return { success: true, data: emailData };
        }

        console.warn(`⚠️ [submitLead] Intento ${i + 1} del correo falló (Status ${emailResponse.status}):`, emailData);
        if (i === intentos - 1) {
          return { success: false, status: emailResponse.status, error: emailData };
        }
      } catch (emailError) {
        console.warn(`⚠️ [submitLead] Excepción en el intento ${i + 1} del correo:`, emailError);
        if (i === intentos - 1) {
          return { success: false, error: emailError.toString() };
        }
      }
    }
    return { success: false, error: 'Sin intentos restantes' };
  };

  emailResult = null;
  if (contactResult && contactResult.success) {
    emailResult = await enviarCorreoConReintento();
  } else {
    console.warn('⚠️ [submitLead] No se envió correo porque el contacto no se registró en Brevo.');
    emailResult = { success: false, error: 'contactResult no exitoso' };
  }

  // 3. Respuesta al cliente: SIEMPRE devolver éxito cuando el contacto se registró,
  //    independientemente del resultado del correo. Así el Mapa Live suma aunque
  //    el envío tarde o requiera reintento.
  if (contactResult && contactResult.success) {
    return res.status(200).json({
      success: true,
      message: 'Lead registrado exitosamente',
      contactResult,
      emailResult
    });
  }

  console.error('🔴 [submitLead] No se pudo registrar el contacto en Brevo:', contactResult);
  return res.status(500).json({
    message: 'No se pudo registrar el lead en Brevo',
    contactResult,
    emailResult
  });
}