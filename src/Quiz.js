import { useTranslation } from "react-i18next";
import React, { useState } from 'react';

// Ahora cada opción [0, 1, 2, 3] otorga puntos a 2 destinos simultáneamente.
// 4 opciones x 2 destinos = 8 destinos evaluados en TODAS las preguntas.
const MAPEO_PREGUNTAS = [
    // Q0: Sentimiento
    [['Putumayo', 'Macizo'], ['Antioquia', 'SierraNevada'], ['Amazonas', 'Pacífico'], ['Guainia', 'SabanaDeBogota']],
    // Q1: Necesidad de la naturaleza
    [['Amazonas', 'Guainia'], ['Pacífico', 'Putumayo'], ['SabanaDeBogota', 'Macizo'], ['SierraNevada', 'Antioquia']],
    // Q2: Paisaje
    [['Amazonas', 'SierraNevada'], ['Pacífico', 'Guainia'], ['Macizo', 'Putumayo'], ['Antioquia', 'SabanaDeBogota']],
    // Q3: Ritmo de viaje
    [['Guainia', 'Macizo'], ['Antioquia', 'SabanaDeBogota'], ['Amazonas', 'Putumayo'], ['SierraNevada', 'Pacífico']],
    // Q4: Activar en ti
    [['Amazonas', 'Antioquia'], ['Guainia', 'SierraNevada'], ['Putumayo', 'Pacífico'], ['SabanaDeBogota', 'Macizo']],
    // Q5: Tipo de bienestar
    [['SierraNevada', 'SabanaDeBogota'], ['Putumayo', 'Macizo'], ['Amazonas', 'Guainia'], ['Pacífico', 'Antioquia']],
    // Q6: Formato de viaje
    [['SierraNevada', 'Pacífico'], ['Amazonas', 'Macizo'], ['Guainia', 'Antioquia'], ['Putumayo', 'SabanaDeBogota']]
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
                const puntajes = {
                    Amazonas: 0,
                    Macizo: 0,
                    Guainia: 0,
                    SierraNevada: 0,
                    Pacífico: 0,
                    Putumayo: 0,
                    SabanaDeBogota: 0,
                    Antioquia: 0
                };

                // Recorremos las respuestas y sumamos puntos a AMBOS territorios asignados a la opción
                nuevasRespuestas.forEach((idxSeleccion, indicePregunta) => {
                    if (idxSeleccion !== null) {
                        const territoriosAsignados = MAPEO_PREGUNTAS[indicePregunta][idxSeleccion];
                        if (Array.isArray(territoriosAsignados)) {
                            territoriosAsignados.forEach((territorio) => {
                                if (puntajes[territorio] !== undefined) {
                                    puntajes[territorio] += 1;
                                }
                            });
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