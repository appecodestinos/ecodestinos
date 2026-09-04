import { useTranslation } from "react-i18next";
import React, { useState } from 'react';

const MAPEO_PREGUNTAS = [
    // Q0: Sentimiento -> Putumayo, Macizo, Antioquia, SierraNevada
    ['Putumayo', 'Macizo', 'Antioquia', 'SierraNevada'], 
    // Q1: Necesidad de la naturaleza -> Amazonas, Pacífico, Putumayo, SabanaDeBogota
    ['Amazonas', 'Pacífico', 'Putumayo', 'SabanaDeBogota'],
    // Q2: Paisaje -> Amazonas, SierraNevada, Pacífico, Guainia
    ['Amazonas', 'SierraNevada', 'Pacífico', 'Guainia'],
    // Q3: Ritmo de viaje -> Guainia, Macizo, Antioquia, SabanaDeBogota
    ['Guainia', 'Macizo', 'Antioquia', 'SabanaDeBogota'],
    // Q4: Activar en ti -> Amazonas, Antioquia, Guainia, SierraNevada
    ['Amazonas', 'Antioquia', 'Guainia', 'SierraNevada'],
    // Q5: Tipo de bienestar -> SierraNevada, SabanaDeBogota, Putumayo, Macizo
    ['SierraNevada', 'SabanaDeBogota', 'Putumayo', 'Macizo'],
    // Q6: Formato de viaje -> SierraNevada, Pacífico, Amazonas, Macizo
    ['SierraNevada', 'Pacífico', 'Amazonas', 'Macizo']
];

const COLORES_VIBRATORIOS = [
    '#003333',
    '#550D00',
    '#003A21',
    '#003333',
    '#550D00',
    '#003A21',
    '#003333'
];

const Quiz = ({ alTerminar }) => {
    const { t } = useTranslation();
    const [paso, setPaso] = useState(0);
    const [respuestas, setRespuestas] = useState(Array(7).fill(null));

    const colorActual = COLORES_VIBRATORIOS[paso];

    const responder = (idx) => {
        const nuevasRespuestas = [...respuestas];
        nuevasRespuestas[paso] = idx;
        setRespuestas(nuevasRespuestas);

        setTimeout(() => {
            if (paso < 6) {
                setPaso(paso + 1);
            } else {
                const puntajes = { Amazonas: 0, Macizo: 0, Guainia: 0, SierraNevada: 0, Pacífico: 0, Putumayo: 0, SabanaDeBogota: 0, Antioquia: 0 };
                nuevasRespuestas.forEach((idxSeleccion, indicePregunta) => {
                    if (idxSeleccion !== null) {
                        const territorio = MAPEO_PREGUNTAS[indicePregunta][idxSeleccion];
                        if (territorio) {
                            puntajes[territorio] = (puntajes[territorio] || 0) + 1;
                        }
                    }
                });
                const ordenados = Object.entries(puntajes).sort((a, b) => b[1] - a[1]);
                alTerminar([ordenados[0][0], ordenados[1][0]]);
            }
        }, 300);
    };

    return (
        <div className="quiz-contenedor fade-in" style={{
            background: "linear-gradient(rgba(15, 38, 25, 0.3), rgba(15, 38, 25, 0.7)), url('/assets/fondo-app-quiz.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "100vh"
        }}>
            <div className="quiz-tarjeta">
                <p className="quiz-progreso" style={{ color: colorActual, opacity: 0.85, fontSize: '13px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '12px' }}>
                    {t('quiz.progress', { current: paso + 1 })}
                </p>

                <h2 className="quiz-pregunta">
                    {t(`quiz.q${paso}.question`)}
                </h2>

                <div className="quiz-opciones">
                    {[0, 1, 2, 3].map((index) => (
                        <button
                            key={index}
                            className={`quiz-boton-opcion ${respuestas[paso] === index ? 'selected' : ''}`}
                            onClick={() => responder(index)}
                        >
                            {t(`quiz.q${paso}.opt${index}`)}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Quiz;