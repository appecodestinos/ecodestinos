import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    "es": {
        "translation": {
            "logo_circular": "/assets/logocircular.png",
            "landing": {
                "title": "Territorios Vivos",
                "tagline": "En solo 90 segundos descubre, Qué territorio conecta mejor contigo y recibe recomendaciones",
                "start": "comenzar el viaje",
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
                    "question": "¿En qué estado se encuentra tu energía hoy?",
                    "opt0": "Necesito silencio y profundidad (Raíz)",
                    "opt1": "Busco transformación y renacimiento (Útero)",
                    "opt2": "Siento el llamado de la visión (Corazón)",
                    "opt3": "Deseo fluir y sanar mis aguas (Memoria)"
                },
                "q1": {
                    "question": "¿Cuál es el elemento que más te llama en este ciclo?",
                    "opt0": "La tierra húmeda y el bosque denso",
                    "opt1": "El agua cristalina que brota del Macizo",
                    "opt2": "La inmensidad de las rocas antiguas",
                    "opt3": "El susurro místico de las plantas de poder"
                },
                "q2": {
                    "question": "Si tu alma fuera un paisaje, ¿cómo se vería?",
                    "opt0": "Un útero de montañas custodiado por volcanes",
                    "opt1": "Un pulmón verde infinito donde nace la vida",
                    "opt2": "Un océano salvaje que limpia el linaje",
                    "opt3": "Una laguna sagrada que refleja el oro"
                },
                "q3": {
                    "question": "¿Cómo deseas que sea el ritmo de tu caminar?",
                    "opt0": "Lento, contemplativo y en profundo silencio",
                    "opt1": "Equilibrado, entre la aventura y el descanso",
                    "opt2": "Dinámico, integrando medicinas y saberes",
                    "opt3": "Fluido, siguiendo el latido del territorio"
                },
                "q4": {
                    "question": "¿Qué intención deseas sembrar en este viaje?",
                    "opt0": "Retorno al origen y pertenencia ancestral",
                    "opt1": "Alquimia interna y medicina del jaguar",
                    "opt2": "Ordenar el pensamiento y diseñar mi misión",
                    "opt3": "Nutrición y gestación de nuevos proyectos"
                },
                "q5": {
                    "question": "¿Qué tipo de medicina necesitas recibir?",
                    "opt0": "El abrazo de la Maloka y la palabra de los abuelos",
                    "opt1": "La purificación del mar y el canto de las ballenas",
                    "opt2": "La Tulpa de piedra y el fuego de la unidad",
                    "opt3": "El cierre consciente de ciclos en aguas sagradas"
                },
                "q6": {
                    "question": "¿Con quién deseas compartir esta ruta sagrada?",
                    "opt0": "En soledad, para un encuentro conmigo mismo",
                    "opt1": "En pareja, para armonizar nuestra energía",
                    "opt2": "Con mi familia, para sanar raíces comunes",
                    "opt3": "Con mi comunidad, para expandir la visión"
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
                "Sierra": {
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
                "start": "begin the journey",
                "skip": "Explore the map"
            },
            "procesando": {
                "rana": "The Frog is listening to your heartbeat..."
            },
            "resultados": {
                "title": "YOUR JOURNEY RESONATES WITH:",
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
                    "question": "How is your energy state today?",
                    "opt0": "I need silence and depth (Root)",
                    "opt1": "I seek transformation and rebirth (Womb)",
                    "opt2": "I feel the call of vision (Heart)",
                    "opt3": "I wish to flow and heal my waters (Memory)"
                },
                "q1": {
                    "question": "Which element calls you most in this cycle?",
                    "opt0": "Moist earth and dense forest",
                    "opt1": "Crystalline water springing from the Massif",
                    "opt2": "The immensity of ancient rocks",
                    "opt3": "The mystical whisper of power plants"
                },
                "q2": {
                    "question": "If your soul were a landscape, what would it look like?",
                    "opt0": "A womb of mountains guarded by volcanoes",
                    "opt1": "An infinite green lung where life is born",
                    "opt2": "A wild ocean that cleanses the lineage",
                    "opt3": "A sacred lagoon reflecting gold"
                },
                "q3": {
                    "question": "How do you wish the rhythm of your walk to be?",
                    "opt0": "Slow, contemplative, and in deep silence",
                    "opt1": "Balanced, between adventure and rest",
                    "opt2": "Dynamic, integrating medicines and knowledge",
                    "opt3": "Fluid, following the heartbeat of the territory"
                },
                "q4": {
                    "question": "What intention do you wish to plant on this journey?",
                    "opt0": "Return to origin and ancestral belonging",
                    "opt1": "Inner alchemy and jaguar medicine",
                    "opt2": "Ordering thoughts and designing my mission",
                    "opt3": "Nutrition and gestation of new projects"
                },
                "q5": {
                    "question": "What kind of medicine do you need to receive?",
                    "opt0": "The embrace of the Maloka and words of the elders",
                    "opt1": "The purification of the sea and song of the whales",
                    "opt2": "The stone Tulpa and the fire of unity",
                    "opt3": "Conscious closing of cycles in sacred waters"
                },
                "q6": {
                    "question": "Who do you wish to share this sacred route with?",
                    "opt0": "In solitude, for a meeting with myself",
                    "opt1": "As a couple, to harmonize our energy",
                    "opt2": "With my family, to heal common roots",
                    "opt3": "With my community, to expand the vision"
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
                "Sierra": {
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
                "start": "die Reise beginnen",
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
                    "question": "In welchem Energiezustand befindest du dich heute?",
                    "opt0": "Ich brauche Stille und Tiefe (Wurzel)",
                    "opt1": "Ich suche Transformation und Wiedergeburt (Schoß)",
                    "opt2": "Ich spüre den Ruf der Vision (Herz)",
                    "opt3": "Ich möchte fließen und meine Gewässer heilen (Erinnerung)"
                },
                "q1": {
                    "question": "Welches Element ruft dich in diesem Zyklus am meisten?",
                    "opt0": "Die feuchte Erde und der dichte Wald",
                    "opt1": "Das kristallklare Wasser aus dem Massiv",
                    "opt2": "Die Unermesslichkeit alter Felsen",
                    "opt3": "Das mystische Flüstern von Kraftpflanzen"
                },
                "q2": {
                    "question": "Wenn deine Seele eine Landschaft wäre, wie würde sie aussehen?",
                    "opt0": "Ein von Vulkanen bewachter Schoß aus Bergen",
                    "opt1": "Eine unendliche grüne Lunge, in der Leben entsteht",
                    "opt2": "Ein wilder Ozean, der die Ahnenlinie reinigt",
                    "opt3": "Eine heilige Lagune, die Gold reflektiert"
                },
                "q3": {
                    "question": "Wie möchtest du den Rhythmus deines Gehens gestalten?",
                    "opt0": "Langsam, besinnlich und in tiefer Stille",
                    "opt1": "Ausgewogen, zwischen Abenteuer und Ruhe",
                    "opt2": "Dynamisch, unter Einbeziehung von Medizin und Wissen",
                    "opt3": "Fließend, dem Herzschlag des Territoriums folgend"
                },
                "q4": {
                    "question": "Welche Absicht möchtest du auf dieser Reise säen?",
                    "opt0": "Rückkehr zum Ursprung und angestammte Zugehörigkeit",
                    "opt1": "Innere Alchemie und Jaguarmedizin",
                    "opt2": "Gedanken ordnen und meine Mission entwerfen",
                    "opt3": "Ernährung und Entwicklung neuer Projekte"
                },
                "q5": {
                    "question": "Welche Art von Medizin musst du erhalten?",
                    "opt0": "Die Umarmung der Maloka und die Worte der Großeltern",
                    "opt1": "Die Reinigung des Meeres und der Gesang der Wale",
                    "opt2": "Die Stein-Tulpa und das Feuer der Einheit",
                    "opt3": "Das bewusste Schließen von Zyklen in heiligen Gewässern"
                },
                "q6": {
                    "question": "Mit wem möchtest du diese heilige Route teilen?",
                    "opt0": "In Einsamkeit, für eine Begegnung mit mir selbst",
                    "opt1": "Als Paar, um unsere Energie zu harmonisieren",
                    "opt2": "Mit meiner Familie, um gemeinsame Wurzeln zu heilen",
                    "opt3": "Mit meiner Gemeinschaft, um die Vision zu erweitern"
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
                "Sierra": {
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
                "tagline": "En seulement 90 secondes découvrez quel territoire résonne le mieux avec vous et recevez des recommandations",
                "start": "commencer le voyage",
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
                    "question": "Dans quel état se trouve votre énergie aujourd'hui ?",
                    "opt0": "J'ai besoin de silence et de profondeur (Racine)",
                    "opt1": "Je cherche transformation et renaissance (Utérus)",
                    "opt2": "Je ressens l'appel de la vision (Cœur)",
                    "opt3": "Je souhaite couler et guérir mes eaux (Mémoire)"
                },
                "q1": {
                    "question": "Quel est l'élément qui vous appelle le plus dans ce cycle ?",
                    "opt0": "La terre humide et la forêt dense",
                    "opt1": "L'eau cristalline qui jaillit du Massif",
                    "opt2": "L'immensité des roches anciennes",
                    "opt3": "Le murmure mystique des plantes de pouvoir"
                },
                "q2": {
                    "question": "Si votre âme était un paysage, à quoi ressemblerait-elle ?",
                    "opt0": "Un utérus de montagnes gardé par des volcans",
                    "opt1": "Un poumon vert infini où la vie naît",
                    "opt2": "Un océan sauvage qui nettoie la lignée",
                    "opt3": "Une lagune sacrée qui reflète l'or"
                },
                "q3": {
                    "question": "Comment souhaitez-vous que soit le rythme de votre marche ?",
                    "opt0": "Lent, contemplatif et en profond silence",
                    "opt1": "Équilibré, entre aventure et repos",
                    "opt2": "Dynamique, intégrant médecines et savoirs",
                    "opt3": "Fluide, suivant le battement du territoire"
                },
                "q4": {
                    "question": "Quelle intention souhaitez-vous semer lors de ce voyage ?",
                    "opt0": "Retour à l'origine et appartenance ancestrale",
                    "opt1": "Alchimie interne et médecine du jaguar",
                    "opt2": "Ordonner les pensées et concevoir ma mission",
                    "opt3": "Nutrition et gestation de nouveaux projets"
                },
                "q5": {
                    "question": "Quel type de médecine avez-vous besoin de recevoir ?",
                    "opt0": "L'étreinte de la Maloka et la parole des grands-parents",
                    "opt1": "La purification de la mer et le chant des baleines",
                    "opt2": "La Tulpa de pierre et le feu de l'unité",
                    "opt3": "La clôture consciente des cycles dans les eaux sacrées"
                },
                "q6": {
                    "question": "Avec qui souhaitez-vous partager cet itinéraire sacré ?",
                    "opt0": "En solitude, pour une rencontre avec moi-même",
                    "opt1": "En couple, pour harmoniser notre énergie",
                    "opt2": "Avec ma famille, pour guérir des racines communes",
                    "opt3": "Avec ma communauté, pour élargir la vision"
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
                "Sierra": {
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
