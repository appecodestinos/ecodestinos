import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    "es": {
        "translation": {
            "logo_circular": "/assets/logocircular.png",
            "landing": {
                "title": "Territorios Vivos",
                "tagline": "En solo 90 segundos descubre qué territorio conecta mejor contigo y recibe recomendaciones",
                "start": "Comenzar el viaje",
                "skip": "Explorar el mapa"
            },
            "procesando": {
                "rana": "La Rana está escuchando tu latido..."
            },
            "resultados": {
                "title": "TU VIAJE RESUENA CON:",
                "name_label": "tu nombre:",
                "email_label": "tu correo:",
                "button": "Recibir mis destinos"
            },
            "nav": {
                "home": "Inicio",
                "maloka": "Maloka",
                "route": "Mi Ruta",
                "community": "Comunidad"
            },
            "territory": {
                "back": "← REGRESAR AL MAPA",
                "wisdom": "Sabiduría del Territorio",
                "video": "Video Inmersivo",
                "gallery": "Galería de Memorias"
            },
            "app": {
                "save_success": "¡Bitácora guardada en la nube con éxito!",
                "save_error": "Hubo un error al guardar tu bitácora."
            },
            "maloka": {
                "title": "Maloka Ancestral",
                "workshop1_title": "🎬 Talleres: El Vientre del Macizo",
                "workshop1_desc": "Encuentro con los Hijos del Agua (Misak) y la medicina de la arcilla.",
                "workshop1_btn": "▶ Reproducir Taller",
                "audio1_title": "🎧 Audios: El Canto de las Ballenas",
                "audio1_desc": "Meditación guiada para la sanación del linaje familiar en el Pacífico.",
                "podcast1_title": "🎙️ Podcast: La Voz de los Abuelos",
                "podcast1_desc": "Sabiduría Kogui y Arhuaca sobre el propósito de vida."
            },
            "miruta": {
                "title": "Mi Bitácora de Viaje",
                "btn_location": "📍 Localización en el Territorio",
                "btn_offline": "🗺️ Mapas Offline (Maps.me)",
                "record_title": "🎙️ Graba tu sentir hoy (o escríbelo en tu bitácora)",
                "record_desc": "Tus registros se guardarán para tu integración post-viaje.",
                "placeholder": "Escribe o graba aquí tus procesos emocionales...",
                "btn_start_record": "🎙️ Iniciar Grabación",
                "btn_stop_record": "⏹️ Detener Grabación",
                "btn_audio": "🔴 Iniciar Audio (Próximamente)",
                "btn_save": "☁️ Guardar Texto",
                "saving": "Guardando en la Nube...",
                "save_success": "Diario guardado en la nube ☁️",
                "save_error": "Error al guardar la bitácora. Intenta de nuevo.",
                "record_not_supported": "Transcripción por voz no soportada en tu navegador.",
                "btn_start_tracking": "📍 Iniciar Rastreo GPS",
                "btn_tracking": "📍 Rastreando... ({{count}} pts)"
            },
            "comunidades": {
                "title": "Comunidades Vivas",
                "partners_title": "👥 Socios Estratégicos",
                "partners_desc": "Nuestra comunidad participa en las decisiones y la formación emocional.",
                "transparency_title": "Transparencia:",
                "transparency_desc": "85% del valor de tu viaje va directo a la autonomía comunitaria.",
                "gallery": "Galería de Testimonios"
            },
            "quiz": {
                "progress": "ESTACIÓN {{current}} DE 7",
                "q0": {
                    "question": "¿Cómo te has sentido últimamente?",
                    "opt0": "Con cansancio o agotamiento mental",
                    "opt1": "En cambio o transición",
                    "opt2": "Alegre y optimista",
                    "opt3": "En equilibrio y con curiosidad"
                },
                "q1": {
                    "question": "¿Qué es lo que más necesitas de la naturaleza?",
                    "opt0": "Estabilidad y arraigo",
                    "opt1": "Armonía y suavidad",
                    "opt2": "Recuperación e integración",
                    "opt3": "Inspiración y aire fresco"
                },
                "q2": {
                    "question": "¿Qué paisaje te acompaña mejor hoy?",
                    "opt0": "La tierra húmeda",
                    "opt1": "Respirar el horizonte en las montañas",
                    "opt2": "Atardecer a la orilla del mar",
                    "opt3": "Contemplar el reflejo en el agua serena"
                },
                "q3": {
                    "question": "¿Qué ritmo de viaje prefieres?",
                    "opt0": "Tranquilo, una actividad al día",
                    "opt1": "Equilibrado, dos actividades al día",
                    "opt2": "Activo, varias experiencias al día",
                    "opt3": "Flexible, según el día"
                },
                "q4": {
                    "question": "¿Qué quieres activar en ti con este viaje?",
                    "opt0": "Enraizamiento y estabilidad (Raíz)",
                    "opt1": "Creatividad y nuevos comienzos (Creación)",
                    "opt2": "Amor propio y vínculos (Corazón)",
                    "opt3": "Manifestación y visión (Propósito)"
                },
                "q5": {
                    "question": "¿Qué tipo de bienestar quieres vivir?",
                    "opt0": "Caminatas conscientes en la naturaleza",
                    "opt1": "Masajes, spa y rituales de bienestar",
                    "opt2": "Conexión con comunidades y prácticas ancestrales",
                    "opt3": "Crear con las manos (tejido, cerámica, cocina)"
                },
                "q6": {
                    "question": "¿Qué formato de viaje prefieres?",
                    "opt0": "Independiente, solo/a o a mi ritmo",
                    "opt1": "En pareja",
                    "opt2": "En familia",
                    "opt3": "En grupo para retiro o experiencia guiada"
                }
            },
            "agente": {
                "rana_nombre": "La Rana",
                "rana_saludo": "¡Hola {{nombre}}! Bienvenida a Territorios Vivos. Soy La Rana, tu guía espiritual y logística. Estoy aquí para acompañar tu camino. ¿En qué puedo colaborar hoy?",
                "rana_saludo_anon": "¡Hola! Bienvenida a Territorios Vivos. Soy La Rana, tu guía espiritual y logística. Estoy aquí para acompañar tu camino. ¿En qué puedo colaborar hoy?",
                "menu_territorio": "Quiero conocer un territorio",
                "menu_llevar": "¿Qué debo llevar?",
                "menu_salud": "Dudas sobre salud/vacunas",
                "menu_asesor": "Hablar con un asesor (WhatsApp)",
                "respuesta_mistica": "Cada territorio tiene su propia frecuencia. Para diseñar tu ruta personalizada y verificar la disponibilidad de este espacio sagrado, te invito a hablar con nosotros por WhatsApp. ¡Hagamos que suceda!",
                "btn_whatsapp": "Ir a WhatsApp",
                "funnel": {
                    "que_llevar_pregunta": "¿A qué territorio deseas viajar?",
                    "que_llevar_consejo": "Para este territorio recomendamos calzado resistente (botas o senderismo), vestimenta ligera y transpirable, y repelente orgánico. Prioriza siempre productos naturales y biodegradables para honrar la tierra.",
                    "salud_texto": "Tu bienestar es nuestra prioridad. Te recomendamos llevar tus tratamientos médicos habituales e informarnos sobre cualquier patología crónica. Contamos con kit de primeros auxilios en ruta. Para zonas de selva (Amazonas, Putumayo, Guainía), la vacuna de fiebre amarilla es recomendable, aunque no obligatoria. Consulta detalles finales con nosotros.",
                    "btn_disenar_viaje": "Diseñar mi viaje en WhatsApp",
                    "btn_consultar_asesor": "Consultar a un asesor por WhatsApp",
                    "btn_volver": "Volver al menú principal",
                    "terr_amazonas": "Amazonas",
                    "terr_macizo": "Macizo Colombiano",
                    "terr_guainia": "Guainía",
                    "terr_sierranevada": "Sierra Nevada",
                    "terr_pacifico": "Pacífico",
                    "terr_putumayo": "Putumayo & Caquetá",
                    "terr_bogota": "Bogotá & Sabana",
                    "terr_medellin": "Medellín"
                },
                "welcome": "Hola {{nombre}}, bienvenido al latido de la tierra. ¿Qué territorio o duda vienes a compartir?",
                "welcome_anon": "Hola, bienvenido al latido de la tierra. ¿Qué territorio o duda vienes a compartir?",
                "macizo": "El Macizo es el Útero de la Tierra. Aquí nace el agua que irriga a Colombia. Los volcanes Puracé y Sotará custodian tu transformación. Es un lugar para gestar nuevos proyectos y silenciar el ruido mental.",
                "amazonas": "El Amazonas es la Raíz Viva. En la Maloka, los abuelos restauran tu equilibrio con medicinas del bosque. Recuerda: la selva no se visita, se habita con respeto. (Vacuna de Fiebre Amarilla obligatoria).",
                "guainia": "Guainía es la Tulpa del Mundo. Los Cerros de Mavecure son las rocas más antiguas que verán tus ojos. Es el destino para reintegrar fragmentos perdidos de tu historia personal.",
                "sierra": "La Sierra Nevada es el Corazón del Mundo. Los hermanos mayores (Kogui/Arhuaco) nos enseñan a ordenar el pensamiento. Ideal si buscas dirección y claridad en tu propósito de vida.",
                "pacifico": "En el Pacífico, el mar y la selva se abrazan. Las ballenas Yubarta vienen a parir, igual que tú vendrás a sanar tu linaje familiar y soltar lo que ya no te pertenece.",
                "putumayo": "Putumayo es Alquimia Pura. El territorio del Jaguar te exige presencia absoluta. Es para quienes están listos para una transformación profunda y sin máscaras.",
                "guatavita": "Guatavita es el vientre de Bachué. Aquí el 'Dorado' no es metal, es la luz de tu alma. Perfecto para cierres de ciclo y nuevos comienzos conscientes.",
                "comida": "Comerás la medicina de la tierra: frutos selváticos, preparaciones ancestrales y alimentos orgánicos de las comunidades. Alimentamos el cuerpo para que el alma pueda viajar.",
                "precio": "Nuestros viajes son inversiones en tu ser. Los precios varían según el territorio y la profundidad del proceso (aprox. 3.5 a 5.5 millones). Cada peso apoya la autonomía de las comunidades guardianas.",
                "yoga": "Toda la ruta es una meditación en movimiento. Practicamos la conexión consciente y el silencio. Si buscas un retiro de yoga específico, el Macizo es tu lugar sagrado.",
                "seguridad": "La tierra te cuida. Viajamos bajo la protección de las asociaciones indígenas y contamos con seguro médico integral. Estás en manos de los guardianes del territorio.",
                "vacuna": "La rana te recuerda: Para el Amazonas y Putumayo, la vacuna de Fiebre Amarilla es obligatoria 10 días antes. ¡Ecodestinos te otorga seguro médico integral en todo el viaje!",
                "seguro": "¡No temas! Cada paso en el territorio está cubierto. Nuestra agencia te brinda un seguro médico integral y atención personalizada de la comunidad.",
                "ropa": "Lleva ropa de secado rápido, manga larga para mosquitos, botas cómodas, repelente y tus medicamentos personales. ¡La selva te espera preparado!",
                "wifi": "La rana prefiere el agua al Wi-Fi. Solo habrá conexión en los hoteles; en el territorio profundo, la conexión es directa con la tierra y tu corazón. 🌿",
                "quien": "Soy el pulso de Ecodestinos. Mi canto te guía hacia el territorio que tu energía necesita hoy. Soy el puente entre tu latido y el de la tierra.",
                "default": "Mis oídos de rana están atentos, pero esa palabra no la reconozco aún. Pregúntame sobre territorios, vacunas, qué llevar o el sentido espiritual de tu viaje.",
                "cierre": "\n\n✨ Escucho tu vibración, {{nombre}}... Si mi canto no es suficiente, presiona abajo para hablar con los guardianes humanos.",
                "cierre_anon": "\n\n✨ Escucho tu vibración... Si mi canto no es suficiente, presiona abajo para hablar con los guardianes humanos.",
                "placeholder": "Háblale a la rana...",
                "whatsapp": "📲 ¿Dudas sobre el viaje? WhatsApp Directo"
            },
            "validation": {
                "error_nombre": "Por favor, ingresa tu nombre.",
                "error_correo": "Por favor, ingresa tu correo electrónico."
            },
            "landing_intro": {
                "titulo": "COLOMBIA COMO MAPA DE BIENESTAR",
                "subtitulo": "Territorios vivos para viajar según el momento que estás viviendo",
                "descripcion": "En Ecodestinos entendemos que no todos los viajes se sienten igual.\nCada territorio de Colombia tiene una energía, un ritmo y una forma distinta de acompañarnos.\n\nAlgunos lugares ayudan a descansar. Otros inspiran nuevas ideas. Otros invitan a reconectar con la naturaleza, con las personas o con uno mismo.\n\nEste mapa de experiencias fue creado para ayudar a cada viajero a descubrir qué territorio puede hacerle bien hoy."
            },
            "destinos": {
                "Amazonas": {
                    "title": "ORIGEN Y ARRAIGO",
                    "archetype": "Ancestralidad",
                    "desc": "Selva viva para desconectar y volver a lo esencial.\n\nIdeal si necesitas bajar el ritmo, silenciar la mente y sentirte más presente, estable y conectado con la naturaleza.\n\nLa Amazonía colombiana ofrece experiencias de inmersión en selva, ríos y culturas locales que ayudan a recuperar equilibrio y simplicidad.\n\nPerfecto para:\n• Desconexión digital\n• Descanso mental\n• Naturaleza profunda\n• Viajes conscientes\n\n(Fuerza Raíz)"
                },
                "Macizo": {
                    "title": "ARQUEOLOGÍA INTERIOR",
                    "archetype": "Nutrición",
                    "desc": "Naturaleza, memoria ancestral y bienestar para renovarte profundamente.\n\nIdeal si estás cerrando una etapa o comenzando una nueva, y buscas descanso, calma y una sensación de renovación interior.\n\nEl Macizo Colombiano y San Agustín albergan uno de los legados arqueológicos más importantes de América del Sur. Sus paisajes, esculturas ancestrales y sitios ceremoniales invitan a reflexionar sobre el origen, la memoria y la transformación personal.\n\nExperiencias destacadas:\n• Exploración arqueológica y cultural\n• Cerámica y creación de ocarinas\n• Música y folclor tradicional\n• Agricultura orgánica\n• Caminatas suaves y bienestar\n• Espacios de pausa y contemplación\n\nPerfecto para:\n• Renovación personal\n• Viajes culturales y conscientes\n• Creatividad y descanso\n• Conexión con la historia viva del territorio\n\n(Territorio de Transformación)"
                },
                "Guainia": {
                    "title": "AGUAS DE UNIDAD",
                    "archetype": "Conciliación",
                    "desc": "Un territorio de calma, conexión y equilibrio.\n\nIdeal si buscas desconectar del ruido, sentirte en armonía y reconectar contigo y con los demás en un entorno natural único.\n\nGuainía invita a viajar con calma, navegar entre ríos y descubrir culturas y paisajes profundamente auténticos. Las tradiciones vivas de comunidades como los curripacos y puinaves enriquecen la experiencia a través de relatos, saberes locales y formas ancestrales de relacionarse con el agua y la selva.\n\nExperiencias destacadas:\n• Navegación entre ríos y cerros sagrados\n• Encuentros culturales con comunidades locales\n• Gastronomía tradicional\n• Naturaleza y contemplación\n• Experiencias boutique de bienestar y conexión\n\nPerfecto para:\n• Slow travel\n• Bienestar emocional\n• Conexión con la naturaleza\n• Culturas vivas y experiencias auténticas\n\n(Territorio de Encuentro)"
                },
                "SierraNevada": {
                    "title": "ALQUIMIA DEL CORAZÓN",
                    "archetype": "Despertar",
                    "desc": "Montañas y mar para inspirarte, agradecer y encontrar dirección.\n\nIdeal si buscas claridad para tus próximos pasos, reconectar con tu motivación y vivir experiencias con sentido.\n\nLa Sierra Nevada de Santa Marta es considerada por sus pueblos indígenas como el “Corazón del Mundo”. La sabiduría de sus guardianes ancestrales, sus prácticas de armonización y el respeto por la naturaleza inspiran experiencias de gratitud, equilibrio y conexión profunda con la vida.\n\nExperiencias destacadas:\n• Encuentros culturales y saberes ancestrales\n• Caminatas entre montaña, río y mar\n• Espacios de contemplación y bienestar\n• Rituales tradicionales de gratitud y armonización\n• Naturaleza viva y experiencias transformadoras\n\nPerfecto para:\n• Inspiración y propósito\n• Bienestar integral\n• Conexión con naturaleza y cultura\n• Viajes con sentido y profundidad humana\n\n(Territorio de Gratitud y Manifestación)"
                },
                "Pacífico": {
                    "title": "MEMORIA DEL OCÉANO",
                    "archetype": "Sanación",
                    "desc": "Selva y mar para descansar, sentir y reconectar.\n\nIdeal si necesitas soltar tensión, cuidar de ti y vivir una experiencia cálida, auténtica y profundamente humana.\n\nEl Pacífico colombiano invita a conectar con el ritmo natural del océano, la música tradicional y la riqueza cultural de sus comunidades.\n\nExperiencias destacadas:\n• Avistamiento de ballenas\n• Música y danza tradicional\n• Gastronomía del Pacífico\n• Caminatas entre selva y playa\n• Bienestar junto al mar\n\n(Territorio de Vínculo y Memoria)"
                },
                "Putumayo": {
                    "title": "REFUGIO ANCESTRAL",
                    "archetype": "Alquimia",
                    "desc": "Naturaleza profunda para descansar e integrar.\n\nIdeal si sientes agotamiento mental o físico y buscas una experiencia tranquila, restauradora y conectada con saberes tradicionales.\n\nEste territorio, entre los Andes y la Amazonía, ofrece espacios de silencio, naturaleza y bienestar que ayudan a recuperar equilibrio y presencia.\n\nPerfecto para:\n• Descanso profundo\n• Bienestar natural\n• Integración personal\n• Conexión cultural\n\n(Territorio de Integración)"
                },
                "Bogota": {
                    "title": "SABIDURÍA",
                    "archetype": "Sabiduría",
                    "desc": "Espacios para pausar, ordenar ideas y ganar claridad.\n\nIdeal si buscas tomar perspectiva, comprender mejor el momento que estás viviendo y volver con una mente más tranquila y enfocada.\n\nLa Sabana de Bogotá combina cultura, naturaleza y paisajes de alta montaña que invitan a respirar más lento y reconectar con el entorno. Sus lagunas sagradas, páramos y prácticas musicales tradicionales crean experiencias de contemplación, memoria y bienestar.\n\nExperiencias destacadas:\n• Caminatas suaves en páramos y reservas naturales\n• Visitas a lagunas sagradas y paisajes andinos\n• Experiencias musicales y culturales\n• Gastronomía local y bienestar urbano\n• Espacios de conversación y pausa consciente\n\nPerfecto para viajeros interesados en:\n• Bienestar urbano\n• Cultura e historia\n• Naturaleza cercana\n• Inspiración y claridad mental\n\n(Territorio Conciencia)"
                },
                "Medellin": {
                    "title": "EXPANSIÓN CREATIVA",
                    "archetype": "Acción",
                    "desc": "Energía, innovación y nuevas experiencias.\n\nIdeal si buscas inspiración, movimiento, conexión con otros y un entorno dinámico que impulse nuevas ideas y proyectos.\n\nMedellín combina creatividad, cultura, transformación urbana y naturaleza cercana en una experiencia vibrante y contemporánea.\n\nPerfecto para:\n• Viajeros creativos\n• Innovación\n• Arte y diseño\n• Experiencias urbanas con propósito\n\n(Fuerza de Acción)"
                }
            },
            "landing_outro": {
                "vision": "🌎 NUESTRA VISIÓN\n\nCreemos que viajar también puede ser una forma de:\n• Descansar mejor\n• Inspirarse\n• Reconectar\n• Crear\n• Compartir\n• Sentirse más presente\n\nMás que destinos, Colombia ofrece territorios vivos que acompañan diferentes momentos de la vida.\n\n✨ Bienvenido a viajar desde lo que necesitas sentir hoy."
            },
            "introduccion": {
                "titulo": "Territorios Vivos",
                "texto": "En Ecodestinos, un destino no es solo un lugar. Es un territorio vivo donde la naturaleza, la cultura y la memoria ancestral sostienen una energía única que acompaña tu momento de vida."
            },
            "frase_final": "No eliges un destino. Eliges el territorio que acompaña tu momento."
        }
    },
    "en": {
        "translation": {
            "logo_circular": "/assets/logo-ecodestinos-circular-en.png",
            "landing": {
                "title": "Living Territories",
                "tagline": "In just 90 seconds, discover which territory connects best with you and receive recommendations",
                "start": "Begin the journey",
                "skip": "Explore the map"
            },
            "procesando": {
                "rana": "The Frog is listening to your heartbeat..."
            },
            "resultados": {
                "title": "YOUR TRIP RESONATES WITH:",
                "name_label": "your name:",
                "email_label": "your email:",
                "button": "Receive my destinations"
            },
            "nav": {
                "home": "Home",
                "maloka": "Maloka",
                "route": "My Route",
                "community": "Community"
            },
            "territory": {
                "back": "← RETURN TO MAP",
                "wisdom": "Wisdom of the Territory",
                "video": "Immersive Video",
                "gallery": "Memory Gallery"
            },
            "app": {
                "save_success": "Logbook successfully saved to the cloud!",
                "save_error": "There was an error saving your logbook."
            },
            "maloka": {
                "title": "Ancestral Maloka",
                "workshop1_title": "🎬 Workshops: The Womb of the Massif",
                "workshop1_desc": "Encounter with the Children of Water (Misak) and clay medicine.",
                "workshop1_btn": "▶ Play Workshop",
                "audio1_title": "🎧 Audios: The Song of the Whales",
                "audio1_desc": "Guided meditation for healing the family lineage in the Pacific.",
                "podcast1_title": "🎙️ Podcast: The Voice of the Grandparents",
                "podcast1_desc": "Kogui and Arhuaco wisdom on life's purpose."
            },
            "miruta": {
                "title": "My Travel Logbook",
                "btn_location": "📍 Location in the Territory",
                "btn_offline": "🗺️ Offline Maps (Maps.me)",
                "record_title": "🎙️ Record your feelings today (or write them)",
                "record_desc": "Your records will be saved for your post-trip integration.",
                "placeholder": "Write or record your emotional processes here...",
                "btn_start_record": "🎙️ Start Recording",
                "btn_stop_record": "⏹️ Stop Recording",
                "btn_audio": "🔴 Start Audio (Coming soon)",
                "btn_save": "☁️ Save Text",
                "saving": "Saving to Cloud...",
                "save_success": "Logbook saved to the cloud ☁️",
                "save_error": "Error saving logbook. Try again.",
                "record_not_supported": "Voice transcription not supported in your browser.",
                "btn_start_tracking": "📍 Start GPS Tracking",
                "btn_tracking": "📍 Tracking... ({{count}} pts)"
            },
            "comunidades": {
                "title": "Living Communities",
                "partners_title": "👥 Strategic Partners",
                "partners_desc": "Our community participates in decisions and emotional training.",
                "transparency_title": "Transparency:",
                "transparency_desc": "85% of your trip's value goes straight to community autonomy.",
                "gallery": "Testimonial Gallery"
            },
            "quiz": {
                "progress": "STATION {{current}} OF 7",
                "q0": { "question": "How have you been feeling lately?", "opt0": "Mentally tired or exhausted", "opt1": "In transition or change", "opt2": "Cheerful and optimistic", "opt3": "Balanced and curious" },
                "q1": { "question": "What do you need most from nature?", "opt0": "Stability and grounding", "opt1": "Harmony and softness", "opt2": "Recovery and integration", "opt3": "Inspiration and fresh air" },
                "q2": { "question": "Which landscape accompanies you best today?", "opt0": "Damp earth", "opt1": "Breathing the mountain horizon", "opt2": "Sunset by the sea", "opt3": "Contemplating the reflection in serene water" },
                "q3": { "question": "What travel pace do you prefer?", "opt0": "Calm, one activity per day", "opt1": "Balanced, two activities per day", "opt2": "Active, multiple experiences per day", "opt3": "Flexible, depending on the day" },
                "q4": { "question": "What do you want to activate in yourself with this trip?", "opt0": "Grounding and stability (Root)", "opt1": "Creativity and new beginnings (Creation)", "opt2": "Self-love and connections (Heart)", "opt3": "Manifestation and vision (Purpose)" },
                "q5": { "question": "What type of wellness do you want to experience?", "opt0": "Mindful walks in nature", "opt1": "Massages, spa, and wellness rituals", "opt2": "Connection with communities and ancestral practices", "opt3": "Creating with your hands (weaving, ceramics, cooking)" },
                "q6": { "question": "What travel format do you prefer?", "opt0": "Independent, solo or at my own pace", "opt1": "As a couple", "opt2": "With family", "opt3": "In a group for a retreat or guided experience" }
            },
            "agente": {
                "rana_nombre": "The Frog",
                "rana_saludo": "Hello {{nombre}}! Welcome to Territorios Vivos. I am The Frog, your spiritual and logistical guide. I am here to accompany your path. How can I help you today?",
                "rana_saludo_anon": "Hello! Welcome to Territorios Vivos. I am The Frog, your spiritual and logistical guide. I am here to accompany your path. How can I help you today?",
                "menu_territorio": "I want to know a territory",
                "menu_llevar": "What should I pack?",
                "menu_salud": "Doubts about health/vaccines",
                "menu_asesor": "Speak with an advisor (WhatsApp)",
                "respuesta_mistica": "Each territory has its own frequency. To design your personalized route and verify the availability of this sacred space, I invite you to speak with us via WhatsApp. Let's make it happen!",
                "btn_whatsapp": "Go to WhatsApp",
                "funnel": {
                    "que_llevar_pregunta": "Which territory do you want to visit?",
                    "que_llevar_consejo": "For this territory we recommend sturdy footwear (boots or hiking shoes), light and breathable clothing, and organic repellent. Always prioritize natural and biodegradable products to honor the earth.",
                    "salud_texto": "Your well-being is our priority. We recommend bringing your regular medical treatments and informing us of any chronic pathology. We have a first aid kit en route. For jungle areas (Amazonas, Putumayo, Guainía), the yellow fever vaccine is recommended, although not mandatory. Consult final details with us.",
                    "btn_disenar_viaje": "Design my trip on WhatsApp",
                    "btn_consultar_asesor": "Consult an advisor on WhatsApp",
                    "btn_volver": "Return to main menu",
                    "terr_amazonas": "Amazonas",
                    "terr_macizo": "Colombian Massif",
                    "terr_guainia": "Guainía",
                    "terr_sierranevada": "Sierra Nevada",
                    "terr_pacifico": "Pacific",
                    "terr_putumayo": "Putumayo & Caquetá",
                    "terr_bogota": "Bogotá & Sabana",
                    "terr_medellin": "Medellín"
                },
                "welcome": "Hello {{nombre}}, welcome to the heartbeat of the earth. What territory or question do you come to share?",
                "welcome_anon": "Hello, welcome to the heartbeat of the earth. What territory or question do you come to share?",
                "macizo": "The Massif is the Womb of the Earth. Here the water that irrigates Colombia is born. The Puracé and Sotará volcanoes guard your transformation. It's a place to gestate new projects and silence mental noise.",
                "amazonas": "The Amazon is the Living Root. In the Maloka, the grandfathers restore your balance with forest medicines. Remember: the jungle is not visited, it is inhabited with respect. (Yellow Fever vaccine mandatory).",
                "guainia": "Guainía is the Hearth of the World. The Mavecure Hills are the oldest rocks your eyes will see. It is the destination to reintegrate lost fragments of your personal history.",
                "sierra": "The Sierra Nevada is the Heart of the World. The older brothers (Kogui/Arhuaco) teach us how to order our thoughts. Ideal if you seek direction and clarity in your life purpose.",
                "pacifico": "In the Pacific, the sea and the jungle embrace. The Humpback whales come to give birth, just as you will come to heal your family lineage and release what no longer belongs to you.",
                "putumayo": "Putumayo is Pure Alchemy. The territory of the Jaguar demands absolute presence. It is for those ready for a deep transformation without masks.",
                "guatavita": "Guatavita is the womb of Bachué. Here the 'Eldorado' is not metal, it is the light of your soul. Perfect for closing cycles and conscious new beginnings.",
                "comida": "You will eat the medicine of the earth: jungle fruits, ancestral preparations, and organic food from the communities. We nourish the body so the soul can travel.",
                "precio": "Our journeys are investments in your being. Prices vary according to the territory and the depth of the process (approx. 3.5 to 5.5 million COP). Every peso supports the autonomy of the guardian communities.",
                "yoga": "The whole route is a meditation in motion. We practice conscious connection and silence. If you are looking for a specific yoga retreat, the Massif is your sacred place.",
                "seguridad": "The earth takes care of you. We travel under the protection of indigenous associations and have comprehensive medical insurance. You are in the hands of the territory's guardians.",
                "vacuna": "The frog reminds you: For the Amazon and Putumayo, the Yellow Fever vaccine is mandatory 10 days before. Ecodestinos provides comprehensive medical insurance for the whole trip!",
                "seguro": "Fear not! Every step in the territory is covered. Our agency provides comprehensive medical insurance and personalized attention from the community.",
                "ropa": "Bring quick-drying clothes, long sleeves for mosquitoes, comfortable boots, repellent, and your personal medications. The jungle awaits you prepared!",
                "wifi": "The frog prefers water to Wi-Fi. There will only be a connection in the hotels; in the deep territory, the connection is direct with the earth and your heart. 🌿",
                "quien": "I am the pulse of Ecodestinos. My song guides you to the territory your energy needs today. I am the bridge between your heartbeat and the earth's.",
                "default": "My frog ears are attentive, but I don't recognize that word yet. Ask me about territories, vaccines, what to pack, or the spiritual meaning of your trip.",
                "cierre": "\n\n✨ I hear your vibration, {{nombre}}... If my song is not enough, press below to speak with the human guardians.",
                "cierre_anon": "\n\n✨ I hear your vibration... If my song is not enough, press below to speak with the human guardians.",
                "placeholder": "Talk to the frog...",
                "whatsapp": "📲 Doubts about the trip? Direct WhatsApp"
            },
            "validation": {
                "error_nombre": "Please enter your name.",
                "error_correo": "Please enter your email."
            },
            "landing_intro": {
                "titulo": "COLOMBIA AS A WELLNESS MAP",
                "subtitulo": "Living territories to travel according to the moment you are living",
                "descripcion": "At Ecodestinos we understand that not all trips feel the same.\nEach territory in Colombia has a different energy, rhythm, and way of accompanying us.\n\nSome places help us rest. Others inspire new ideas. Others invite us to reconnect with nature, with people, or with ourselves.\n\nThis map of experiences was created to help each traveler discover which territory can do them good today."
            },
            "destinos": {
                "Amazonas": {
                    "title": "ORIGIN AND ROOTING",
                    "archetype": "Ancestry",
                    "desc": "Living jungle to disconnect and return to the essential.\n\nIdeal if you need to slow down, silence your mind, and feel more present, stable, and connected to nature.\n\nThe Colombian Amazon offers immersion experiences in the jungle, rivers, and local cultures that help restore balance and simplicity.\n\nPerfect for:\n• Digital disconnection\n• Mental rest\n• Deep nature\n• Mindful travel\n\n(Root Force)"
                },
                "Macizo": {
                    "title": "INNER ARCHAEOLOGY",
                    "archetype": "Nutrition",
                    "desc": "Nature, ancestral memory, and wellness to renew yourself deeply.\n\nIdeal if you are closing a chapter or starting a new one, and are looking for rest, calm, and a sense of inner renewal.\n\nThe Colombian Massif and San Agustín house one of the most important archaeological legacies in South America. Its landscapes, ancestral sculptures, and ceremonial sites invite reflection on origin, memory, and personal transformation.\n\nFeatured experiences:\n• Archaeological and cultural exploration\n• Ceramics and ocarina creation\n• Traditional music and folklore\n• Organic agriculture\n• Gentle hikes and wellness\n• Spaces for pause and contemplation\n\nPerfect for:\n• Personal renewal\n• Cultural and mindful travel\n• Creativity and rest\n• Connection with the living history of the territory\n\n(Transformation Territory)"
                },
                "Guainia": {
                    "title": "WATERS OF UNITY",
                    "archetype": "Conciliation",
                    "desc": "A territory of calm, connection, and balance.\n\nIdeal if you want to disconnect from the noise, feel in harmony, and reconnect with yourself and others in a unique natural environment.\n\nGuainía invites you to travel calmly, navigate between rivers, and discover deeply authentic cultures and landscapes. The living traditions of communities like the Curripacos and Puinaves enrich the experience through stories, local knowledge, and ancestral ways of relating to water and the jungle.\n\nFeatured experiences:\n• Navigation between rivers and sacred hills\n• Cultural encounters with local communities\n• Traditional gastronomy\n• Nature and contemplation\n• Boutique wellness and connection experiences\n\nPerfect for:\n• Slow travel\n• Emotional wellness\n• Connection with nature\n• Living cultures and authentic experiences\n\n(Encounter Territory)"
                },
                "SierraNevada": {
                    "title": "ALCHEMY OF THE HEART",
                    "archetype": "Awakening",
                    "desc": "Mountains and sea to inspire you, give thanks, and find direction.\n\nIdeal if you are looking for clarity for your next steps, reconnecting with your motivation, and living meaningful experiences.\n\nThe Sierra Nevada de Santa Marta is considered by its indigenous peoples as the “Heart of the World”. The wisdom of its ancestral guardians, its harmonization practices, and respect for nature inspire experiences of gratitude, balance, and a deep connection with life.\n\nFeatured experiences:\n• Cultural encounters and ancestral knowledge\n• Hikes between mountain, river, and sea\n• Spaces for contemplation and wellness\n• Traditional rituals of gratitude and harmonization\n• Living nature and transformative experiences\n\nPerfect for:\n• Inspiration and purpose\n• Holistic wellness\n• Connection with nature and culture\n• Travel with meaning and human depth\n\n(Gratitude and Manifestation Territory)"
                },
                "Pacífico": {
                    "title": "MEMORY OF THE OCEAN",
                    "archetype": "Healing",
                    "desc": "Jungle and sea to rest, feel, and reconnect.\n\nIdeal if you need to release tension, take care of yourself, and live a warm, authentic, and deeply human experience.\n\nThe Colombian Pacific invites you to connect with the natural rhythm of the ocean, traditional music, and the cultural richness of its communities.\n\nFeatured experiences:\n• Whale watching\n• Traditional music and dance\n• Pacific gastronomy\n• Hikes between jungle and beach\n• Wellness by the sea\n\n(Bond and Memory Territory)"
                },
                "Putumayo": {
                    "title": "ANCESTRAL REFUGE",
                    "archetype": "Alchemy",
                    "desc": "Deep nature to rest and integrate.\n\nIdeal if you feel mental or physical exhaustion and are looking for a quiet, restorative experience connected to traditional knowledge.\n\nThis territory, between the Andes and the Amazon, offers spaces of silence, nature, and wellness that help restore balance and presence.\n\nPerfect for:\n• Deep rest\n• Natural wellness\n• Personal integration\n• Cultural connection\n\n(Integration Territory)"
                },
                "Bogota": {
                    "title": "WISDOM",
                    "archetype": "Wisdom",
                    "desc": "Spaces to pause, organize ideas, and gain clarity.\n\nIdeal if you are looking to gain perspective, better understand the moment you are living, and return with a calmer and more focused mind.\n\nThe Bogota Savanna combines culture, nature, and high mountain landscapes that invite you to breathe slower and reconnect with the environment. Its sacred lagoons, moorlands, and traditional musical practices create experiences of contemplation, memory, and wellness.\n\nFeatured experiences:\n• Gentle hikes in moorlands and nature reserves\n• Visits to sacred lagoons and Andean landscapes\n• Musical and cultural experiences\n• Local gastronomy and urban wellness\n• Spaces for conversation and mindful pause\n\nPerfect for travelers interested in:\n• Urban wellness\n• Culture and history\n• Nearby nature\n• Inspiration and mental clarity\n\n(Consciousness Territory)"
                },
                "Medellin": {
                    "title": "CREATIVE EXPANSION",
                    "archetype": "Action",
                    "desc": "Energy, innovation, and new experiences.\n\nIdeal if you are looking for inspiration, movement, connection with others, and a dynamic environment that drives new ideas and projects.\n\nMedellín combines creativity, culture, urban transformation, and nearby nature in a vibrant and contemporary experience.\n\nPerfect for:\n• Creative travelers\n• Innovation\n• Art and design\n• Purposeful urban experiences\n\n(Action Force)"
                }
            },
            "landing_outro": {
                "vision": "🌎 OUR VISION\n\nWe believe that traveling can also be a way to:\n• Rest better\n• Get inspired\n• Reconnect\n• Create\n• Share\n• Feel more present\n\nMore than destinations, Colombia offers living territories that accompany different moments in life.\n\n✨ Welcome to travel from what you need to feel today."
            },
            "introduccion": {
                "titulo": "Living Territories",
                "texto": "In Ecodestinos, a destination is not just a place. It is a living territory where nature, culture, and ancestral memory sustain a unique energy that accompanies your life moment."
            },
            "frase_final": "You do not choose a destination. You choose the territory that accompanies your moment."
        }
    },
    "de": {
        "translation": {
            "logo_circular": "/assets/logo-ecodestinos-circular-de.png",
            "landing": {
                "title": "Lebendige Territorien",
                "tagline": "Entdecke in nur 90 Sekunden, welches Gebiet am besten mit dir in Resonanz tritt, und erhalte Empfehlungen",
                "start": "Die Reise beginnen",
                "skip": "Die Karte erkunden"
            },
            "procesando": {
                "rana": "Der Frosch hört deinen Herzschlag..."
            },
            "resultados": {
                "title": "DEINE REISE RESONIERT MIT:",
                "name_label": "dein Name:",
                "email_label": "deine E-Mail:",
                "button": "Meine Ziele erhalten"
            },
            "nav": {
                "home": "Start",
                "maloka": "Maloka",
                "route": "Meine Route",
                "community": "Gemeinschaft"
            },
            "territory": {
                "back": "← ZURÜCK ZUR KARTE",
                "wisdom": "Weisheit des Territoriums",
                "video": "Immersives Video",
                "gallery": "Erinnerungsgalerie"
            },
            "app": {
                "save_success": "Logbuch erfolgreich in der Cloud gespeichert!",
                "save_error": "Es gab einen Fehler beim Speichern deines Logbuchs."
            },
            "maloka": {
                "title": "Ahnen-Maloka",
                "workshop1_title": "🎬 Workshops: Der Schoß des Massivs",
                "workshop1_desc": "Begegnung mit den Kindern des Wassers (Misak) und der Tonmedizin.",
                "workshop1_btn": "▶ Workshop abspielen",
                "audio1_title": "🎧 Audios: Der Gesang der Wale",
                "audio1_desc": "Geführte Meditation zur Heilung der Familienlinie im Pazifik.",
                "podcast1_title": "🎙️ Podcast: Die Stimme der Großeltern",
                "podcast1_desc": "Weisheit der Kogui und Arhuaco über den Sinn des Lebens."
            },
            "miruta": {
                "title": "Mein Reiselogbuch",
                "btn_location": "📍 Standort im Territorium",
                "btn_offline": "🗺️ Offline-Karten (Maps.me)",
                "record_title": "🎙️ Nimm deine heutigen Gefühle auf (oder schreibe sie)",
                "record_desc": "Deine Aufzeichnungen werden für deine Integration nach der Reise gespeichert.",
                "placeholder": "Schreibe oder nimm deine emotionalen Prozesse hier auf...",
                "btn_start_record": "🎙️ Aufnahme starten",
                "btn_stop_record": "⏹️ Aufnahme beenden",
                "btn_audio": "🔴 Audio starten (Demnächst)",
                "btn_save": "☁️ Text speichern",
                "saving": "Speichere in der Cloud...",
                "save_success": "Tagebuch in der Cloud gespeichert ☁️",
                "save_error": "Fehler beim Speichern. Versuche es erneut.",
                "record_not_supported": "Sprachtranskription wird in deinem Browser nicht unterstützt.",
                "btn_start_tracking": "📍 GPS-Tracking starten",
                "btn_tracking": "📍 Tracking... ({{count}} pts)"
            },
            "comunidades": {
                "title": "Lebendige Gemeinschaften",
                "partners_title": "👥 Strategische Partner",
                "partners_desc": "Unsere Gemeinschaft beteiligt sich an Entscheidungen und emotionalem Training.",
                "transparency_title": "Transparenz:",
                "transparency_desc": "85% des Wertes deiner Reise gehen direkt an die Autonomie der Gemeinschaft.",
                "gallery": "Testimonial-Galerie"
            },
            "quiz": {
                "progress": "STATION {{current}} VON 7",
                "q0": { "question": "Wie hast du dich in letzter Zeit gefühlt?", "opt0": "Geistig müde oder erschöpft", "opt1": "Im Wandel oder Übergang", "opt2": "Fröhlich und optimistisch", "opt3": "Im Gleichgewicht und neugierig" },
                "q1": { "question": "Was brauchst du am meisten von der Natur?", "opt0": "Stabilität und Erdung", "opt1": "Harmonie und Sanftheit", "opt2": "Erholung und Integration", "opt3": "Inspiration und frische Luft" },
                "q2": { "question": "Welche Landschaft passt heute am besten zu dir?", "opt0": "Die feuchte Erde", "opt1": "Den Horizont in den Bergen atmen", "opt2": "Sonnenuntergang am Meer", "opt3": "Das Spiegelbild im ruhigen Wasser betrachten" },
                "q3": { "question": "Welches Reisetempo bevorzugst du?", "opt0": "Ruhig, eine Aktivität pro Tag", "opt1": "Ausgewogen, zwei Aktivitäten pro Tag", "opt2": "Aktiv, mehrere Erlebnisse pro Tag", "opt3": "Flexibel, je nach Tag" },
                "q4": { "question": "Was möchtest du mit dieser Reise in dir aktivieren?", "opt0": "Erdung und Stabilität (Wurzel)", "opt1": "Kreativität und Neuanfänge (Schöpfung)", "opt2": "Selbstliebe und Verbindungen (Herz)", "opt3": "Manifestation und Vision (Zweck)" },
                "q5": { "question": "Welche Art von Wellness möchtest du erleben?", "opt0": "Achtsame Spaziergänge in der Natur", "opt1": "Massagen, Spa und Wellness-Rituale", "opt2": "Verbindung mit Gemeinschaften und alten Praktiken", "opt3": "Mit den Händen erschaffen (Weben, Keramik, Kochen)" },
                "q6": { "question": "Welches Reiseformat bevorzugst du?", "opt0": "Unabhängig, alleine oder in meinem eigenen Tempo", "opt1": "Als Paar", "opt2": "Mit der Familie", "opt3": "In einer Gruppe für ein Retreat oder geführte Erfahrung" }
            },
            "agente": {
                "rana_nombre": "Der Frosch",
                "rana_saludo": "Hallo {{nombre}}! Willkommen bei Territorios Vivos. Ich bin Der Frosch, dein spiritueller und logistischer Begleiter. Ich bin hier, um deinen Weg zu begleiten. Wie kann ich dir heute helfen?",
                "rana_saludo_anon": "Hallo! Willkommen bei Territorios Vivos. Ich bin Der Frosch, dein spiritueller und logistischer Begleiter. Ich bin hier, um deinen Weg zu begleiten. Wie kann ich dir heute helfen?",
                "menu_territorio": "Ich möchte ein Territorium kennenlernen",
                "menu_llevar": "Was soll ich mitbringen?",
                "menu_salud": "Zweifel an Gesundheit/Impfstoffen",
                "menu_asesor": "Sprich mit einem Berater (WhatsApp)",
                "respuesta_mistica": "Jedes Territorium hat seine eigene Frequenz. Um deine personalisierte Route zu entwerfen und die Verfügbarkeit dieses heiligen Raums zu überprüfen, lade ich dich ein, mit uns über WhatsApp zu sprechen. Lass es uns verwirklichen!",
                "btn_whatsapp": "Zu WhatsApp gehen",
                "funnel": {
                    "que_llevar_pregunta": "Welches Territorium möchtest du besuchen?",
                    "que_llevar_consejo": "Für dieses Territorium empfehlen wir festes Schuhwerk (Stiefel oder Wanderschuhe), leichte und atmungsaktive Kleidung sowie biologisches Abwehrmittel. Bevorzuge immer natürliche und biologisch abbaubare Produkte, um die Erde zu ehren.",
                    "salud_texto": "Dein Wohlbefinden hat für uns Priorität. Wir empfehlen dir, deine gewohnten medizinischen Behandlungen mitzubringen und uns über chronische Krankheiten zu informieren. Wir haben ein Erste-Hilfe-Set auf der Route dabei. Für Dschungelgebiete (Amazonas, Putumayo, Guainía) wird eine Gelbfieberimpfung empfohlen, obwohl sie nicht obligatorisch ist. Besprich die letzten Details mit uns.",
                    "btn_disenar_viaje": "Meine Reise auf WhatsApp gestalten",
                    "btn_consultar_asesor": "Einen Berater auf WhatsApp konsultieren",
                    "btn_volver": "Zurück zum Hauptmenü",
                    "terr_amazonas": "Amazonas",
                    "terr_macizo": "Kolumbianisches Massiv",
                    "terr_guainia": "Guainía",
                    "terr_sierranevada": "Sierra Nevada",
                    "terr_pacifico": "Pazifik",
                    "terr_putumayo": "Putumayo & Caquetá",
                    "terr_bogota": "Bogotá & Sabana",
                    "terr_medellin": "Medellín"
                },
                "welcome": "Hallo {{nombre}}, willkommen beim Herzschlag der Erde. Welches Gebiet oder welche Frage möchtest du teilen?",
                "welcome_anon": "Hallo, willkommen beim Herzschlag der Erde. Welches Gebiet oder welche Frage möchtest du teilen?",
                "macizo": "Das Massiv ist der Schoß der Erde. Hier wird das Wasser geboren, das Kolumbien bewässert. Die Vulkane Puracé und Sotará bewachen deine Transformation. Es ist ein Ort, um neue Projekte zu gebären und geistigen Lärm zum Schweigen zu bringen.",
                "amazonas": "Der Amazonas ist die Lebendige Wurzel. In der Maloka stellen die Großväter dein Gleichgewicht mit Waldmedikamenten wieder her. Denke daran: Der Dschungel wird nicht besucht, er wird mit Respekt bewohnt. (Gelbfieberimpfung obligatorisch).",
                "guainia": "Guainía ist der Herd der Welt. Die Mavecure-Hügel sind die ältesten Felsen, die deine Augen sehen werden. Es ist das Ziel, verlorene Fragmente deiner persönlichen Geschichte wieder zu integrieren.",
                "sierra": "Die Sierra Nevada ist das Herz der Welt. Die älteren Brüder (Kogui/Arhuaco) bringen uns bei, wie wir unsere Gedanken ordnen können. Ideal, wenn du Richtung und Klarheit in deinem Lebenszweck suchst.",
                "pacifico": "Im Pazifik umarmen sich Meer und Dschungel. Die Buckelwale kommen zum Gebären, so wie du kommen wirst, um deine Ahnenlinie zu heilen und loszulassen, was dir nicht mehr gehört.",
                "putumayo": "Putumayo ist Reine Alchemie. Das Gebiet des Jaguars erfordert absolute Präsenz. Es ist für diejenigen, die bereit sind für eine tiefe Transformation ohne Masken.",
                "guatavita": "Guatavita ist der Schoß von Bachué. Hier ist das 'Eldorado' kein Metall, es ist das Licht deiner Seele. Perfekt für das Abschließen von Zyklen und bewusste Neuanfänge.",
                "comida": "Du wirst die Medizin der Erde essen: Dschungelfrüchte, uralte Zubereitungen und biologische Lebensmittel aus den Gemeinden. Wir nähren den Körper, damit die Seele reisen kann.",
                "precio": "Unsere Reisen sind Investitionen in dein Sein. Die Preise variieren je nach Gebiet und Tiefe des Prozesses (ca. 3,5 bis 5,5 Millionen COP). Jeder Peso unterstützt die Autonomie der Schutzgemeinschaften.",
                "yoga": "Die gesamte Route ist eine Meditation in Bewegung. Wir praktizieren bewusste Verbindung und Stille. Wenn du einen bestimmten Yoga-Retreat suchst, ist das Massiv dein heiliger Ort.",
                "seguridad": "Die Erde kümmert sich um dich. Wir reisen unter dem Schutz indigener Verbände und verfügen über eine umfassende Krankenversicherung. Du bist in den Händen der Wächter des Territoriums.",
                "vacuna": "Der Frosch erinnert dich: Für den Amazonas und Putumayo, die Gelbfieberimpfung ist 10 Tage vorher obligatorisch. Ecodestinos bietet eine umfassende Krankenversicherung für die gesamte Reise!",
                "seguro": "Fürchte dich nicht! Jeder Schritt im Gebiet ist abgedeckt. Unsere Agentur bietet eine umfassende Krankenversicherung und persönliche Betreuung durch die Gemeinde.",
                "ropa": "Bringe schnell trocknende Kleidung, lange Ärmel gegen Mücken, bequeme Stiefel, Abwehrmittel und deine persönlichen Medikamente mit. Der Dschungel erwartet dich vorbereitet!",
                "wifi": "Der Frosch zieht Wasser dem WLAN vor. Eine Verbindung gibt es nur in den Hotels; im tiefen Gebiet ist die Verbindung direkt zur Erde und zu deinem Herzen. 🌿",
                "quien": "Ich bin der Puls von Ecodestinos. Mein Gesang führt dich in das Gebiet, das deine Energie heute braucht. Ich bin die Brücke zwischen deinem Herzschlag und dem der Erde.",
                "default": "Meine Froschohren sind aufmerksam, aber ich kenne dieses Wort noch nicht. Frage mich nach Gebieten, Impfungen, was du einpacken sollst oder nach der spirituellen Bedeutung deiner Reise.",
                "cierre": "\n\n✨ Ich höre deine Schwingung, {{nombre}}... Wenn mein Gesang nicht reicht, drücke unten, um mit den menschlichen Wächtern zu sprechen.",
                "cierre_anon": "\n\n✨ Ich höre deine Schwingung... Wenn mein Gesang nicht reicht, drücke unten, um mit den menschlichen Wächtern zu sprechen.",
                "placeholder": "Sprich mit dem Frosch...",
                "whatsapp": "📲 Zweifel an der Reise? Direktes WhatsApp"
            },
            "validation": {
                "error_nombre": "Bitte gib deinen Namen ein.",
                "error_correo": "Bitte gib deine E-Mail-Adresse ein."
            },
            "landing_intro": {
                "titulo": "KOLUMBIEN ALS WELLNESS-KARTE",
                "subtitulo": "Lebendige Gebiete zum Reisen, je nachdem, welchen Moment Sie gerade erleben",
                "descripcion": "Bei Ecodestinos verstehen wir, dass sich nicht alle Reisen gleich anfühlen.\nJedes Gebiet in Kolumbien hat eine andere Energie, einen anderen Rhythmus und eine andere Art, uns zu begleiten.\n\nEinige Orte helfen beim Ausruhen. Andere inspirieren zu neuen Ideen. Wieder andere laden uns ein, uns wieder mit der Natur, mit Menschen oder mit uns selbst zu verbinden.\n\nDiese Erlebniskarte wurde erstellt, um jedem Reisenden zu helfen, herauszufinden, welches Gebiet ihm heute guttun kann."
            },
            "destinos": {
                "Amazonas": {
                    "title": "URSPRUNG UND VERWURZELUNG",
                    "archetype": "Abstammung",
                    "desc": "Lebendiger Dschungel, um abzuschalten und zum Wesentlichen zurückzukehren.\n\nIdeal, wenn Sie das Tempo drosseln, Ihren Geist beruhigen und sich präsenter, stabiler und mit der Natur verbunden fühlen müssen.\n\nDer kolumbianische Amazonas bietet immersive Erlebnisse im Dschungel, an Flüssen und in lokalen Kulturen, die helfen, Gleichgewicht und Einfachheit wiederherzustellen.\n\nPerfekt für:\n• Digitale Entgiftung\n• Geistige Erholung\n• Tiefe Natur\n• Bewusstes Reisen\n\n(Wurzelkraft)"
                },
                "Macizo": {
                    "title": "INNERE ARCHÄOLOGIE",
                    "archetype": "Ernährung",
                    "desc": "Natur, Ahnenwissen und Wellness, um sich tiefgreifend zu erneuern.\n\nIdeal, wenn Sie ein Kapitel abschließen oder ein neues beginnen und nach Ruhe, Gelassenheit und einem Gefühl der inneren Erneuerung suchen.\n\nDas kolumbianische Massiv und San Agustín beherbergen eines der wichtigsten archäologischen Erben Südamerikas. Seine Landschaften, angestammten Skulpturen und zeremoniellen Stätten laden zum Nachdenken über Ursprung, Erinnerung und persönliche Transformation ein.\n\nAusgewählte Erlebnisse:\n• Archäologische und kulturelle Erkundung\n• Keramik und Okarina-Herstellung\n• Traditionelle Musik und Folklore\n• Ökologischer Landbau\n• Sanfte Wanderungen und Wellness\n• Räume für Pausen und Kontemplation\n\nPerfekt für:\n• Persönliche Erneuerung\n• Kulturelles und bewusstes Reisen\n• Kreativität und Erholung\n• Verbindung mit der lebendigen Geschichte des Gebiets\n\n(Transformationsgebiet)"
                },
                "Guainia": {
                    "title": "GEWÄSSER DER EINHEIT",
                    "archetype": "Schlichtung",
                    "desc": "Ein Gebiet der Ruhe, Verbindung und des Gleichgewichts.\n\nIdeal, wenn Sie vom Lärm abschalten, sich in Harmonie fühlen und sich in einer einzigartigen natürlichen Umgebung wieder mit sich selbst und anderen verbinden möchten.\n\nGuainía lädt Sie ein, ruhig zu reisen, zwischen Flüssen zu navigieren und zutiefst authentische Kulturen und Landschaften zu entdecken. Die lebendigen Traditionen von Gemeinschaften wie den Curripacos und Puinaves bereichern das Erlebnis durch Geschichten, lokales Wissen und traditionelle Arten, sich mit dem Wasser und dem Dschungel zu verbinden.\n\nAusgewählte Erlebnisse:\n• Navigation zwischen Flüssen und heiligen Hügeln\n• Kulturelle Begegnungen mit lokalen Gemeinschaften\n• Traditionelle Gastronomie\n• Natur und Kontemplation\n• Boutique-Wellness und Verbindungserlebnisse\n\nPerfekt für:\n• Slow Travel\n• Emotionales Wohlbefinden\n• Verbindung mit der Natur\n• Lebendige Kulturen und authentische Erlebnisse\n\n(Begegnungsgebiet)"
                },
                "SierraNevada": {
                    "title": "ALCHEMIE DES HERZENS",
                    "archetype": "Erwachen",
                    "desc": "Berge und Meer, um dich zu inspirieren, danke zu sagen und Richtung zu finden.\n\nIdeal, wenn Sie Klarheit für Ihre nächsten Schritte suchen, sich wieder mit Ihrer Motivation verbinden und sinnvolle Erlebnisse leben möchten.\n\nDie Sierra Nevada de Santa Marta wird von ihren indigenen Völkern als das „Herz der Welt“ angesehen. Die Weisheit ihrer angestammten Wächter, ihre Harmonisierungspraktiken und der Respekt vor der Natur inspirieren Erlebnisse der Dankbarkeit, des Gleichgewichts und einer tiefen Verbindung mit dem Leben.\n\nAusgewählte Erlebnisse:\n• Kulturelle Begegnungen und Ahnenwissen\n• Wanderungen zwischen Berg, Fluss und Meer\n• Räume für Kontemplation und Wellness\n• Traditionelle Rituale der Dankbarkeit und Harmonisierung\n• Lebendige Natur und transformative Erlebnisse\n\nPerfekt für:\n• Inspiration und Sinn\n• Ganzheitliches Wohlbefinden\n• Verbindung mit Natur und Kultur\n• Reisen mit Sinn und menschlicher Tiefe\n\n(Dankbarkeits- und Manifestationsgebiet)"
                },
                "Pacífico": {
                    "title": "ERINNERUNG DES OZEANS",
                    "archetype": "Heilung",
                    "desc": "Dschungel und Meer zum Ausruhen, Fühlen und Verbinden.\n\nIdeal, wenn Sie Spannungen abbauen, auf sich selbst aufpassen und eine warme, authentische und zutiefst menschliche Erfahrung machen möchten.\n\nDer kolumbianische Pazifik lädt Sie ein, sich mit dem natürlichen Rhythmus des Ozeans, der traditionellen Musik und dem kulturellen Reichtum seiner Gemeinden zu verbinden.\n\nAusgewählte Erlebnisse:\n• Walbeobachtung\n• Traditionelle Musik und Tanz\n• Pazifische Gastronomie\n• Wanderungen zwischen Dschungel und Strand\n• Wellness am Meer\n\n(Bindungs- und Erinnerungsgebiet)"
                },
                "Putumayo": {
                    "title": "ZUFLUCHT DER AHNEN",
                    "archetype": "Alchemie",
                    "desc": "Tiefe Natur zum Ausruhen und Integrieren.\n\nIdeal, wenn Sie geistige oder körperliche Erschöpfung spüren und eine ruhige, erholsame Erfahrung suchen, die mit traditionellem Wissen verbunden ist.\n\nDieses Gebiet zwischen den Anden und dem Amazonas bietet Räume der Stille, Natur und Wellness, die helfen, Gleichgewicht und Präsenz wiederherzustellen.\n\nPerfekt für:\n• Tiefe Erholung\n• Natürliches Wohlbefinden\n• Persönliche Integration\n• Kulturelle Verbindung\n\n(Integrationsgebiet)"
                },
                "Bogota": {
                    "title": "WEISHEIT",
                    "archetype": "Weisheit",
                    "desc": "Räume zum Innehalten, Ideen ordnen und Klarheit gewinnen.\n\nIdeal, wenn Sie eine neue Perspektive gewinnen, den Moment, den Sie gerade erleben, besser verstehen und mit einem ruhigeren und fokussierteren Geist zurückkehren möchten.\n\nDie Sabana von Bogotá verbindet Kultur, Natur und Hochgebirgslandschaften, die dazu einladen, langsamer zu atmen und sich wieder mit der Umgebung zu verbinden. Ihre heiligen Lagunen, Páramos und traditionellen musikalischen Praktiken schaffen Erlebnisse der Kontemplation, der Erinnerung und des Wohlbefindens.\n\nAusgewählte Erlebnisse:\n• Sanfte Wanderungen in Páramos und Naturschutzgebieten\n• Besuche heiliger Lagunen und andiner Landschaften\n• Musikalische und kulturelle Erlebnisse\n• Lokale Gastronomie und urbane Wellness\n• Räume für Gespräche und bewusste Pausen\n\nPerfekt für Reisende, die sich interessieren für:\n• Urbane Wellness\n• Kultur und Geschichte\n• Natur in der Nähe\n• Inspiration und geistige Klarheit\n\n(Bewusstseinsgebiet)"
                },
                "Medellin": {
                    "title": "KREATIVE EXPANSION",
                    "archetype": "Aktion",
                    "desc": "Energie, Innovation und neue Erfahrungen.\n\nIdeal, wenn Sie nach Inspiration, Bewegung, Verbindung mit anderen und einem dynamischen Umfeld suchen, das neue Ideen und Projekte vorantreibt.\n\nMedellín verbindet Kreativität, Kultur, urbane Transformation und nahegelegene Natur zu einem lebendigen und zeitgenössischen Erlebnis.\n\nPerfekt für:\n• Kreative Reisende\n• Innovation\n• Kunst und Design\n• Urbane Erlebnisse mit Sinn\n\n(Aktionskraft)"
                }
            },
            "landing_outro": {
                "vision": "🌎 UNSERE VISION\n\nWir glauben, dass Reisen auch eine Möglichkeit sein kann:\n• Besser auszuruhen\n• Sich inspirieren zu lassen\n• Sich wieder zu verbinden\n• Zu erschaffen\n• Zu teilen\n• Sich präsenter zu fühlen\n\nMehr als nur Reiseziele bietet Kolumbien lebendige Gebiete, die verschiedene Momente im Leben begleiten.\n\n✨ Willkommen beim Reisen nach dem, was Sie heute fühlen müssen."
            },
            "introduccion": {
                "titulo": "Lebendige Territorien",
                "texto": "In Ecodestinos ist ein Reiseziel nicht nur ein Ort. Es ist ein lebendiges Territorium, in dem Natur, Kultur und die Erinnerung der Ahnen eine einzigartige Energie bewahren, die deinen Lebensmoment begleitet."
            },
            "frase_final": "Du wählst kein Reiseziel. Du wählst das Territorium, das deinen Moment begleitet."
        }
    },
    "fr": {
        "translation": {
            "logo_circular": "/assets/logo-ecodestinos-circular-fr.png",
            "landing": {
                "title": "Territoires Vivants",
                "tagline": "En seulement 90 secondes, découvrez quel territoire résonne le mieux avec vous et recevez des recommandations",
                "start": "Commencer le voyage",
                "skip": "Explorer la carte"
            },
            "procesando": {
                "rana": "La Grenouille écoute votre rythme cardiaque..."
            },
            "resultados": {
                "title": "VOTRE VOYAGE RÉSONNE AVEC :",
                "name_label": "votre nom:",
                "email_label": "votre e-mail:",
                "button": "Recevoir mes destinations"
            },
            "nav": {
                "home": "Accueil",
                "maloka": "Maloka",
                "route": "Mon Itinéraire",
                "community": "Communauté"
            },
            "territory": {
                "back": "← RETOUR À LA CARTE",
                "wisdom": "Sagesse du Territoire",
                "video": "Vidéo Immersive",
                "gallery": "Galerie de Souvenirs"
            },
            "app": {
                "save_success": "Journal de bord enregistré avec succès dans le cloud!",
                "save_error": "Il y a eu une erreur lors de l'enregistrement de votre journal."
            },
            "maloka": {
                "title": "Maloka Ancestrale",
                "workshop1_title": "🎬 Ateliers: Le Ventre du Massif",
                "workshop1_desc": "Rencontre avec les Enfants de l'Eau (Misak) et la médecine de l'argile.",
                "workshop1_btn": "▶ Jouer l'atelier",
                "audio1_title": "🎧 Audios: Le Chant des Baleines",
                "audio1_desc": "Méditation guidée pour la guérison de la lignée familiale dans le Pacifique.",
                "podcast1_title": "🎙️ Podcast: La Voix des Grands-Parents",
                "podcast1_desc": "Sagesse Kogui et Arhuaco sur le but de la vie."
            },
            "miruta": {
                "title": "Mon Journal de Voyage",
                "btn_location": "📍 Emplacement dans le Territoire",
                "btn_offline": "🗺️ Cartes Hors Ligne (Maps.me)",
                "record_title": "🎙️ Enregistrez vos sentiments aujourd'hui (ou écrivez-les)",
                "record_desc": "Vos enregistrements seront sauvegardés pour votre intégration post-voyage.",
                "placeholder": "Écrivez ou enregistrez vos processus émotionnels ici...",
                "btn_start_record": "🎙️ Commencer l'enregistrement",
                "btn_stop_record": "⏹️ Arrêter l'enregistrement",
                "btn_audio": "🔴 Démarrer l'Audio (Bientôt)",
                "btn_save": "☁️ Enregistrer le Texte",
                "saving": "Enregistrement dans le Cloud...",
                "save_success": "Journal enregistré dans le cloud ☁️",
                "save_error": "Erreur lors de l'enregistrement. Réessayez.",
                "record_not_supported": "Transcription vocale non prise en charge dans votre navigateur.",
                "btn_start_tracking": "📍 Démarrer le suivi GPS",
                "btn_tracking": "📍 Suivi... ({{count}} pts)"
            },
            "comunidades": {
                "title": "Communautés Vivantes",
                "partners_title": "👥 Partenaires Stratégiques",
                "partners_desc": "Notre communauté participe aux décisions et à la formation émotionnelle.",
                "transparency_title": "Transparence:",
                "transparency_desc": "85% de la valeur de votre voyage vont directement à l'autonomie communautaire.",
                "gallery": "Galerie de Témoignages"
            },
            "quiz": {
                "progress": "STATION {{current}} SUR 7",
                "q0": { "question": "Comment vous êtes-vous senti(e) dernièrement ?", "opt0": "Fatigue ou épuisement mental", "opt1": "En changement ou transition", "opt2": "Joyeux(se) et optimiste", "opt3": "En équilibre et curieux(se)" },
                "q1": { "question": "De quoi avez-vous le plus besoin de la part de la nature ?", "opt0": "Stabilité et ancrage", "opt1": "Harmonie et douceur", "opt2": "Récupération et intégration", "opt3": "Inspiration et air frais" },
                "q2": { "question": "Quel paysage vous accompagne le mieux aujourd'hui ?", "opt0": "La terre humide", "opt1": "Respirer l'horizon dans les montagnes", "opt2": "Un coucher de soleil au bord de la mer", "opt3": "Contempler le reflet dans une eau sereine" },
                "q3": { "question": "Quel rythme de voyage préférez-vous ?", "opt0": "Calme, une activité par jour", "opt1": "Équilibré, deux activités par jour", "opt2": "Actif, plusieurs expériences par jour", "opt3": "Flexible, selon la journée" },
                "q4": { "question": "Que souhaitez-vous activer en vous avec ce voyage ?", "opt0": "Ancrage et stabilité (Racine)", "opt1": "Créativité et nouveaux départs (Création)", "opt2": "Amour propre et liens (Cœur)", "opt3": "Manifestation et vision (Objectif)" },
                "q5": { "question": "Quel type de bien-être souhaitez-vous vivre ?", "opt0": "Marches conscientes dans la nature", "opt1": "Massages, spa et rituels de bien-être", "opt2": "Connexion avec les communautés et pratiques ancestrales", "opt3": "Créer avec ses mains (tissage, céramique, cuisine)" },
                "q6": { "question": "Quel format de voyage préférez-vous ?", "opt0": "Indépendant(e), seul(e) ou à mon rythme", "opt1": "En couple", "opt2": "En famille", "opt3": "En groupe pour une retraite ou expérience guidée" }
            },
            "agente": {
                "rana_nombre": "La Grenouille",
                "rana_saludo": "Bonjour {{nombre}} ! Bienvenue chez Territorios Vivos. Je suis La Grenouille, votre guide spirituel et logistique. Je suis ici pour accompagner votre chemin. Comment puis-je vous aider aujourd'hui ?",
                "rana_saludo_anon": "Bonjour ! Bienvenue chez Territorios Vivos. Je suis La Grenouille, votre guide spirituel et logistique. Je suis ici pour accompagner votre chemin. Comment puis-je vous aider aujourd'hui ?",
                "menu_territorio": "Je veux connaître un territoire",
                "menu_llevar": "Que dois-je apporter ?",
                "menu_salud": "Doutes sur la santé/vaccins",
                "menu_asesor": "Parler avec un conseiller (WhatsApp)",
                "respuesta_mistica": "Chaque territoire a sa propre fréquence. Pour concevoir votre itinéraire personnalisé et vérifier la disponibilité de cet espace sacré, je vous invite à nous parler sur WhatsApp. Faisons en sorte que cela se produise !",
                "btn_whatsapp": "Aller sur WhatsApp",
                "funnel": {
                    "que_llevar_pregunta": "Quel territoire souhaitez-vous visiter ?",
                    "que_llevar_consejo": "Pour ce territoire, nous recommandons des chaussures solides (bottes ou chaussures de randonnée), des vêtements légers et respirants, et un répulsif biologique. Privilégiez toujours les produits naturels et biodégradables pour honorer la terre.",
                    "salud_texto": "Votre bien-être est notre priorité. Nous vous recommandons d'apporter vos traitements médicaux habituels et de nous informer de toute pathologie chronique. Nous avons une trousse de premiers secours en route. Pour les zones de jungle (Amazonas, Putumayo, Guainía), le vaccin contre la fièvre jaune est recommandé, bien que non obligatoire. Consultez-nous pour les derniers détails.",
                    "btn_disenar_viaje": "Concevoir mon voyage sur WhatsApp",
                    "btn_consultar_asesor": "Consulter un conseiller sur WhatsApp",
                    "btn_volver": "Retour au menu principal",
                    "terr_amazonas": "Amazonas",
                    "terr_macizo": "Massif Colombien",
                    "terr_guainia": "Guainía",
                    "terr_sierranevada": "Sierra Nevada",
                    "terr_pacifico": "Pacifique",
                    "terr_putumayo": "Putumayo & Caquetá",
                    "terr_bogota": "Bogotá & Sabana",
                    "terr_medellin": "Medellín"
                },
                "welcome": "Bonjour {{nombre}}, bienvenue au battement de cœur de la terre. Quel territoire ou question venez-vous partager ?",
                "welcome_anon": "Bonjour, bienvenue au battement de cœur de la terre. Quel territoire ou question venez-vous partager ?",
                "macizo": "Le Massif est l'Utérus de la Terre. C'est ici que naît l'eau qui irrigue la Colombie. Les volcans Puracé et Sotará gardent votre transformation. C'est un endroit pour faire naître de nouveaux projets et faire taire le bruit mental.",
                "amazonas": "L'Amazonie est la Racine Vivante. Dans la Maloka, les grands-pères rétablissent votre équilibre avec des médecines de la forêt. N'oubliez pas : la jungle ne se visite pas, elle s'habite avec respect. (Vaccin contre la fièvre jaune obligatoire).",
                "guainia": "Guainía est le Foyer du Monde. Les collines de Mavecure sont les roches les plus anciennes que vos yeux verront. C'est la destination pour réintégrer les fragments perdus de votre histoire personnelle.",
                "sierra": "La Sierra Nevada est le Cœur du Monde. Les grands frères (Kogui/Arhuaco) nous apprennent à ordonner nos pensées. Idéal si vous cherchez direction et clarté dans votre but de vie.",
                "pacifico": "Dans le Pacifique, la mer et la jungle s'embrassent. Les baleines à bosse viennent donner naissance, tout comme vous viendrez guérir votre lignée familiale et libérer ce qui ne vous appartient plus.",
                "putumayo": "Putumayo est Alchimie Pure. Le territoire du Jaguar exige une présence absolue. C'est pour ceux qui sont prêts pour une transformation profonde sans masques.",
                "guatavita": "Guatavita est l'utérus de Bachué. Ici, 'l'Eldorado' n'est pas du métal, c'est la lumière de votre âme. Parfait pour clôturer des cycles et pour de nouveaux départs conscients.",
                "comida": "Vous mangerez la médecine de la terre : fruits de la jungle, préparations ancestrales et aliments biologiques des communautés. Nous nourrissons le corps pour que l'âme puisse voyager.",
                "precio": "Nos voyages sont des investissements dans votre être. Les prix varient selon le territoire et la profondeur du processus (environ 3,5 à 5,5 millions de COP). Chaque peso soutient l'autonomie des communautés gardiennes.",
                "yoga": "Toute la route est une méditation en mouvement. Nous pratiquons la connexion consciente et le silence. Si vous cherchez une retraite de yoga spécifique, le Massif est votre lieu sacré.",
                "seguridad": "La terre prend soin de vous. Nous voyageons sous la protection des associations indigènes et avons une assurance médicale complète. Vous êtes entre les mains des gardiens du territoire.",
                "vacuna": "La grenouille vous rappelle : Pour l'Amazonie et Putumayo, le vaccin contre la fièvre jaune est obligatoire 10 jours avant. Ecodestinos fournit une assurance médicale complète pour tout le voyage !",
                "seguro": "N'ayez crainte ! Chaque pas sur le territoire est couvert. Notre agence fournit une assurance médicale complète et une attention personnalisée de la communauté.",
                "ropa": "Apportez des vêtements à séchage rapide, des manches longues pour les moustiques, des bottes confortables, du répulsif et vos médicaments personnels. La jungle vous attend préparé !",
                "wifi": "La grenouille préfère l'eau au Wi-Fi. Il n'y aura de connexion que dans les hôtels ; dans le territoire profond, la connexion est directe avec la terre et votre cœur. 🌿",
                "quien": "Je suis le pouls d'Ecodestinos. Mon chant vous guide vers le territoire dont votre énergie a besoin aujourd'hui. Je suis le pont entre votre battement de cœur et celui de la terre.",
                "default": "Mes oreilles de grenouille sont attentives, mais je ne reconnais pas encore ce mot. Posez-moi des questions sur les territoires, les vaccins, ce qu'il faut emporter ou la signification spirituelle de votre voyage.",
                "cierre": "\n\n✨ J'entends votre vibration, {{nombre}}... Si mon chant ne suffit pas, appuyez ci-dessous pour parler avec les gardiens humains.",
                "cierre_anon": "\n\n✨ J'entends votre vibration... Si mon chant ne suffit pas, appuyez ci-dessous pour parler avec les gardiens humains.",
                "placeholder": "Parlez avec la grenouille...",
                "whatsapp": "📲 Appeler un gardien sur WhatsApp"
            },
            "validation": {
                "error_nombre": "Veuillez entrer votre nom.",
                "error_correo": "Veuillez entrer votre adresse e-mail."
            },
            "landing_intro": {
                "subtitulo": "Des territoires vivants pour voyager selon le moment que vous vivez",
                "descripcion": "Chez Ecodestinos, nous comprenons que tous les voyages ne se ressentent pas de la même manière.\nChaque territoire de Colombie a une énergie, un rythme et une façon différente de nous accompagner.\n\nCertains endroits aident à se reposer. D'autres inspirent de nouvelles idées. D'autres encore invitent à se reconnecter avec la nature, avec les gens ou avec soi-même.\n\nCette carte d'expériences a été créée pour aider chaque voyageur à découvrir quel territoire peut lui faire du bien aujourd'hui."
            },
            "destinos": {
                "Amazonas": {
                    "title": "ORIGINE ET ANCRAGE",
                    "archetype": "Ascendance",
                    "desc": "Jungle vivante pour se déconnecter et revenir à l'essentiel.\n\nIdéal si vous avez besoin de ralentir, de faire taire votre esprit et de vous sentir plus présent, stable et connecté à la nature.\n\nL'Amazonie colombienne offre des expériences d'immersion dans la jungle, les rivières et les cultures locales qui aident à retrouver équilibre et simplicité.\n\nParfait pour :\n• Déconnexion numérique\n• Repos mental\n• Nature profonde\n• Voyages conscients\n\n(Force Racine)"
                },
                "Macizo": {
                    "title": "ARCHÉOLOGIE INTÉRIEURE",
                    "archetype": "Nutrition",
                    "desc": "Nature, mémoire ancestrale et bien-être pour se renouveler profondément.\n\nIdéal si vous fermez un chapitre ou en commencez un nouveau, et que vous recherchez du repos, du calme et un sentiment de renouveau intérieur.\n\nLe Massif Colombien et San Agustín abritent l'un des héritages archéologiques les plus importants d'Amérique du Sud. Ses paysages, ses sculptures ancestrales et ses sites cérémoniels invitent à la réflexion sur l'origine, la mémoire et la transformation personnelle.\n\nExpériences phares :\n• Exploration archéologique et culturelle\n• Céramique et création d'ocarinas\n• Musique et folklore traditionnel\n• Agriculture biologique\n• Randonnées douces et bien-être\n• Espaces de pause et de contemplation\n\nParfait pour :\n• Renouveau personnel\n• Voyages culturels et conscients\n• Créativité et repos\n• Connexion avec l'histoire vivante du territoire\n\n(Territoire de Transformation)"
                },
                "Guainia": {
                    "title": "EAUX D'UNITÉ",
                    "archetype": "Conciliation",
                    "desc": "Un territoire de calme, de connexion et d'équilibre.\n\nIdéal si vous souhaitez vous déconnecter du bruit, vous sentir en harmonie et vous reconnecter à vous-même et aux autres dans un environnement naturel unique.\n\nLe Guainía vous invite à voyager sereinement, à naviguer entre les rivières et à découvrir des cultures et des paysages profondément authentiques. Les traditions vivantes de communautés comme les Curripacos et les Puinaves enrichissent l'expérience à travers des récits, des savoirs locaux et des façons ancestrales de se lier à l'eau et à la jungle.\n\nExpériences phares :\n• Navigation entre rivières et collines sacrées\n• Rencontres culturelles avec les communautés locales\n• Gastronomie traditionnelle\n• Nature et contemplation\n• Expériences boutique de bien-être et de connexion\n\nParfait pour :\n• Slow travel\n• Bien-être émotionnel\n• Connexion avec la nature\n• Cultures vivantes et expériences authentiques\n\n(Territoire de Rencontre)"
                },
                "SierraNevada": {
                    "title": "ALCHIMIE DU CŒUR",
                    "archetype": "Éveil",
                    "desc": "Montagnes et mer pour s'inspirer, remercier et trouver sa direction.\n\nIdéal si vous cherchez de la clarté pour vos prochaines étapes, à vous reconnecter à votre motivation et à vivre des expériences pleines de sens.\n\nLa Sierra Nevada de Santa Marta est considérée par ses peuples indigènes comme le « Cœur du Monde ». La sagesse de ses gardiens ancestraux, ses pratiques d'harmonisation et son respect de la nature inspirent des expériences de gratitude, d'équilibre et de connexion profonde avec la vie.\n\nExpériences phares :\n• Rencontres culturelles et savoirs ancestraux\n• Randonnées entre montagne, rivière et mer\n• Espaces de contemplation et de bien-être\n• Rituels traditionnels de gratitude et d'harmonisation\n• Nature vivante et expériences transformatrices\n\nParfait pour :\n• Inspiration et but\n• Bien-être holistique\n• Connexion avec la nature et la culture\n• Voyages avec du sens et une profondeur humaine\n\n(Territoire de Gratitude et de Manifestation)"
                },
                "Pacífico": {
                    "title": "MÉMOIRE DE L'OCÉAN",
                    "archetype": "Guérison",
                    "desc": "Jungle et mer pour se reposer, ressentir et se reconnecter.\n\nIdéal si vous avez besoin de relâcher la tension, de prendre soin de vous et de vivre une expérience chaleureuse, authentique et profondément humaine.\n\nLe Pacifique colombien vous invite à vous connecter au rythme naturel de l'océan, à la musique traditionnelle et à la richesse culturelle de ses communautés.\n\nExpériences phares :\n• Observation des baleines\n• Musique et danse traditionnelles\n• Gastronomie du Pacifique\n• Randonnées entre jungle et plage\n• Bien-être en bord de mer\n\n(Territoire de Lien et de Mémoire)"
                },
                "Putumayo": {
                    "title": "REFUGE ANCESTRAL",
                    "archetype": "Alchimie",
                    "desc": "Nature profonde pour se reposer et intégrer.\n\nIdéal si vous ressentez un épuisement mental ou physique et que vous recherchez une expérience calme, réparatrice et connectée aux savoirs traditionnels.\n\nCe territoire, entre les Andes et l'Amazonie, offre des espaces de silence, nature et de bien-être qui aident à retrouver équilibre et présence.\n\nParfait pour :\n• Repos profond\n• Bien-être naturel\n• Intégration personnelle\n• Connexion culturelle\n\n(Territoire d'Intégration)"
                },
                "Bogota": {
                    "title": "SAGESSE",
                    "archetype": "Sagesse",
                    "desc": "Des espaces pour faire une pause, ordonner ses idées et gagner en clarté.\n\nIdéal si vous cherchez à prendre du recul, à mieux comprendre le moment que vous vivez et à revenir avec un esprit plus calme et concentré.\n\nLa savane de Bogotá combine culture, nature et paysages de haute montagne qui invitent à respirer plus lentement et à se reconnecter à l'environnement. Ses lagunes sacrées, ses páramos et ses pratiques musicales traditionnelles créent des expériences de contemplation, de mémoire et de bien-être.\n\nExpériences phares :\n• Randonnées douces dans les páramos et les réserves naturelles\n• Visites de lagunes sacrées et de paysages andins\n• Expériences musicales et culturelles\n• Gastronomie locale et bien-être urbain\n• Espaces de conversation et de pause consciente\n\nParfait pour les voyageurs intéressés par :\n• Bien-être urbain\n• Culture et histoire\n• Nature de proximité\n• Inspiration et clarté mentale\n\n(Territoire de Conscience)"
                },
                "Medellin": {
                    "title": "EXPANSION CRÉATIVE",
                    "archetype": "Action",
                    "desc": "Énergie, innovation et nouvelles expériences.\n\nIdéal si vous recherchez de l'inspiration, du mouvement, une connexion avec les autres et un environnement dynamique qui stimule de nouvelles idées et projets.\n\nMedellín allie créativité, culture, transformation urbaine et nature de proximité dans une expérience vibrante et contemporaine.\n\nParfait pour :\n• Voyageurs créatifs\n• Innovation\n• Art et design\n• Expériences urbaines avec du sens\n\n(Force d'Action)"
                }
            },
            "landing_outro": {
                "vision": "🌎 NOTRE VISION\n\nNous croyons que voyager peut aussi être une façon de :\n• Mieux se reposer\n• S'inspirer\n• Se reconnecter\n• Créer\n• Partager\n• Se sentir plus présent\n\nPlus que des destinations, la Colombie offre des territoires vivants qui accompagnent différents moments de la vie.\n\n✨ Bienvenue pour voyager selon ce que vous avez besoin de ressentir aujourd'hui."
            },
            "introduccion": {
                "titulo": "Territoires Vivants",
                "texto": "Dans Ecodestinos, une destination n'est pas seulement un lieu. C'est un territoire vivant où la nature, la culture et la mémoire ancestrale soutiennent une énergie unique qui accompagne votre moment de vie."
            },
            "frase_final": "Vous ne choisissez pas une destination. Vous choisissez le territoire qui accompagne votre moment."
        }
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "es", // idioma por defecto
        fallbackLng: "es",
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
