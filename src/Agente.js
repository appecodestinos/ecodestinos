import { useTranslation } from "react-i18next";
import React, { useState, useEffect, useRef } from 'react';

export default function Agente({ nombre }) {
    const { t, i18n } = useTranslation();
    const [contadorMensajes, setContadorMensajes] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    const [mensajes, setMensajes] = useState([
        {
            rol: 'asistente',
            texto: t('agente.welcome', { defaultValue: `Hola ${nombre || 'viajero'}, bienvenido al latido de la tierra. ¿Qué territorio o duda vienes a compartir?` })
        }
    ]);
    const [input, setInput] = useState('');
    const scrollRef = useRef(null);

    const WHATSAPP_LINK = "https://wa.me/573156074044";

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [mensajes, isOpen]);

    const manejarEnvio = (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        const userMsg = { rol: 'usuario', texto: input };
        setMensajes([...mensajes, userMsg]);
        const consulta = input.toLowerCase();
        const nuevoContador = contadorMensajes + 1;
        setContadorMensajes(nuevoContador);
        setInput('');

        setTimeout(async () => {
            // --- 1. CEREBRO AVANZADO DE IA (System Prompt) ---
            const systemPrompt = `Eres el 'Guía Ancestral de Ecodestinos (www.ecodestinos.com.co)'. 
Conoces los 7 territorios sagrados y sus arquetipos: Amazonas (Raíz Viva/Ancestralidad), Macizo (Útero de la Tierra/Nutrición), Guainía (Aguas de Unidad/Conciliación), Sierra (Corazón Manifestador/Despertar), Pacífico (Memoria del Océano/Sanación), Putumayo (Bosque Medicina/Alquimia) y Bogotá (Círculo de Integración/Sabiduría).
Tu filosofía se basa en la sanación y el turismo consciente. 
Trata al usuario por su nombre: "${nombre || 'viajero'}". Salúdalo de forma empática, mística y natural.
IMPORTANTE: El usuario está navegando la app en el idioma [${i18n.language}]. Debes responder EXCLUSIVAMENTE en este idioma, manteniendo el tono místico y natural.`;

            const aiPayload = {
                model: "gpt-4o",
                messages: [
                    { role: "system", content: systemPrompt },
                    // Historial simplificado para el API
                    ...mensajes.map(m => ({ role: m.rol === 'usuario' ? 'user' : 'assistant', content: m.texto })),
                    { role: "user", content: input }
                ]
            };

            console.log("🧠 Payload listo para enviar al proveedor IA (OpenAI/Gemini):", aiPayload);

            /* --- 2. PETICIÓN A LA IA (Activar al configurar API KEY) ---
            try {
                const response = await fetch("https://api.openai.com/v1/chat/completions", {
                    method: "POST",
                    headers: { "Content-Type": "application/json", "Authorization": `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}` },
                    body: JSON.stringify(aiPayload)
                });
                const data = await response.json();
                const respuestaIA = data.choices[0].message.content;
                setMensajes(prev => [...prev, { rol: 'asistente', texto: respuestaIA }]);
                return;
            } catch (error) {
                console.error("Error contactando a los espíritus (IA API):", error);
            }
            */

            // --- 3. FALLBACK LOCAL (Mientras la IA real esté desconectada) ---
            let r = "";

            if (consulta.includes('macizo') || consulta.includes('san agustin') || consulta.includes('útero')) {
                r = "El Macizo es el Útero de la Tierra. Aquí nace el agua que irriga a Colombia. Los volcanes Puracé y Sotará custodian tu transformación. Es un lugar para gestar nuevos proyectos y silenciar el ruido mental.";
            } else if (consulta.includes('amazonas') || consulta.includes('selva') || consulta.includes('raíz')) {
                r = "El Amazonas es la Raíz Viva. En la Maloka, los abuelos restauran tu equilibrio con medicinas del bosque. Recuerda: la selva no se visita, se habita con respeto. (Vacuna de Fiebre Amarilla obligatoria).";
            } else if (consulta.includes('guainia') || consulta.includes('mavecure') || consulta.includes('tulpa')) {
                r = "Guainía es la Tulpa del Mundo. Los Cerros de Mavecure son las rocas más antiguas que verán tus ojos. Es el destino para reintegrar fragmentos perdidos de tu historia personal.";
            } else if (consulta.includes('sierra') || consulta.includes('corazón') || consulta.includes('misión')) {
                r = "La Sierra Nevada es el Corazón del Mundo. Los hermanos mayores (Kogui/Arhuaco) nos enseñan a ordenar el pensamiento. Ideal si buscas dirección y claridad en tu propósito de vida.";
            } else if (consulta.includes('pacifico') || consulta.includes('ballena') || consulta.includes('linaje')) {
                r = "En el Pacífico, el mar y la selva se abrazan. Las ballenas Yubarta vienen a parir, igual que tú vendrás a sanar tu linaje familiar y soltar lo que ya no te pertenece.";
            } else if (consulta.includes('putumayo') || consulta.includes('jaguar') || consulta.includes('alquimia')) {
                r = "Putumayo es Alquimia Pura. El territorio del Jaguar te exige presencia absoluta. Es para quienes están listos para una transformación profunda y sin máscaras.";
            } else if (consulta.includes('guatavita') || consulta.includes('muisca') || consulta.includes('oro')) {
                r = "Guatavita es el vientre de Bachué. Aquí el 'Dorado' no es metal, es la luz de tu alma. Perfecto para cierres de ciclo y nuevos comienzos conscientes.";
            }

            // --- 2. SABIDURÍA LOGÍSTICA Y BIENESTAR ---
            else if (consulta.includes('comer') || consulta.includes('comida') || consulta.includes('alimentación')) {
                r = "Comerás la medicina de la tierra: frutos selváticos, preparaciones ancestrales y alimentos orgánicos de las comunidades. Alimentamos el cuerpo para que el alma pueda viajar.";
            } else if (consulta.includes('precio') || consulta.includes('cuanto cuesta') || consulta.includes('valor')) {
                r = "Nuestros viajes son inversiones en tu ser. Los precios varían según el territorio y la profundidad del proceso (aprox. 3.5 a 5.5 millones). Cada peso apoya la autonomía de las comunidades guardianas.";
            } else if (consulta.includes('yoga') || consulta.includes('meditacion') || consulta.includes('espiritual')) {
                r = "Toda la ruta es una meditación en movimiento. Practicamos la conexión consciente y el silencio. Si buscas un retiro de yoga específico, el Macizo es tu lugar sagrado.";
            } else if (consulta.includes('seguridad') || consulta.includes('miedo') || consulta.includes('peligro')) {
                r = "La tierra te cuida. Viajamos bajo la protección de las asociaciones indígenas y contamos con seguro médico integral. Estás en manos de los guardianes del territorio.";
            } else if (consulta.includes('vacuna') || consulta.includes('fiebre')) {
                r = "La rana te recuerda: Para el Amazonas y Putumayo, la vacuna de Fiebre Amarilla es obligatoria 10 días antes. ¡Ecodestinos te otorga seguro médico integral en todo el viaje!";
            } else if (consulta.includes('seguro') || consulta.includes('medico') || consulta.includes('asistencia')) {
                r = "¡No temas! Cada paso en el territorio está cubierto. Nuestra agencia te brinda un seguro médico integral y atención personalizada de la comunidad.";
            } else if (consulta.includes('ropa') || consulta.includes('llevar') || consulta.includes('maleta')) {
                r = "Lleva ropa de secado rápido, manga larga para mosquitos, botas cómodas, repelente y tus medicamentos personales. ¡La selva te espera preparado!";
            } else if (consulta.includes('wifi') || consulta.includes('internet') || consulta.includes('conexión')) {
                r = "La rana prefiere el agua al Wi-Fi. Solo habrá conexión en los hoteles; en el territorio profundo, la conexión es directa con la tierra y tu corazón. 🌿";
            } else if (consulta.includes('quien eres') || consulta.includes('que haces')) {
                r = "Soy el pulso de Ecodestinos. Mi canto te guía hacia el territorio que tu energía necesita hoy. Soy el puente entre tu latido y el de la tierra.";
            }

            // --- 3. RESPUESTA POR DEFECTO (SIEMPRE AL FINAL) ---
            else {
                r = "Mis oídos de rana están atentos, pero esa palabra no la reconozco aún. Pregúntame sobre territorios, vacunas, qué llevar o el sentido espiritual de tu viaje.";
            }

            // --- 4. CIERRE LÓGICO (CADA 3 MENSAJES) ---
            if (nuevoContador % 3 === 0) {
                r += `\n\n✨ Escucho tu vibración, ${nombre || 'viajero'}... Si mi canto no es suficiente, presiona abajo para hablar con los guardianes humanos.`;
            }

            setMensajes(prev => [...prev, { rol: 'asistente', texto: r }]);
        }, 900);
    };

    return (
        <div className="agente-flotante-container">
            {isOpen && (
                <div className="ventana-chat-agente fade-in">
                    <div style={{ background: '#2E472D', color: 'white', padding: '15px', display: 'flex', justifyContent: 'space-between', borderRadius: '15px 15px 0 0' }}>
                        <span className="nombre-rana">La Rana</span>
                        <button onClick={() => setIsOpen(false)} style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer', fontSize: '20px' }}>×</button>
                    </div>

                    <div ref={scrollRef} style={{ flexGrow: 1, padding: '15px', overflowY: 'auto', fontSize: '14px', background: '#F4F1EA', height: '350px' }}>
                        {mensajes.map((m, i) => (
                            <div key={i} style={{ textAlign: m.rol === 'usuario' ? 'right' : 'left', marginBottom: '12px' }}>
                                <div style={{
                                    background: m.rol === 'usuario' ? '#2E472D' : '#E0E7DA',
                                    color: m.rol === 'usuario' ? 'white' : '#1A2E1A',
                                    padding: '10px 14px', borderRadius: '15px', display: 'inline-block',
                                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                                    lineHeight: '1.4'
                                }}>
                                    {m.texto}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div style={{ padding: '12px', background: 'white', borderTop: '1px solid #ddd' }}>
                        <form onSubmit={manejarEnvio} style={{ display: 'flex', marginBottom: '8px' }}>
                            <input
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Háblale a la rana..."
                                style={{ flexGrow: 1, border: 'none', outline: 'none', fontSize: '14px' }}
                            />
                            <button type="submit" style={{ border: 'none', background: 'none', cursor: 'pointer', fontSize: '18px' }}>🐸</button>
                        </form>
                        <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" style={{ fontSize: '11px', color: '#2E472D', textDecoration: 'none', display: 'block', textAlign: 'center', fontWeight: 'bold' }}>
                            📲 ¿Dudas sobre el viaje? WhatsApp Directo
                        </a>
                    </div>
                </div>
            )}

            <div className={`burbuja-agente ${isOpen ? 'oculta' : ''}`} onClick={() => setIsOpen(!isOpen)}>
                <img src="/assets/agente.png" alt="La Rana" />
            </div>
        </div>
    );
}