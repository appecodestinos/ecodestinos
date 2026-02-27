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
                r = t('agente.macizo');
            } else if (consulta.includes('amazonas') || consulta.includes('selva') || consulta.includes('raíz')) {
                r = t('agente.amazonas');
            } else if (consulta.includes('guainia') || consulta.includes('mavecure') || consulta.includes('tulpa')) {
                r = t('agente.guainia');
            } else if (consulta.includes('sierra') || consulta.includes('corazón') || consulta.includes('misión')) {
                r = t('agente.sierra');
            } else if (consulta.includes('pacifico') || consulta.includes('ballena') || consulta.includes('linaje')) {
                r = t('agente.pacifico');
            } else if (consulta.includes('putumayo') || consulta.includes('jaguar') || consulta.includes('alquimia')) {
                r = t('agente.putumayo');
            } else if (consulta.includes('guatavita') || consulta.includes('muisca') || consulta.includes('oro')) {
                r = t('agente.guatavita');
            }

            // --- 2. SABIDURÍA LOGÍSTICA Y BIENESTAR ---
            else if (consulta.includes('comer') || consulta.includes('comida') || consulta.includes('alimentación')) {
                r = t('agente.comida');
            } else if (consulta.includes('precio') || consulta.includes('cuanto cuesta') || consulta.includes('valor')) {
                r = t('agente.precio');
            } else if (consulta.includes('yoga') || consulta.includes('meditacion') || consulta.includes('espiritual')) {
                r = t('agente.yoga');
            } else if (consulta.includes('seguridad') || consulta.includes('miedo') || consulta.includes('peligro')) {
                r = t('agente.seguridad');
            } else if (consulta.includes('vacuna') || consulta.includes('fiebre')) {
                r = t('agente.vacuna');
            } else if (consulta.includes('seguro') || consulta.includes('medico') || consulta.includes('asistencia')) {
                r = t('agente.seguro');
            } else if (consulta.includes('ropa') || consulta.includes('llevar') || consulta.includes('maleta')) {
                r = t('agente.ropa');
            } else if (consulta.includes('wifi') || consulta.includes('internet') || consulta.includes('conexión')) {
                r = t('agente.wifi');
            } else if (consulta.includes('quien eres') || consulta.includes('que haces')) {
                r = t('agente.quien');
            }

            // --- 3. RESPUESTA POR DEFECTO (SIEMPRE AL FINAL) ---
            else {
                r = t('agente.default');
            }

            // --- 4. CIERRE LÓGICO (CADA 3 MENSAJES) ---
            if (nuevoContador % 3 === 0) {
                r += t('agente.cierre', { nombre: nombre || 'viajero' });
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