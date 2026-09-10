import { useTranslation } from "react-i18next";
import React, { useState } from 'react';

// Matriz perfecta: 1-factorización de K8 (28 pares únicos, cada destino 7 veces)
// Garantiza equilibrio matemático + sorteo ponderado (peso = 1 + puntos)
const MAPEO_PREGUNTAS = [
    [['Antioquia', 'Amazonas'], ['Macizo', 'SabanaDeBogota'], ['Guainia', 'Putumayo'], ['SierraNevada', 'Pacífico']],
    [['Antioquia', 'Macizo'], ['Guainia', 'Amazonas'], ['SierraNevada', 'SabanaDeBogota'], ['Pacífico', 'Putumayo']],
    [['Antioquia', 'Guainia'], ['SierraNevada', 'Macizo'], ['Pacífico', 'Amazonas'], ['Putumayo', 'SabanaDeBogota']],
    [['Antioquia', 'SierraNevada'], ['Pacífico', 'Guainia'], ['Putumayo', 'Macizo'], ['SabanaDeBogota', 'Amazonas']],
    [['Antioquia', 'Pacífico'], ['Putumayo', 'SierraNevada'], ['SabanaDeBogota', 'Guainia'], ['Amazonas', 'Macizo']],
    [['Antioquia', 'Putumayo'], ['SabanaDeBogota', 'Pacífico'], ['Amazonas', 'SierraNevada'], ['Macizo', 'Guainia']],
    [['Antioquia', 'SabanaDeBogota'], ['Amazonas', 'Putumayo'], ['Macizo', 'Pacífico'], ['Guainia', 'SierraNevada']]
];

const DESTINOS = ['Amazonas', 'Macizo', 'Guainia', 'SierraNevada', 'Pacífico', 'Putumayo', 'SabanaDeBogota', 'Antioquia'];

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
                const puntos = {};
                DESTINOS.forEach(d => puntos[d] = 0);

                nuevasRespuestas.forEach((idxSeleccion, indicePregunta) => {
                    if (idxSeleccion !== null) {
                        const pareja = MAPEO_PREGUNTAS[indicePregunta][idxSeleccion];
                        if (Array.isArray(pareja)) {
                            const elegido = pareja[Math.floor(Math.random() * pareja.length)];
                            if (puntos[elegido] !== undefined) {
                                puntos[elegido] += 1;
                            }
                        }
                    }
                });

                const items = DESTINOS.map(d => ({ d, peso: 1 + puntos[d] }));
                const resultados = [];
                for (let i = 0; i < 2; i++) {
                    const totalPeso = items.reduce((s, it) => s + it.peso, 0);
                    let r = Math.random() * totalPeso;
                    for (let j = 0; j < items.length; j++) {
                        r -= items[j].peso;
                        if (r <= 0) {
                            resultados.push(items[j].d);
                            items.splice(j, 1);
                            break;
                        }
                    }
                }
                alTerminar(resultados);
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