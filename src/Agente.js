import { useTranslation } from "react-i18next";
import React, { useState, useEffect, useRef } from 'react';
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.REACT_APP_GEMINI_KEY);

const mensajesWhatsApp = {
  amazonas: "¡Hola! Estaba hablando con La Rana y siento el llamado del Amazonas. Me gustaría diseñar mi viaje para encontrar arraigo y silencio profundo.",
  macizo: "¡Hola! Estaba hablando con La Rana y siento el llamado del Macizo Colombiano. Me gustaría diseñar mi viaje para mi proceso de transición y transformación.",
  guainia: "¡Hola! Estaba hablando con La Rana y siento el llamado de Guainía. Me gustaría diseñar mi viaje para conectar con la armonía y el equilibrio.",
  sierranevada: "¡Hola! Estaba hablando con La Rana y siento el llamado de la Sierra Nevada. Me gustaría diseñar mi viaje para activar mi propósito y encontrar dirección.",
  pacifico: "¡Hola! Estaba hablando con La Rana y siento el llamado del Pacífico. Me gustaría diseñar mi viaje para reconectar con mi historia y escuchar mis emociones.",
  putumayo: "¡Hola! Estaba hablando con La Rana y siento el llamado del Putumayo. Me gustaría diseñar mi viaje para asimilar y buscar profundidad en mi camino.",
  bogota: "¡Hola! Estaba hablando con La Rana y siento el llamado de la Sabana. Me gustaría diseñar mi viaje para encontrar claridad mental y organizar lo vivido.",
  medellin: "¡Hola! Estaba hablando con La Rana y siento el llamado de Medellín. Me gustaría diseñar mi viaje para activar mi energía, crear y expandirme.",
  salud: "¡Hola! Estaba hablando con La Rana y quiero consultar con un asesor sobre temas de salud, vacunas o equipaje para mi próximo viaje.",
  general: "¡Hola! Quiero información sobre los Territorios Vivos."
};

