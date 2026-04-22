
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    es: {
        translation: {
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
                "intro": "Dans Ecodestinos, une destination n'est pas seulement un lieu. C'est un territoire vivant où la nature, la culture et la mémoire ancestrale soutiennent une énergie unique qui accompagne votre moment de vie.",
                "Amazonas": {
                    "title": "Racine Vive",
                    "archetype": "Ascendance",
                    "process": "Appartenance et retour à l'origine",
                    "desc": "Territoire Racine. Idéal quand vous avez besoin de stabilité, d'ancrage et de silence profond."
                },
                "Macizo": {
                    "title": "Utérus de la Terre",
                    "archetype": "Nutrition",
                    "process": "Gestation et transformation",
                    "desc": "Territoire Utérus. Idéal pour les transitions ou quand quelque chose de nouveau veut naître."
                },
                "Guainia": {
                    "title": "Eaux d'Unité",
                    "archetype": "Conciliation",
                    "process": "Réintégration de la mémoire",
                    "desc": "Territoire Trinité. Idéal pour l'équilibre intérieur et l'harmonie."
                },
                "Sierra": {
                    "title": "Cœur Manifesteur",
                    "archetype": "Éveil",
                    "process": "But et direction",
                    "desc": "Territoire Manifestation. Idéal pour prendre des décisions et trouver une direction."
                },
                "Pacífico": {
                    "title": "Mémoire de l'Océan",
                    "archetype": "Guérison",
                    "process": "Nettoyage de la lignée et de la famille",
                    "desc": "Territoire Lignage. Idéal pour libérer les émotions et renouer avec son histoire."
                },
                "Putumayo": {
                    "title": "Forêt Médecine",
                    "archetype": "Alchimie",
                    "process": "Intégration et médecine interne",
                    "desc": "Territoire Transition. Idéal pour assimiler le vécu et chercher la profondeur."
                },
                "Bogota": {
                    "title": "Cercle d'Intégration",
                    "archetype": "Sagesse",
                    "process": "Clôture consciente et lumière de l'âme",
                    "desc": "Territoire Conscience. Idéal pour la clarté mentale et organiser ses expériences."
                },
                "Medellin": {
                    "title": "Expansion Créative",
                    "archetype": "Action",
                    "process": "Action et Mouvement",
                    "desc": "Territoire Mouvement. Idéal pour avancer, activer des projets et sortir de la pause."
                },
                "cierre": "Vous ne choisissez pas une destination. Vous choisissez le territoire qui accompagne votre moment."
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
