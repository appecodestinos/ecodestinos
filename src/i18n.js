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
            "destinos": {
                "Amazonas": {
                    "title": "Raíz Viva",
                    "archetype": "Ancestralidad",
                    "desc": "Territorio Raíz. Ideal cuando necesitas estabilidad, arraigo y silencio profundo. Nos recuerda que sin raíz no hay expansión."
                },
                "Macizo": {
                    "title": "Útero de la Tierra",
                    "archetype": "Nutrición",
                    "desc": "Territorio Útero. Ideal cuando estás en transición o algo nuevo quiere nacer. Toda transformación necesita contención."
                },
                "Guainia": {
                    "title": "Aguas de Unidad",
                    "archetype": "Conciliación",
                    "desc": "Territorio Trinidad. Ideal cuando buscas equilibrio interno y armonía. Lo diferente también puede coexistir."
                },
                "SierraNevada": {
                    "title": "Corazón Manifestador",
                    "archetype": "Despertar",
                    "desc": "Territorio Manifestación. Ideal cuando quieres tomar decisiones y encontrar dirección. Manifestar es coherencia."
                },
                "Pacífico": {
                    "title": "Memoria del Océano",
                    "archetype": "Sanación",
                    "desc": "Territorio Linaje. Ideal cuando necesitas soltar emociones y reconectar con tu historia profunda. Escuchar transforma."
                },
                "Putumayo": {
                    "title": "Bosque Medicina",
                    "archetype": "Alquimia",
                    "desc": "Territorio Transición. Ideal para asimilar lo vivido y buscar profundidad sin ruptura. Toda transformación necesita integración."
                },
                "Bogota": {
                    "title": "Círculo de Integración",
                    "archetype": "Sabiduría",
                    "desc": "Territorio Conciencia. Ideal para organizar lo vivido y buscar claridad mental. Comprender también es transformar."
                },
                "Medellin": {
                    "title": "Expansión Creativa",
                    "archetype": "Acción",
                    "desc": "Territorio Movimiento. Ideal cuando quieres avanzar, activar proyectos y salir de la pausa. Avanzar es parte del bienestar."
                }
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
            "destinos": {
                "Amazonas": {
                    "title": "Living Root",
                    "archetype": "Ancestry",
                    "desc": "Root Territory. Ideal when you need stability, grounding, and deep silence. It reminds us that without a root there is no expansion."
                },
                "Macizo": {
                    "title": "Womb of the Earth",
                    "archetype": "Nutrition",
                    "desc": "Womb Territory. Ideal when you are in transition or something new wants to be born. All transformation needs containment."
                },
                "Guainia": {
                    "title": "Waters of Unity",
                    "archetype": "Conciliation",
                    "desc": "Trinity Territory. Ideal when you seek inner balance and harmony. The different can also coexist."
                },
                "SierraNevada": {
                    "title": "Manifesting Heart",
                    "archetype": "Awakening",
                    "desc": "Manifestation Territory. Ideal when you want to make decisions and find direction. Manifesting is coherence."
                },
                "Pacífico": {
                    "title": "Memory of the Ocean",
                    "archetype": "Healing",
                    "desc": "Lineage Territory. Ideal when you need to release emotions and reconnect with your deep history. Listening transforms."
                },
                "Putumayo": {
                    "title": "Medicine Forest",
                    "archetype": "Alchemy",
                    "desc": "Transition Territory. Ideal for assimilating what has been lived and seeking depth without rupture. All transformation needs integration."
                },
                "Bogota": {
                    "title": "Circle of Integration",
                    "archetype": "Wisdom",
                    "desc": "Consciousness Territory. Ideal for organizing what has been lived and seeking mental clarity. Understanding is also transforming."
                },
                "Medellin": {
                    "title": "Creative Expansion",
                    "archetype": "Action",
                    "desc": "Movement Territory. Ideal when you want to move forward, activate projects, and break the pause. Moving forward is part of well-being."
                }
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
            "destinos": {
                "Amazonas": {
                    "title": "Lebendige Wurzel",
                    "archetype": "Abstammung",
                    "desc": "Wurzel-Territorium. Ideal, wenn Sie Stabilität, Erdung und tiefe Stille brauchen. Es erinnert uns daran, dass ohne Wurzel keine Expansion möglich ist."
                },
                "Macizo": {
                    "title": "Schoß der Erde",
                    "archetype": "Ernährung",
                    "desc": "Schoß-Territorium. Ideal, wenn du im Übergang bist oder etwas Neues geboren werden will. Jede Transformation erfordert einen Behälter."
                },
                "Guainia": {
                    "title": "Wasser der Einheit",
                    "archetype": "Schlichtung",
                    "desc": "Trinitäts-Territorium. Ideal, wenn du inneres Gleichgewicht und Harmonie suchst. Auch das Andere kann koexistieren."
                },
                "SierraNevada": {
                    "title": "Manifestierendes Herz",
                    "archetype": "Erwachen",
                    "desc": "Manifestations-Territorium. Ideal, wenn du Entscheidungen treffen und Richtung finden möchtest. Manifestieren ist Kohärenz."
                },
                "Pacífico": {
                    "title": "Erinnerung des Ozeans",
                    "archetype": "Heilung",
                    "desc": "Linien-Territorium. Ideal, wenn du Emotionen loslassen und dich wieder mit deiner tiefen Geschichte verbinden musst. Zuhören transformiert."
                },
                "Putumayo": {
                    "title": "Medizinwald",
                    "archetype": "Alchemie",
                    "desc": "Übergangs-Territorium. Ideal, um das Erlebte zu assimilieren und Tiefe ohne Bruch zu suchen. Jede Transformation bedarf der Integration."
                },
                "Bogota": {
                    "title": "Kreis der Integration",
                    "archetype": "Weisheit",
                    "desc": "Bewusstseins-Territorium. Ideal, um das Erlebte zu ordnen und geistige Klarheit zu suchen. Verstehen bedeutet auch transformieren."
                },
                "Medellin": {
                    "title": "Kreative Expansion",
                    "archetype": "Aktion",
                    "desc": "Bewegungs-Territorium. Ideal, wenn du vorwärts gehen, Projekte aktivieren und aus der Pause herauskommen möchtest. Vorwärtsgehen ist Teil des Wohlbefindens."
                }
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
            "destinos": {
                "Amazonas": {
                    "title": "Racine Vive",
                    "archetype": "Ascendance",
                    "desc": "Territoire Racine. Idéal quand vous avez besoin de stabilité, d'ancrage et de silence profond. Il nous rappelle que sans racine il n'y a pas d'expansion."
                },
                "Macizo": {
                    "title": "Utérus de la Terre",
                    "archetype": "Nutrition",
                    "desc": "Territoire Utérus. Idéal lorsque vous êtes en transition ou que quelque chose de nouveau veut naître. Toute transformation nécessite un contenant."
                },
                "Guainia": {
                    "title": "Eaux d'Unité",
                    "archetype": "Conciliation",
                    "desc": "Territoire Trinité. Idéal quand vous cherchez un équilibre intérieur et une harmonie. Les différences peuvent aussi coexister."
                },
                "SierraNevada": {
                    "title": "Cœur Manifesteur",
                    "archetype": "Éveil",
                    "desc": "Territoire Manifestation. Idéal lorsque vous souhaitez prendre des décisions et trouver une direction. Manifester est cohérence."
                },
                "Pacífico": {
                    "title": "Mémoire de l'Océan",
                    "archetype": "Guérison",
                    "desc": "Territoire Lignage. Idéal quand vous avez besoin de libérer des émotions et de vous reconnecter à votre histoire profonde. Écouter transforme."
                },
                "Putumayo": {
                    "title": "Forêt Médecine",
                    "archetype": "Alchimie",
                    "desc": "Territoire Transition. Idéal pour assimiler ce qui a été vécu et chercher de la profondeur sans rupture. Toute transformation nécessite une intégration."
                },
                "Bogota": {
                    "title": "Cercle d'Intégration",
                    "archetype": "Sagesse",
                    "desc": "Territoire Conscience. Idéal pour organiser ce qui a été vécu et chercher la clarté mentale. Comprendre, c'est aussi transformer."
                },
                "Medellin": {
                    "title": "Expansion Créative",
                    "archetype": "Action",
                    "desc": "Territoire Mouvement. Idéal lorsque vous souhaitez avancer, activer des projets et sortir de la pause. Avancer fait partie du bien-être."
                }
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
