import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from "react-i18next";
import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebase"; // Asume que db está exportado correctamente desde firebase.js

// Mapeo de idiomas de i18next a códigos de SpeechRecognition
const getSpeechLang = (i18nLang) => {
    switch (i18nLang) {
        case 'en': return 'en-US';
        case 'de': return 'de-DE';
        case 'fr': return 'fr-FR';
        case 'es':
        default: return 'es-ES';
    }
};

export default function MiRuta() {
    const { t, i18n } = useTranslation();
    const [textoTranscrito, setTextoTranscrito] = useState("");
    const [isRecording, setIsRecording] = useState(false);
    const [saveStatus, setSaveStatus] = useState(""); // 'saving', 'success', 'error'
    const recognitionRef = useRef(null);

    // ESTADOS PARA RASTREO GPS NATIVO
    const [isTracking, setIsTracking] = useState(false);
    const [rutaCoords, setRutaCoords] = useState([]);
    const watchIdRef = useRef(null);

    // Inicializar SpeechRecognition en el montaje del componente
    useEffect(() => {
        // Compatibilidad con navegadores que prefijan webkit
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (SpeechRecognition) {
            recognitionRef.current = new SpeechRecognition();
            recognitionRef.current.continuous = true;
            recognitionRef.current.interimResults = true;

            recognitionRef.current.onresult = (event) => {
                let currentTranscript = "";
                for (let i = event.resultIndex; i < event.results.length; i++) {
                    const transcript = event.results[i][0].transcript;
                    if (event.results[i].isFinal) {
                        currentTranscript += transcript + " ";
                    } else {
                        currentTranscript += transcript;
                    }
                }

                // Actualizar el estado del texto inyectando la transcripción continua
                // Usamos una función pasándole el estado previo para concatenar sin perder texto
                setTextoTranscrito(prev => prev + currentTranscript);
            };

            recognitionRef.current.onerror = (event) => {
                console.error("SpeechRecognition error: ", event.error);
                setIsRecording(false);
            };

            recognitionRef.current.onend = () => {
                // Si el usuario no paró manualmente la grabación pero el API lo hizo (timeout, etc)
                setIsRecording(false);
            };
        } else {
            console.warn("Speech Recognition API not supported in this browser.");
        }
    }, []);

    // Actualizar el idioma del reconocimiento si el usuario cambia el idioma de la app
    useEffect(() => {
        if (recognitionRef.current) {
            recognitionRef.current.lang = getSpeechLang(i18n.language);
            // Si estaba grabando, se debe detener para que el cambio de idioma tome efecto
            if (isRecording) {
                recognitionRef.current.stop();
                setIsRecording(false);
            }
        }
    }, [i18n.language, isRecording]);

    const toggleRecording = () => {
        if (!recognitionRef.current) {
            alert(t('miruta.record_not_supported') || "Transcripción por voz no soportada en tu navegador.");
            return;
        }

        if (isRecording) {
            recognitionRef.current.stop();
            setIsRecording(false);
        } else {
            // Asegurar que guardamos espacio visual o separamos si ya hay texto
            if (textoTranscrito.length > 0 && !textoTranscrito.endsWith(" ")) {
                setTextoTranscrito(prev => prev + " ");
            }
            recognitionRef.current.start();
            setIsRecording(true);
            setSaveStatus(""); // Limpiar estado de guardado anterior al empezar a grabar
        }
    };

    // FUNCIONES DE RASTREO GPS
    const toggleTracking = () => {
        if (!navigator.geolocation) {
            alert("Tu navegador no soporta geolocalización.");
            return;
        }

        if (isTracking) {
            // Detener rastreo
            if (watchIdRef.current !== null) {
                navigator.geolocation.clearWatch(watchIdRef.current);
                watchIdRef.current = null;
            }
            setIsTracking(false);
        } else {
            // Iniciar rastreo
            setIsTracking(true);
            setSaveStatus(""); // Limpiar estado de guardado
            watchIdRef.current = navigator.geolocation.watchPosition(
                (position) => {
                    const newPoint = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                        acc: position.coords.accuracy,
                        timestamp: position.timestamp
                    };
                    setRutaCoords(prev => [...prev, newPoint]);
                },
                (error) => {
                    console.error("Error obteniendo ubicación:", error);
                    alert("No pudimos acceder a tu ubicación. Verifica los permisos de tu dispositivo.");
                    setIsTracking(false);
                },
                {
                    enableHighAccuracy: true,
                    timeout: 10000,
                    maximumAge: 5000
                }
            );
        }
    };

    // Limpiar el watcher al desmontar
    useEffect(() => {
        return () => {
            if (watchIdRef.current !== null) {
                navigator.geolocation.clearWatch(watchIdRef.current);
            }
        };
    }, []);

    const handleTextChange = (e) => {
        setTextoTranscrito(e.target.value);
    };

    const guardarBitacoraFirestore = async () => {
        if (!textoTranscrito.trim()) return; // No guardar vacíos

        // Si está grabando, detener primero
        if (isRecording && recognitionRef.current) {
            recognitionRef.current.stop();
            setIsRecording(false);
        }

        setSaveStatus("saving");
        try {
            await addDoc(collection(db, "bitacoras_texto"), {
                texto: textoTranscrito,
                idioma: i18n.language,
                timestamp: new Date(),
                ruta_gps: rutaCoords // Enviar el vector de rastreo GPS guardado
            });
            setSaveStatus("success");

            // Opcional: Limpiar el tracker tras enviar
            // setRutaCoords([]);

            // Ocultar mensaje de éxito después de unos segundos
            setTimeout(() => setSaveStatus(""), 4000);
        } catch (error) {
            console.error("Error guardando bitácora: ", error);
            setSaveStatus("error");
            setTimeout(() => setSaveStatus(""), 4000);
        }
    };

    // Estilos extraídos
    const containerStyle = {
        padding: '30px',
        maxWidth: '800px',
        margin: '0 auto'
    };

    const textAreaStyle = {
        width: '100%',
        minHeight: '200px',
        padding: '15px',
        borderRadius: '12px',
        border: '1px solid #8B4513',
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        fontSize: '1.1rem',
        color: '#3a2e28',
        boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.05)',
        resize: 'vertical',
        marginBottom: '20px'
    };

    const buttonRowStyle = {
        display: 'flex',
        justifyContent: 'center',
        gap: '20px',
        flexWrap: 'wrap'
    };

    const recordBtnStyle = {
        padding: '12px 24px',
        borderRadius: '25px',
        border: 'none',
        backgroundColor: isRecording ? '#dc3545' : '#28a745',
        color: '#fff',
        cursor: 'pointer',
        fontFamily: "'Montserrat', sans-serif",
        fontSize: '1rem',
        fontWeight: '600',
        letterSpacing: '0.5px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
        transition: 'background-color 0.3s'
    };

    const trackBtnStyle = {
        padding: '12px 24px',
        borderRadius: '25px',
        border: 'none',
        backgroundColor: isTracking ? '#007bff' : '#6c757d',
        color: '#fff',
        cursor: 'pointer',
        fontFamily: "'Montserrat', sans-serif",
        fontSize: '1rem',
        fontWeight: '600',
        letterSpacing: '0.5px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
        transition: 'background-color 0.3s'
    };

    const saveBtnStyle = {
        padding: '12px 24px',
        borderRadius: '25px',
        border: 'none',
        backgroundColor: '#8B4513',
        color: '#fff',
        cursor: textoTranscrito.trim() === '' ? 'not-allowed' : 'pointer',
        opacity: textoTranscrito.trim() === '' ? 0.5 : 1,
        fontFamily: "'Montserrat', sans-serif",
        fontSize: '1rem',
        fontWeight: '600',
        letterSpacing: '0.5px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
    };

    return (
        <div style={containerStyle} className="fade-in">
            <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                <h1 style={{ color: '#2A3B2B', fontSize: '2.5rem' }}>{t('miruta.title')}</h1>
                <p style={{ color: '#5C4B3F', fontSize: '1.2rem', marginBottom: '20px' }}>{t('miruta.record_desc')}</p>

                {/* Botones de Tracking Offline  */}
                <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginBottom: '30px', flexWrap: 'wrap' }}>
                    <a href="https://maps.me" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                        <button className="boton-secundario">
                            {t('miruta.btn_offline')}
                        </button>
                    </a>

                    <button onClick={toggleTracking} style={trackBtnStyle}>
                        {isTracking ? t('miruta.btn_tracking', { count: rutaCoords.length }) : t('miruta.btn_start_tracking')}
                    </button>
                </div>
            </div>

            <div style={{ position: 'relative' }}>
                <textarea
                    style={textAreaStyle}
                    value={textoTranscrito}
                    onChange={handleTextChange}
                    placeholder={t('miruta.placeholder')}
                />
                {isRecording && (
                    <div style={{
                        position: 'absolute', top: '10px', right: '10px',
                        height: '15px', width: '15px', borderRadius: '50%',
                        backgroundColor: '#dc3545',
                        animation: 'pulse 1.5s infinite'
                    }} />
                )}
            </div>

            <div style={buttonRowStyle}>
                <button onClick={toggleRecording} style={recordBtnStyle}>
                    {isRecording ? t('miruta.btn_stop_record') : t('miruta.btn_start_record')}
                </button>

                <button
                    onClick={guardarBitacoraFirestore}
                    style={saveBtnStyle}
                    disabled={textoTranscrito.trim() === '' || saveStatus === 'saving'}
                >
                    ☁️ {saveStatus === 'saving' ? t('miruta.saving') : t('miruta.btn_save')}
                </button>
            </div>

            {/* Alertas Visuales */}
            {saveStatus === 'success' && (
                <div style={{ textAlign: 'center', marginTop: '20px', color: '#28a745', fontWeight: 'bold' }} className="fade-in">
                    {t('miruta.save_success')}
                </div>
            )}
            {saveStatus === 'error' && (
                <div style={{ textAlign: 'center', marginTop: '20px', color: '#dc3545', fontWeight: 'bold' }} className="fade-in">
                    {t('miruta.save_error')}
                </div>
            )}

            <style>
                {`
                @keyframes pulse {
                    0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(220, 53, 69, 0.7); }
                    70% { transform: scale(1); box-shadow: 0 0 0 10px rgba(220, 53, 69, 0); }
                    100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(220, 53, 69, 0); }
                }
                `}
            </style>
        </div>
    );
}