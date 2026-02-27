
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    es: {
        translation: {
            "landing": {
                "title": "Territorios Vivos",
                "tagline": "Mapeando la compatibilidad entre tu alma y la tierra",
                "start": "Iniciar medición de energía",
                "skip": "Omitir Quiz"
            },
            "procesando": {
                "rana": "La Rana está escuchando tu latido..."
            },
            "resultados": {
                "title": "Tu Energía Resuena Con:",
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
                "progress": "REFLEXIÓN {{current}} / {{total}}",
                "next": "Siguiente",
                "prev": "Anterior",
                "finish": "Finalizar",
                "q0": {
                    "question": "¿Cómo sientes tu energía en este momento vital?",
                    "opt0": "Desconectada o con agotamiento mental",
                    "opt1": "En medio de un proceso de cambio profundo",
                    "opt2": "Buscando claridad, dirección y propósito",
                    "opt3": "Sensible, con necesidad de sanar vínculos"
                },
                "q1": {
                    "question": "¿Qué es lo que más necesitas de la naturaleza hoy?",
                    "opt0": "Estabilidad y arraigo",
                    "opt1": "Contención para gestar algo nuevo",
                    "opt2": "Armonía y suavidad",
                    "opt3": "Medicina natural e integración"
                },
                "q2": {
                    "question": "¿Cuál sientes que es tu mayor desafío emocional actualmente?",
                    "opt0": "La saturación mental y el ritmo acelerado",
                    "opt1": "Ciclos del pasado que necesitan cerrarse",
                    "opt2": "La sensación de fragmentación interior",
                    "opt3": "La falta de claridad para ordenar lo vivido"
                },
                "q3": {
                    "question": "Si tuvieras que elegir un paisaje para acompañar tu proceso, sería:",
                    "opt0": "La tierra húmeda y la inmensidad verde",
                    "opt1": "La montaña fuerte y la piedra antigua",
                    "opt2": "El océano profundo y sonoro",
                    "opt3": "El agua calma de una laguna sagrada"
                },
                "q4": {
                    "question": "¿Cómo prefieres atravesar tus momentos de transformación?",
                    "opt0": "Soltando lo viejo en completo silencio",
                    "opt1": "Integrando opuestos y buscando reconciliación",
                    "opt2": "Convirtiendo mi intención en acción directa",
                    "opt3": "Ablandando el proceso con suavidad"
                },
                "q5": {
                    "question": "En tus relaciones y entorno, hoy buscas:",
                    "opt0": "Recordar que pertenezco a un sistema mayor",
                    "opt1": "Reconexión con la historia familiar",
                    "opt2": "Convivencia pacífica en la diferencia",
                    "opt3": "Cierre consciente y comprensión"
                },
                "q6": {
                    "question": "¿Qué espacio te daría más paz al imaginarlo?",
                    "opt0": "La cima de una montaña que mira al mar",
                    "opt1": "Un bosque húmedo lleno de vida",
                    "opt2": "El canto lejano de ballenas en el mar",
                    "opt3": "Un cerro sagrado rodeado de ríos"
                },
                "q7": {
                    "question": "Frente a una decisión importante en tu vida, tú necesitas:",
                    "opt0": "Enraizarme y encontrar mi centro primero",
                    "opt1": "Que mis pensamientos se conviertan en actos",
                    "opt2": "Escuchar mi intuición antes de hablar",
                    "opt3": "Entender cada parte del proceso antes de saltar"
                },
                "q8": {
                    "question": "El mensaje que más resuena contigo hoy es:",
                    "opt0": "Sin raíz no hay expansión.",
                    "opt1": "Toda transformación necesita contención.",
                    "opt2": "Antes de hablar, escucha profundo.",
                    "opt3": "Comprender es parte vital del viaje."
                }
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
            "landing": {
                "title": "Living Territories",
                "tagline": "Mapping the compatibility between your soul and the earth",
                "start": "Start energy measurement",
                "skip": "Skip Quiz"
            },
            "procesando": {
                "rana": "The Frog is listening to your heartbeat..."
            },
            "resultados": {
                "title": "Your Energy Resonates With:",
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
                "progress": "REFLECTION {{current}} / {{total}}",
                "next": "Next",
                "prev": "Previous",
                "finish": "Finish",
                "q0": {
                    "question": "How do you feel your energy at this vital moment?",
                    "opt0": "Disconnected or mentally exhausted",
                    "opt1": "In the midst of a deep process of change",
                    "opt2": "Seeking clarity, direction and purpose",
                    "opt3": "Sensitive, needing to heal bonds"
                },
                "q1": {
                    "question": "What do you need most from nature today?",
                    "opt0": "Stability and grounding",
                    "opt1": "Containment to gestate something new",
                    "opt2": "Harmony and softness",
                    "opt3": "Natural medicine and integration"
                },
                "q2": {
                    "question": "What do you feel is your biggest emotional challenge currently?",
                    "opt0": "Mental saturation and the fast pace",
                    "opt1": "Past cycles that need to be closed",
                    "opt2": "The feeling of inner fragmentation",
                    "opt3": "Lack of clarity to order what has been lived"
                },
                "q3": {
                    "question": "If you had to choose a landscape to accompany your process, it would be:",
                    "opt0": "The moist earth and green immensity",
                    "opt1": "The strong mountain and ancient stone",
                    "opt2": "The deep and sonorous ocean",
                    "opt3": "The calm water of a sacred lagoon"
                },
                "q4": {
                    "question": "How do you prefer to go through your moments of transformation?",
                    "opt0": "Releasing the old in complete silence",
                    "opt1": "Integrating opposites and seeking reconciliation",
                    "opt2": "Turning my intention into direct action",
                    "opt3": "Softening the process gently"
                },
                "q5": {
                    "question": "In your relationships and environment, today you seek:",
                    "opt0": "To remember that I belong to a larger system",
                    "opt1": "Reconnection with family history",
                    "opt2": "Peaceful coexistence in difference",
                    "opt3": "Conscious closure and understanding"
                },
                "q6": {
                    "question": "What space would give you the most peace when imagining it?",
                    "opt0": "The top of a mountain overlooking the sea",
                    "opt1": "A humid forest full of life",
                    "opt2": "The distant song of whales in the sea",
                    "opt3": "A sacred hill surrounded by rivers"
                },
                "q7": {
                    "question": "Faced with an important decision in your life, you need:",
                    "opt0": "To ground myself and find my center first",
                    "opt1": "For my thoughts to become actions",
                    "opt2": "To listen to my intuition before speaking",
                    "opt3": "To understand every part of the process before jumping"
                },
                "q8": {
                    "question": "The message that resonates most with you today is:",
                    "opt0": "Without root there is no expansion.",
                    "opt1": "Every transformation needs containment.",
                    "opt2": "Before speaking, listen deeply.",
                    "opt3": "Understanding is a vital part of the journey."
                }
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
            "landing": {
                "title": "Lebendige Territorien",
                "tagline": "Kartierung der Kompatibilität zwischen deiner Seele und der Erde",
                "start": "Energiemessung starten",
                "skip": "Quiz überspringen"
            },
            "procesando": {
                "rana": "Der Frosch hört deinen Herzschlag..."
            },
            "resultados": {
                "title": "Deine Energie resoniert mit:",
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
                "progress": "REFLEXION {{current}} / {{total}}",
                "next": "Weiter",
                "prev": "Zurück",
                "finish": "Beenden",
                "q0": {
                    "question": "Wie fühlst du deine Energie in diesem vitalen Moment?",
                    "opt0": "Getrennt oder geistig erschöpft",
                    "opt1": "Inmitten eines tiefen Veränderungsprozesses",
                    "opt2": "Suche nach Klarheit, Richtung und Zweck",
                    "opt3": "Sensibel, muss Bindungen heilen"
                },
                "q1": {
                    "question": "Was brauchst du heute am meisten von der Natur?",
                    "opt0": "Stabilität und Verwurzelung",
                    "opt1": "Eindämmung, um etwas Neues zu gebären",
                    "opt2": "Harmonie und Weichheit",
                    "opt3": "Naturmedizin und Integration"
                },
                "q2": {
                    "question": "Was ist derzeit deine größte emotionale Herausforderung?",
                    "opt0": "Mentale Sättigung und das schnelle Tempo",
                    "opt1": "Vergangene Zyklen, die geschlossen werden müssen",
                    "opt2": "Das Gefühl innerer Fragmentierung",
                    "opt3": "Mangelnde Klarheit, um das Erlebte zu ordnen"
                },
                "q3": {
                    "question": "Wenn du eine Landschaft wählen müsstest, die deinen Prozess begleitet, wäre es:",
                    "opt0": "Die feuchte Erde und die grüne Unermesslichkeit",
                    "opt1": "Der starke Berg und der alte Stein",
                    "opt2": "Der tiefe und klangvolle Ozean",
                    "opt3": "Das ruhige Wasser einer heiligen Lagune"
                },
                "q4": {
                    "question": "Wie durchlebst du am liebsten deine Momente der Transformation?",
                    "opt0": "Das Alte in völliger Stille loslassen",
                    "opt1": "Gegensätze integrieren und Versöhnung suchen",
                    "opt2": "Meine Absicht in direkte Aktion umsetzen",
                    "opt3": "Den Prozess sanft abmildern"
                },
                "q5": {
                    "question": "In deinen Beziehungen und in deinem Umfeld suchst du heute:",
                    "opt0": "Mich daran zu erinnern, dass ich zu einem größeren System gehöre",
                    "opt1": "Wiederverbindung mit der Familiengeschichte",
                    "opt2": "Friedliches Zusammenleben in der Differenz",
                    "opt3": "Bewusster Abschluss und Verständnis"
                },
                "q6": {
                    "question": "Welcher Raum würde dir am meisten Frieden geben, wenn du ihn dir vorstellst?",
                    "opt0": "Der Gipfel eines Berges mit Blick auf das Meer",
                    "opt1": "Ein feuchter Wald voller Leben",
                    "opt2": "Der ferne Gesang der Wale im Meer",
                    "opt3": "Ein heiliger Hügel umgeben von Flüssen"
                },
                "q7": {
                    "question": "Angesichts einer wichtigen Entscheidung in deinem Leben brauchst du:",
                    "opt0": "Mich zu erden und zuerst mein Zentrum zu finden",
                    "opt1": "Dass meine Gedanken zu Taten werden",
                    "opt2": "Auf meine Intuition zu hören, bevor ich spreche",
                    "opt3": "Jeden Teil des Prozesses zu verstehen, bevor ich springe"
                },
                "q8": {
                    "question": "Die Botschaft, die heute am meisten mit dir resoniert, ist:",
                    "opt0": "Ohne Wurzel gibt es keine Expansion.",
                    "opt1": "Jede Transformation braucht Eindämmung.",
                    "opt2": "Bevor du sprichst, höre tief zu.",
                    "opt3": "Verstehen ist ein wesentlicher Teil der Reise."
                }
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
                    "archetype": "Weisheit",
                    "process": "Bewusster Abschluss und Licht der Seele",
                    "desc": "Guatavita-Lagune. Der Schoß von Bachué, wo die Menschen geboren wurden. Wir finden das Gold der Seele, um in unserer Umgebung zu leuchten."
                }
            }
        }
    },
    fr: {
        translation: {
            "landing": {
                "title": "Territoires Vivants",
                "tagline": "Cartographie de la compatibilité entre votre âme et la terre",
                "start": "Commencer la mesure d'énergie",
                "skip": "Passer le quiz"
            },
            "procesando": {
                "rana": "La Grenouille écoute votre rythme cardiaque..."
            },
            "resultados": {
                "title": "Votre énergie résonne avec:",
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
                "progress": "RÉFLEXION {{current}} / {{total}}",
                "next": "Suivant",
                "prev": "Précédent",
                "finish": "Terminer",
                "q0": {
                    "question": "Comment ressentez-vous votre énergie à ce moment vital ?",
                    "opt0": "Déconnecté ou mentalement épuisé",
                    "opt1": "Au milieu d'un processus profond de changement",
                    "opt2": "Cherchant de la clarté, de la direction et un but",
                    "opt3": "Sensible, ayant besoin de guérir des liens"
                },
                "q1": {
                    "question": "De quoi avez-vous le plus besoin de la nature aujourd'hui ?",
                    "opt0": "Stabilité et enracinement",
                    "opt1": "Contenance pour engendrer quelque chose de nouveau",
                    "opt2": "Harmonie et douceur",
                    "opt3": "Médecine naturelle et intégration"
                },
                "q2": {
                    "question": "Quel est selon vous votre plus grand défi émotionnel actuellement ?",
                    "opt0": "La saturation mentale et le rythme rapide",
                    "opt1": "Les cycles passés qui doivent être fermés",
                    "opt2": "Le sentiment de fragmentation intérieure",
                    "opt3": "Le manque de clarté pour ordonner le vécu"
                },
                "q3": {
                    "question": "Si vous deviez choisir un paysage pour vous accompagner, ce serait :",
                    "opt0": "La terre humide et l'immensité verte",
                    "opt1": "La montagne forte et la pierre ancienne",
                    "opt2": "L'océan profond et sonore",
                    "opt3": "L'eau calme d'une lagune sacrée"
                },
                "q4": {
                    "question": "Comment préférez-vous traverser vos moments de transformation ?",
                    "opt0": "Relâcher l'ancien dans un silence complet",
                    "opt1": "Intégrer les opposés et chercher la réconciliation",
                    "opt2": "Transformer mon intention en action directe",
                    "opt3": "Adoucir doucement le processus"
                },
                "q5": {
                    "question": "Dans vos relations et votre environnement, vous cherchez aujourd'hui :",
                    "opt0": "À me rappeler que j'appartiens à un système plus vaste",
                    "opt1": "Reconnexion avec l'histoire familiale",
                    "opt2": "Coexistence pacifique dans la différence",
                    "opt3": "Clôture consciente et compréhension"
                },
                "q6": {
                    "question": "Quel espace vous donnerait le plus de paix en l'imaginant ?",
                    "opt0": "Le sommet d'une montagne surplombant la mer",
                    "opt1": "Une forêt humide pleine de vie",
                    "opt2": "Le chant lointain des baleines dans la mer",
                    "opt3": "Une colline sacrée entourée de rivières"
                },
                "q7": {
                    "question": "Face à une décision importante dans votre vie, vous avez besoin de :",
                    "opt0": "M'enraciner et trouver d'abord mon centre",
                    "opt1": "Que mes pensées deviennent des actes",
                    "opt2": "Écouter mon intuition avant de parler",
                    "opt3": "Comprendre chaque partie du processus avant de sauter"
                },
                "q8": {
                    "question": "Le message qui résonne le plus avec vous aujourd'hui est :",
                    "opt0": "Sans racine, il n'y a pas d'expansion.",
                    "opt1": "Toute transformation a besoin de contenance.",
                    "opt2": "Avant de parler, écoute profondément.",
                    "opt3": "Comprendre est une partie vitale du voyage."
                }
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
