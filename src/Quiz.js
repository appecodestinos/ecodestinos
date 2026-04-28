import { useTranslation } from "react-i18next";
import React, { useState } from 'react';

// Mapeo original de territorios por cada opción (4 opciones por las 7 preguntas)
const MAPEO_PREGUNTAS = [
    // Q1: Sentimiento -> Agotamiento: Putumayo, Cambio: Macizo, Alegre: Amazonas, Equilibrio: Sierra
    ['Putumayo', 'Macizo', 'Amazonas', 'SierraNevada'], 
    // Q2: Necesidad -> Arraigo: Macizo, Armonía: Pacífico, Recuperación: Putumayo, Aire: Bogota
    ['Macizo', 'Pacífico', 'Putumayo', 'Bogota'],
    // Q3: Paisaje -> Tierra: Amazonas, Montaña: Sierra, Mar: Pacífico, Agua: Guainia
    ['Amazonas', 'SierraNevada', 'Pacífico', 'Guainia'],
    // Q4: Ritmo -> Tranquilo: Guainia, Equilibrado: Macizo, Activo: Medellin, Flexible: Amazonas
    ['Guainia', 'Macizo', 'Medellin', 'Amazonas'],
    // Q5: Activar -> Raíz: Macizo, Creación/Proyectos: Medellin, Corazón: Pacífico, Propósito: Sierra
    ['Macizo', 'Medellin', 'Pacífico', 'SierraNevada'],
    // Q6: Bienestar -> Caminatas: Sierra, Spa: Bogota, Ancestral: Putumayo, Manos: Medellin
    ['SierraNevada', 'Bogota', 'Putumayo', 'Medellin'],
    // Q7: Formato -> Solo: Sierra, Pareja: Pacífico, Familia: Amazonas, Grupo: Macizo
    ['SierraNevada', 'Pacífico', 'Amazonas', 'Macizo']
];

// 🎨 PALETA EXACTA SEGÚN TUS IMÁGENES (Rotamos estos 3 colores elegantes)
const COLORES_VIBRATORIOS = [
    '#003333', // 1. Verde Petróleo Profundo (Imagen 1)
    '#550D00', // 2. Rojo Tierra Sangre (Imagen 3)
    '#003A21', // 3. Verde Bosque Oscuro (Imagen 2)
    '#003333', // 4. Repite Petróleo
    '#550D00', // 5. Repite Rojo
    '#003A21', // 6. Repite Bosque
    '#003333', // 7. Repite Petróleo
    '#550D00', // 8. Repite Rojo
    '#003A21'  // 9. Repite Bosque
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
                const puntajes = { Amazonas: 0, Macizo: 0, Guainia: 0, SierraNevada: 0, Pacífico: 0, Putumayo: 0, Bogota: 0, Medellin: 0 };
                nuevasRespuestas.forEach((idxSeleccion, indicePregunta) => {
                    if (idxSeleccion !== null) {
                        const territorio = MAPEO_PREGUNTAS[indicePregunta][idxSeleccion];
                        puntajes[territorio]++;
                    }
                });
                const ordenados = Object.entries(puntajes).sort((a, b) => b[1] - a[1]);
                alTerminar([ordenados[0][0], ordenados[1][0]]);
            }
        }, 300);
    };

    return (
        // Fondo con un tinte muy suave (5% opacidad) del color actual para no cansar la vista
        <div className="quiz-contenedor fade-in" style={{ backgroundColor: `${colorActual}0D`, minHeight: '100vh' }}>
            <div className="quiz-tarjeta" style={{ borderColor: colorActual }}>

                {/* Progreso y Título con el color fuerte exacto */}
                <p className="quiz-progreso" style={{ color: colorActual, opacity: 0.8 }}>
                    {t('quiz.progress', { current: paso + 1 })}
                </p>

                <h2 className="quiz-pregunta" style={{ color: colorActual }}>
                    {t(`quiz.q${paso}.question`)}
                </h2>

                <div className="quiz-opciones">
                    {[0, 1, 2, 3].map((index) => (
                        <button
                            key={index}
                            className={`quiz-boton-opcion ${respuestas[paso] === index ? 'seleccionado' : ''}`}
                            onClick={() => responder(index)}
                            // El borde izquierdo y el texto al pasar el mouse usarán el color exacto
                            style={{
                                '--color-hover': colorActual,
                                borderLeftColor: respuestas[paso] === index ? colorActual : 'rgba(139, 69, 19, 0.3)',
                                backgroundColor: respuestas[paso] === index ? `${colorActual}1A` : 'transparent',
                                color: respuestas[paso] === index ? colorActual : '#3a2e28'
                            }}
                        >
                            {t('quiz.q' + paso + '.opt' + index)}
                        </button>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default Quiz;