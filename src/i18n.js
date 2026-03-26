
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    es: {
        translation: {
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
                "next": "Siguiente",
                "prev": "Anterior",
                "finish": "Finalizar",
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
                "welcome": "Hola {{nombre}}, bienvenido al latido de la tierra. ¿Qué territorio o duda vienes a compartir?",
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
                    "process": "Pertenencia y retorno al origen",
                    "desc": "Tierra del pulmón verde. Conectamos con el Mundo de Adentro (Wiwa) y restauramos el equilibrio en la Maloka con médicos tradicionales."
                },
                "Macizo": {
                    "title": "Útero de la Tierra",
                    "archetype": "Nutrición",
                    "process": "Gestación y transformación",
                    "desc": "San Agustín y Silvia. Donde nace la estrella fluvial (Río Magdalena). Custodiado por los volcanes Puracé y Sotará. Sabiduría Misak y arcilla."
                },
                "Guainia": {
                    "title": "Aguas de Unidad",
                    "archetype": "Conciliación",
                    "process": "Reintegración de la memoria",
                    "desc": "Los Cerros de Mavecure son la Tulpa Gigante de 3 piedras. Rocas más antiguas del planeta para unir los fuegos sagrados de los pueblos."
                },
                "Sierra": {
                    "title": "Corazón Manifestador",
                    "archetype": "Despertar",
                    "process": "Propósito y dirección",
                    "desc": "Sierra Nevada. Abrir el corazón y ordenar el pensamiento con los abuelos Koguis y Arhuacos para diseñar nuestra misión de vida."
                },
                "Pacífico": {
                    "title": "Memoria del Océano",
                    "archetype": "Sanación",
                    "process": "Limpieza de linaje y familia",
                    "desc": "El parir de las ballenas Yubarta. Selva, mar limpio y la mezcla mágica de culturas Afro y Embera para sanar la historia familiar."
                },
                "Putumayo": {
                    "title": "Bosque Medicina",
                    "archetype": "Alquimia",
                    "process": "Integración y medicina interna",
                    "desc": "Territorio del Jaguar. Transformación mística en el silencio sonoro de la selva agreste con plantas de poder."
                },
                "Bogota": {
                    "title": "Círculo de Integración",
                    "archetype": "Sabiduría",
                    "process": "Cierre consciente y luz del alma",
                    "desc": "Laguna de Guatavita. El vientre de Bachué donde nació la gente. Encontramos el Oro del Alma para brillar en nuestro entorno."
                }
            }
        }
    },
    en: {
        translation: {
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
                "next": "Next",
                "prev": "Previous",
                "finish": "Finish",
                "q0": {
                    "question": "How have you been feeling lately?",
                    "opt0": "Tired or mentally exhausted",
                    "opt1": "In change or transition",
                    "opt2": "Joyful and optimistic",
                    "opt3": "In balance and curious"
                },
                "q1": {
                    "question": "What do you need most from nature?",
                    "opt0": "Stability and grounding",
                    "opt1": "Harmony and softness",
                    "opt2": "Recovery and integration",
                    "opt3": "Inspiration and fresh air"
                },
                "q2": {
                    "question": "Which landscape accompanies you best today?",
                    "opt0": "The moist earth",
                    "opt1": "Breathing the horizon in the mountains",
                    "opt2": "Sunset on the seashore",
                    "opt3": "Contemplating the reflection in serene water"
                },
                "q3": {
                    "question": "What travel pace do you prefer?",
                    "opt0": "Quiet, one activity per day",
                    "opt1": "Balanced, two activities per day",
                    "opt2": "Active, several experiences per day",
                    "opt3": "Flexible, depending on the day"
                },
                "q4": {
                    "question": "What do you want to activate in yourself with this trip?",
                    "opt0": "Grounding and stability (Root)",
                    "opt1": "Creativity and new beginnings (Creation)",
                    "opt2": "Self-love and bonds (Heart)",
                    "opt3": "Manifestation and vision (Purpose)"
                },
                "q5": {
                    "question": "What kind of wellness do you want to experience?",
                    "opt0": "Conscious walks in nature",
                    "opt1": "Massages, spa and wellness rituals",
                    "opt2": "Connection with communities and ancestral practices",
                    "opt3": "Creating with your hands (weaving, ceramics, cooking)"
                },
                "q6": {
                    "question": "What travel format do you prefer?",
                    "opt0": "Independent, solo or at my own pace",
                    "opt1": "As a couple",
                    "opt2": "With family",
                    "opt3": "In a group for a retreat or guided experience"
                }
            },
            "agente": {
                "welcome": "Hello {{nombre}}, welcome to the heartbeat of the earth. What territory or question do you come to share?",
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
                    "process": "Belonging and return to the origin",
                    "desc": "Land of the green lung. We connect with the Inner World (Wiwa) and restore balance in the Maloka with traditional doctors."
                },
                "Macizo": {
                    "title": "Womb of the Earth",
                    "archetype": "Nutrition",
                    "process": "Gestation and transformation",
                    "desc": "San Agustín and Silvia. Where the fluvial star (Magdalena River) is born. Guarded by the Puracé and Sotará volcanoes. Misak wisdom and clay."
                },
                "Guainia": {
                    "title": "Waters of Unity",
                    "archetype": "Conciliation",
                    "process": "Reintegration of memory",
                    "desc": "The Mavecure Hills are the Giant Tulpa of 3 stones. Oldest rocks on the planet to unite the sacred fires of the peoples."
                },
                "Sierra": {
                    "title": "Manifesting Heart",
                    "archetype": "Awakening",
                    "process": "Purpose and direction",
                    "desc": "Sierra Nevada. Open the heart and order thought with Kogui and Arhuaco grandparents to design our life mission."
                },
                "Pacífico": {
                    "title": "Memory of the Ocean",
                    "archetype": "Healing",
                    "process": "Cleansing of lineage and family",
                    "desc": "The birthing of the Yubarta whales. Jungle, clean sea and the magical mix of Afro and Embera cultures to heal family history."
                },
                "Putumayo": {
                    "title": "Medicine Forest",
                    "archetype": "Alchemy",
                    "process": "Integration and internal medicine",
                    "desc": "Territory of the Jaguar. Mystical transformation in the sonorous silence of the wild jungle with power plants."
                },
                "Bogota": {
                    "title": "Circle of Integration",
                    "archetype": "Wisdom",
                    "process": "Conscious closing and light of the soul",
                    "desc": "Guatavita Lagoon. The womb of Bachué where the people were born. We find the Gold of the Soul to shine in our environment."
                }
            }
        }
    },
    de: {
        translation: {
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
                "next": "Weiter",
                "prev": "Zurück",
                "finish": "Beenden",
                "q0": {
                    "question": "Wie hast du dich in letzter Zeit gefühlt?",
                    "opt0": "Müde oder geistig erschöpft",
                    "opt1": "Im Wandel oder Übergang",
                    "opt2": "Fröhlich und optimistisch",
                    "opt3": "Im Gleichgewicht und neugierig"
                },
                "q1": {
                    "question": "Was brauchst du am meisten von der Natur?",
                    "opt0": "Stabilität und Verwurzelung",
                    "opt1": "Harmonie und Weichheit",
                    "opt2": "Erholung und Integration",
                    "opt3": "Inspiration und frische Luft"
                },
                "q2": {
                    "question": "Welche Landschaft begleitet dich heute am besten?",
                    "opt0": "Die feuchte Erde",
                    "opt1": "Den Horizont in den Bergen atmen",
                    "opt2": "Sonnenuntergang am Meer",
                    "opt3": "Die Reflexion im ruhigen Wasser betrachten"
                },
                "q3": {
                    "question": "Welches Reisetempo bevorzugst du?",
                    "opt0": "Ruhig, eine Aktivität am Tag",
                    "opt1": "Ausgewogen, zwei Aktivitäten am Tag",
                    "opt2": "Aktiv, mehrere Erlebnisse am Tag",
                    "opt3": "Flexibel, je nach Tag"
                },
                "q4": {
                    "question": "Was möchtest du mit dieser Reise in dir aktivieren?",
                    "opt0": "Verwurzelung und Stabilität (Wurzel)",
                    "opt1": "Kreativität und Neuanfänge (Schöpfung)",
                    "opt2": "Selbstliebe und Verbundenheit (Herz)",
                    "opt3": "Manifestation und Vision (Zweck)"
                },
                "q5": {
                    "question": "Welche Art von Wellness möchtest du erleben?",
                    "opt0": "Bewusste Spaziergänge in der Natur",
                    "opt1": "Massagen, Spa und Wellness-Rituale",
                    "opt2": "Verbindung mit Gemeinschaften und alten Praktiken",
                    "opt3": "Mit den Händen kreieren (Weben, Keramik, Kochen)"
                },
                "q6": {
                    "question": "Welches Reiseformat bevorzugst du?",
                    "opt0": "Unabhängig, alleine oder in meinem eigenen Tempo",
                    "opt1": "Als Paar",
                    "opt2": "Mit Familie",
                    "opt3": "In einer Gruppe für ein Retreat oder geführte Erfahrung"
                }
            },
            "agente": {
                "welcome": "Hallo {{nombre}}, willkommen beim Herzschlag der Erde. Welches Gebiet oder welche Frage möchtest du teilen?",
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
                    "process": "Zugehörigkeit und Rückkehr zum Ursprung",
                    "desc": "Land der grünen Lunge. Wir verbinden uns mit der Innenwelt (Wiwa) und stellen das Gleichgewicht in der Maloka mit traditionellen Ärzten wieder her."
                },
                "Macizo": {
                    "title": "Schoß der Erde",
                    "archetype": "Ernährung",
                    "process": "Schwangerschaft und Transformation",
                    "desc": "San Agustín und Silvia. Wo der Flussstern (Magdalena-Fluss) geboren wird. Bewacht von den Vulkanen Puracé und Sotará. Misak-Weisheit und Ton."
                },
                "Guainia": {
                    "title": "Wasser der Einheit",
                    "archetype": "Schlichtung",
                    "process": "Wiedereingliederung der Erinnerung",
                    "desc": "Die Mavecure-Hügel sind die riesige Tulpa aus 3 Steinen. Die ältesten Felsen des Planeten, um die heiligen Feuer der Völker zu vereinen."
                },
                "Sierra": {
                    "title": "Manifestierendes Herz",
                    "archetype": "Erwachen",
                    "process": "Zweck und Richtung",
                    "desc": "Sierra Nevada. Öffne das Herz und ordne die Gedanken mit Kogui- und Arhuaco-Großeltern, um unsere Lebensmission zu gestalten."
                },
                "Pacífico": {
                    "title": "Erinnerung des Ozeans",
                    "archetype": "Heilung",
                    "process": "Reinigung von Linie und Familie",
                    "desc": "Die Geburt der Yubarta-Wale. Dschungel, sauberes Meer und die magische Mischung aus Afro- und Embera-Kulturen, um die Familiengeschichte zu heilen."
                },
                "Putumayo": {
                    "title": "Medizinwald",
                    "archetype": "Alchemie",
                    "process": "Integration und innere Medizin",
                    "desc": "Territorium des Jaguars. Mystische Transformation in der klangvollen Stille des wilden Dschungels mit Kraftpflanzen."
                },
                "Bogota": {
                    "title": "Kreis der Integration",
                    "archetype": "Sabiduría",
                    "process": "Bewusster Abschluss und Licht der Seele",
                    "desc": "Guatavita-Lagune. Der Schoß von Bachué, wo die Menschen geboren wurden. Wir finden das Gold der Seele, um in unserer Umgebung zu leuchten."
                }
            }
        }
    },
    fr: {
        translation: {
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
                "next": "Suivant",
                "prev": "Précédent",
                "finish": "Terminer",
                "q0": {
                    "question": "Comment vous êtes-vous senti dernièrement ?",
                    "opt0": "Fatigué ou mentalement épuisé",
                    "opt1": "En changement ou transition",
                    "opt2": "Joyeux et optimiste",
                    "opt3": "En équilibre et curieux"
                },
                "q1": {
                    "question": "De quoi avez-vous le plus besoin de la nature ?",
                    "opt0": "Stabilité et enracinement",
                    "opt1": "Harmonie et douceur",
                    "opt2": "Récupération et intégration",
                    "opt3": "Inspiration et air frais"
                },
                "q2": {
                    "question": "Quel paysage vous accompagne le mieux aujourd'hui ?",
                    "opt0": "La terre humide",
                    "opt1": "Respirer l'horizon dans les montagnes",
                    "opt2": "Coucher de soleil au bord de la mer",
                    "opt3": "Contempler le reflet dans une eau sereine"
                },
                "q3": {
                    "question": "Quel rythme de voyage préférez-vous ?",
                    "opt0": "Calme, une activité par jour",
                    "opt1": "Équilibré, deux activités par jour",
                    "opt2": "Actif, plusieurs expériences par jour",
                    "opt3": "Flexible, selon le jour"
                },
                "q4": {
                    "question": "Que voulez-vous activer en vous avec ce voyage ?",
                    "opt0": "Enracinement et stabilité (Racine)",
                    "opt1": "Créativité et nouveaux départs (Création)",
                    "opt2": "Amour-propre et liens (Cœur)",
                    "opt3": "Manifestation et vision (Objectif)"
                },
                "q5": {
                    "question": "Quel type de bien-être souhaitez-vous vivre ?",
                    "opt0": "Promenades conscientes dans la nature",
                    "opt1": "Massages, spa et rituels de bien-être",
                    "opt2": "Connexion avec des communautés et pratiques ancestrales",
                    "opt3": "Créer avec les mains (tissage, céramique, cuisine)"
                },
                "q6": {
                    "question": "Quel format de voyage préférez-vous ?",
                    "opt0": "Indépendant, seul à mon propre rythme",
                    "opt1": "En couple",
                    "opt2": "En famille",
                    "opt3": "En groupe pour une retraite ou une expérience guidée"
                }
            },
            "agente": {
                "welcome": "Bonjour {{nombre}}, bienvenue au battement de cœur de la terre. Quel territoire ou question venez-vous partager ?",
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
                "placeholder": "Parlez avec la grenouille...",
                "whatsapp": "📲 Appeler un gardien sur WhatsApp"
            },
            "validation": {
                "error_nombre": "Veuillez entrer votre nom.",
                "error_correo": "Veuillez entrer votre adresse e-mail."
            },
            "destinos": {
                "Amazonas": {
                    "title": "Racine Vivante",
                    "archetype": "Ascendance",
                    "process": "Appartenance et retour à l'origine",
                    "desc": "Terre du poumon vert. Nous nous connectons au Monde Intérieur (Wiwa) et restaurons l'équilibre dans la Maloka avec des médecins traditionnels."
                },
                "Macizo": {
                    "title": "Ventre de la Terre",
                    "archetype": "Nutrition",
                    "process": "Gestation et transformation",
                    "desc": "San Agustín et Silvia. Où naît l'étoile fluviale (Rivière Magdalena). Gardé par les volcans Puracé et Sotará. Sagesse Misak et argile."
                },
                "Guainia": {
                    "title": "Eaux d'Unité",
                    "archetype": "Conciliation",
                    "process": "Réintégration de la mémoire",
                    "desc": "Les collines de Mavecure sont la Tulpe Géante de 3 pierres. Les roches les plus anciennes de la planète pour unir les feux sacrés des peuples."
                },
                "Sierra": {
                    "title": "Cœur Manifestant",
                    "archetype": "Éveil",
                    "process": "But et direction",
                    "desc": "Sierra Nevada. Ouvrez le cœur et ordonnez la pensée avec les grands-parents Kogui et Arhuaco pour concevoir notre mission de vie."
                },
                "Pacífico": {
                    "title": "Mémoire de l'Océan",
                    "archetype": "Guérison",
                    "process": "Nettoyage de la lignée et de la famille",
                    "desc": "La naissance des baleines Yubarta. Jungle, mer propre et le mélange magique des cultures Afro et Embera pour guérir l'histoire familiale."
                },
                "Putumayo": {
                    "title": "Forêt Médecine",
                    "archetype": "Alchimie",
                    "process": "Intégration et médecine interne",
                    "desc": "Territoire du Jaguar. Transformation mystique dans le silence sonore de la jungle sauvage avec des plantes de pouvoir."
                },
                "Bogota": {
                    "title": "Cercle d'Intégration",
                    "archetype": "Sagesse",
                    "process": "Clôture consciente et lumière de l'âme",
                    "desc": "Lagune de Guatavita. Le ventre de Bachué où le peuple est né. Nous trouvons l'Or de l'Âme pour briller dans notre environnement."
                }
            }
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