const generarLinkWpp = (clave) => {
  const numero = "573156074044"; // Número de Ecodestinos
  const mensaje = mensajesWhatsApp[clave] || mensajesWhatsApp.general;
  return `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
};

export default function Agente({ nombre }) {
    const { t, i18n } = useTranslation();
    const [contadorMensajes, setContadorMensajes] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    const [mensajes, setMensajes] = useState([
        {
            rol: 'asistente',
            texto: nombre ? t('agente.rana_saludo', { nombre }) : t('agente.rana_saludo_anon')
        },
        { rol: 'asistente', tipo: 'menu' }
    ]);
    const [nivelEmbudo, setNivelEmbudo] = useState('inicio');
const [input, setInput] = useState('');
const [isTyping, setIsTyping] = useState(false);
const scrollRef = useRef(null);

useEffect(() => {
    if (scrollRef.current) {
        scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
}, [mensajes, isOpen]);

const handleOptionClick = (opcionKey) => {
    const optionText = t(`agente.${opcionKey}`);
    setMensajes(prev => [...prev, { rol: 'usuario', texto: optionText }]);
    setIsTyping(true);

    if (opcionKey === 'menu_territorio') {
        setNivelEmbudo('seleccion_territorio_conocer');
        setTimeout(() => {
            setMensajes(prev => [...prev, { rol: 'asistente', tipo: 'menu_territorios_conocer' }]);
            setIsTyping(false);
        }, 800);
    } else if (opcionKey === 'menu_llevar') {
        setNivelEmbudo('seleccion_territorio_llevar');
        setTimeout(() => {
            setMensajes(prev => [
                ...prev,
                { rol: 'asistente', texto: t('agente.funnel.que_llevar_pregunta') },
                { rol: 'asistente', tipo: 'menu_territorios_llevar' }
            ]);
            setIsTyping(false);
        }, 800);
    } else if (opcionKey === 'menu_salud') {
        setNivelEmbudo('dudas_salud');
        setTimeout(() => {
            setMensajes(prev => [
                ...prev,
                { rol: 'asistente', texto: t('agente.funnel.salud_texto') },
                { rol: 'asistente', tipo: 'whatsapp_btn_custom', wppKey: 'salud', btnLabel: t('agente.funnel.btn_consultar_asesor') }
            ]);
            setIsTyping(false);
        }, 800);
    } else if (opcionKey === 'menu_asesor') {
        setTimeout(() => {
            setIsTyping(false);
            window.open(generarLinkWpp('general'), '_blank');
        }, 500);
    }
};

const handleTerritorioClick = (terrKey, context) => {
    const terrName = t(`agente.funnel.terr_${terrKey}`);
    setMensajes(prev => [...prev, { rol: 'usuario', texto: terrName }]);
    setIsTyping(true);
    
    if (context === 'conocer') {
        setTimeout(() => {
            // Mapeo especial para coincidir con las llaves antiguas en i18n
            const keyToUse = terrKey === 'sierranevada' ? 'sierra' : terrKey === 'bogota' ? 'guatavita' : terrKey;
            let desc = t(`agente.${keyToUse}`);
            if (desc === `agente.${keyToUse}`) desc = "Un territorio lleno de magia y sanación. Contáctanos para más detalles."; // Fallback
            
            setMensajes(prev => [
                ...prev,
                { rol: 'asistente', texto: desc },
                { rol: 'asistente', tipo: 'whatsapp_btn_custom', wppKey: terrKey, btnLabel: t('agente.funnel.btn_disenar_viaje') }
            ]);
            setIsTyping(false);
        }, 1000);
    } else if (context === 'llevar') {
        setTimeout(() => {
            const consejo = t('agente.funnel.que_llevar_consejo');
            setMensajes(prev => [
                ...prev,
                { rol: 'asistente', texto: consejo },
                { rol: 'asistente', tipo: 'whatsapp_btn_custom', wppKey: 'salud', btnLabel: t('agente.funnel.btn_consultar_asesor') }
            ]);
            setIsTyping(false);
        }, 1000);
    }
};

const handleVolverMenu = () => {
    setNivelEmbudo('inicio');
    setMensajes(prev => [...prev, { rol: 'asistente', tipo: 'menu' }]);
};

const manejarEnvio = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = { rol: 'usuario', texto: input };
    setMensajes(prev => [...prev, userMsg]);
    const consulta = input.toLowerCase().trim();
    const nuevoContador = contadorMensajes + 1;
    setContadorMensajes(nuevoContador);
    setInput('');

    if (['hola', 'hi', 'bonjour', 'hallo', 'buenas', 'saludos'].some(s => consulta === s || consulta.startsWith(s + ' '))) {
        setIsTyping(true);
        setTimeout(() => {
            setMensajes(prev => [
                ...prev,
                { rol: 'asistente', texto: nombre ? t('agente.rana_saludo', { nombre }) : t('agente.rana_saludo_anon') },
                { rol: 'asistente', tipo: 'menu' }
            ]);
            setIsTyping(false);
        }, 800);
        return;
    }

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
            <div className={`ventana-chat-agente fade-in embudo-${nivelEmbudo}`}>
                <div style={{ background: '#2E472D', color: 'white', padding: '15px', display: 'flex', justifyContent: 'space-between', borderRadius: '15px 15px 0 0' }}>
                    <span className="nombre-rana">{t('agente.rana_nombre')}</span>
                    <button onClick={() => setIsOpen(false)} style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer', fontSize: '20px' }}>×</button>
                </div>

                <div ref={scrollRef} style={{ flexGrow: 1, padding: '15px', overflowY: 'auto', fontSize: '14px', background: '#F4F1EA', height: '350px' }}>
                    {mensajes.map((m, i) => (
                        <div key={i} style={{ textAlign: m.rol === 'usuario' ? 'right' : 'left', marginBottom: '12px' }}>
                            <div style={{
                                background: m.rol === 'usuario' ? '#2E472D' : (m.tipo === 'menu' ? 'transparent' : '#E0E7DA'),
                                color: m.rol === 'usuario' ? 'white' : '#1A2E1A',
                                padding: m.tipo === 'menu' ? '0' : '10px 14px',
                                borderRadius: '15px', display: 'inline-block',
                                boxShadow: m.tipo === 'menu' ? 'none' : '0 2px 4px rgba(0,0,0,0.1)',
                                lineHeight: '1.4'
                            }}>
                                {m.tipo === 'menu' ? (
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '5px' }}>
                                        {['menu_territorio', 'menu_llevar', 'menu_salud', 'menu_asesor'].map(opt => (
                                            <button key={opt} onClick={() => handleOptionClick(opt)} style={{
                                                background: '#2E472D', color: 'white', border: 'none', padding: '8px 12px', borderRadius: '10px', cursor: 'pointer', textAlign: 'left', fontSize: '13px'
                                            }}>
                                                {t(`agente.${opt}`)}
                                            </button>
                                        ))}
                                    </div>
                                ) : m.tipo === 'menu_territorios_conocer' || m.tipo === 'menu_territorios_llevar' ? (
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '5px' }}>
                                        {['amazonas', 'macizo', 'guainia', 'sierranevada', 'pacifico', 'putumayo', 'bogota', 'medellin'].map(terr => (
                                            <button key={terr} onClick={() => handleTerritorioClick(terr, m.tipo === 'menu_territorios_conocer' ? 'conocer' : 'llevar')} style={{
                                                background: '#4CAF50', color: 'white', border: 'none', padding: '8px 12px', borderRadius: '10px', cursor: 'pointer', textAlign: 'left', fontSize: '13px'
                                            }}>
                                                {t(`agente.funnel.terr_${terr}`)}
                                            </button>
                                        ))}
                                        <button onClick={handleVolverMenu} style={{ background: '#777', color: 'white', border: 'none', padding: '8px 12px', borderRadius: '10px', cursor: 'pointer', textAlign: 'left', fontSize: '13px', marginTop: '5px' }}>
                                            {t('agente.funnel.btn_volver')}
                                        </button>
                                    </div>
                                ) : m.tipo === 'whatsapp_btn_custom' ? (
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '5px' }}>
                                        <a href={generarLinkWpp(m.wppKey)} target="_blank" rel="noopener noreferrer" style={{
                                            display: 'inline-block', padding: '10px 16px', background: '#25D366', color: 'white', borderRadius: '20px', textDecoration: 'none', fontWeight: 'bold', fontSize: '13px'
                                        }}>
                                            {m.btnLabel} 🐸
                                        </a>
                                        <button onClick={handleVolverMenu} style={{ background: '#777', color: 'white', border: 'none', padding: '8px 12px', borderRadius: '10px', cursor: 'pointer', textAlign: 'left', fontSize: '13px' }}>
                                            {t('agente.funnel.btn_volver')}
                                        </button>
                                    </div>
                                ) : m.tipo === 'whatsapp_btn' ? (
                                    <a href={generarLinkWpp('general')} target="_blank" rel="noopener noreferrer" style={{
                                        display: 'inline-block', padding: '10px 16px', background: '#25D366', color: 'white', borderRadius: '20px', textDecoration: 'none', fontWeight: 'bold', fontSize: '13px'
                                    }}>
                                        {t('agente.btn_whatsapp')} 🐸
                                    </a>
                                ) : (
                                    m.texto
                                )}
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
                    <a href={generarLinkWpp('general')} target="_blank" rel="noopener noreferrer" style={{ fontSize: '11px', color: '#2E472D', textDecoration: 'none', display: 'block', textAlign: 'center', fontWeight: 'bold' }}>
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