import { useTranslation } from "react-i18next";
import React, { useState, useEffect, useRef } from 'react';
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.REACT_APP_GEMINI_API_KEY);

export default function Agente({ nombre }) {
    const { t, i18n } = useTranslation();
    const [contadorMensajes, setContadorMensajes] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    const [mensajes, setMensajes] = useState([
        {
            rol: 'asistente',
            // AQUI ESTÁ EL CAMBIO PRINCIPAL:
            texto: nombre ? t('agente.welcome', { nombre }) : t('agente.welcome_anon')
        }
    ]);
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
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

        setIsTyping(true);

        try {
            const systemPrompt = `Identidad: 'Eres el Guardián de los Territorios Vivos de Ecodestinos. Tu misión es guiar a los viajeros hacia el buen vivir. Eres sabio, cálido y hablas en primera persona del plural (nosotros).'

Vocabulario: Nunca uses la palabra 'sanar'. Usa siempre: 'equilibrar', 'transformar' e 'integrar'.

Conocimiento: Solo conoces 8 territorios: Amazonas (Raíz), Macizo (Gestación), Guainía (Integración), Sierra Nevada (Propósito), Pacífico (Emoción), Putumayo (Transición), Bogotá (Conciencia) y Medellín (Acción).

Regla de Bloqueo (CRÍTICA): Si el usuario saluda, devuélvele el saludo amablemente e invítalo a hacer el Quiz o explorar el mapa. Si el usuario pregunta sobre medicina, política, vacunas, clima, o cualquier cosa ajena a Ecodestinos y el turismo de bienestar, DEBES responder textualmente: 'Mi sabiduría pertenece a la tierra y a los viajes con propósito. Para todo lo demás, el viento guarda las respuestas. ¿Te gustaría saber qué territorio resuena con tu momento de vida hoy?'

${nombre ? `Trata al usuario por su nombre: "${nombre}".` : "El usuario no ha proporcionado su nombre."}
IMPORTANTE: El usuario está navegando la app en el idioma [${i18n.language}]. Debes responder EXCLUSIVAMENTE en este idioma.`;

            const model = genAI.getGenerativeModel({
                model: "gemini-1.5-flash",
                systemInstruction: systemPrompt
            });

            const history = mensajes.map(m => ({
                role: m.rol === 'usuario' ? 'user' : 'model',
                parts: [{ text: m.texto }]
            }));

            const chat = model.startChat({ history });
            const result = await chat.sendMessage(input);
            const respuestaIA = result.response.text();

            let r = respuestaIA;

            // --- CIERRE LÓGICO (CADA 3 MENSAJES) ---
            if (nuevoContador % 3 === 0) {
                r += "\n\n" + (nombre ? t('agente.cierre', { nombre }) : t('agente.cierre_anon'));
            }

            setMensajes(prev => [...prev, { rol: 'asistente', texto: r }]);
        } catch (error) {
            console.error("Error contactando a Gemini:", error);
            setMensajes(prev => [...prev, { rol: 'asistente', texto: t('agente.default') }]);
        } finally {
            setIsTyping(false);
        }
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
                        {isTyping && (
                            <div style={{ textAlign: 'left', marginBottom: '12px' }}>
                                <div style={{
                                    background: '#E0E7DA',
                                    color: '#1A2E1A',
                                    padding: '10px 14px', borderRadius: '15px', display: 'inline-block',
                                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                                    lineHeight: '1.4',
                                    fontStyle: 'italic'
                                }}>
                                    Escribiendo...
                                </div>
                            </div>
                        )}
                    </div>

                    <div style={{ padding: '12px', background: 'white', borderTop: '1px solid #ddd' }}>
                        <form onSubmit={manejarEnvio} style={{ display: 'flex', marginBottom: '8px' }}>
                            <input
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder={t('agente.placeholder')}
                                style={{ flexGrow: 1, border: 'none', outline: 'none', fontSize: '14px' }}
                            />
                            <button type="submit" style={{ border: 'none', background: 'none', cursor: 'pointer', fontSize: '18px' }}>🐸</button>
                        </form>
                        <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" style={{ fontSize: '11px', color: '#2E472D', textDecoration: 'none', display: 'block', textAlign: 'center', fontWeight: 'bold' }}>
                            {t('agente.whatsapp')}
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