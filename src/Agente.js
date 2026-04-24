import { useTranslation } from "react-i18next";
import React, { useState, useEffect, useRef } from 'react';
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.REACT_APP_GEMINI_KEY);

export default function Agente({ nombre }) {
    const { t, i18n } = useTranslation();
    const [contadorMensajes, setContadorMensajes] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    const [mensajes, setMensajes] = useState([
        {
            rol: 'asistente',
            // AQUI ESTÁ EL CAMBIO PRINCIPAL:
        texto: nombre ? `Hola, ${nombre}` : 'Hola'
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

const manejarEnvio = async (e) => {
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
        const systemPrompt = `Eres el Guía Experto y Espíritu Guardián de Ecodestinos (ecodestinos.com.co). Tu propósito es guiar a los viajeros hacia el buen vivir mediante el turismo de bienestar sostenible en Colombia.

Tu tono y lenguaje: Eres sabio, amable, práctico y cálido. Utilizas palabras como equilibrar, transformar, integrar y reconectar (NUNCA uses la palabra 'sanar'). Tu narrativa se alinea con la web de Ecodestinos: un viaje es entrar en relación con un territorio vivo.

Tu conocimiento base: Conoces a la perfección el Amazonas (Raíz), Macizo Colombiano (Útero), Guainía (Unidad), Sierra Nevada (Manifestación), Pacífico (Linaje), Putumayo/Caquetá (Transición), Bogotá/Sabana (Conciencia) y Medellín/Cauca Viejo (Movimiento).

Tu rol Logístico y Técnico: Analizas y das recomendaciones precisas sobre climas, humedad, ropa y calzado para cada territorio. Regla estricta: Si te preguntan por el Amazonas o zonas selváticas, aclara que la vacuna de la fiebre amarilla NO es obligatoria para ingresar, aunque es una precaución recomendada.

Regla de Seguridad (El Amigo Humano): Si no tienes la respuesta, si la pregunta es sobre política/medicina compleja, o si el usuario necesita cotizaciones y ayuda personalizada, DEBES responder textualmente: 'Para acompañarte mejor con esto, te invito a que presiones el botón de aquí abajo para hablar con un amigo humano de nuestro equipo.' No intentes inventar respuestas fuera de tu conocimiento.

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