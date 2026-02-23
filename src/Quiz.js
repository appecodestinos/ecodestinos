import React, { useState } from 'react';

const PREGUNTAS = [
    { pregunta: "¿Cómo sientes tu energía en este momento vital?", opciones: [{ texto: "Desconectada o con agotamiento mental", territorio: 'Amazonas' }, { texto: "En medio de un proceso de cambio profundo", territorio: 'Macizo' }, { texto: "Buscando claridad, dirección y propósito", territorio: 'Sierra' }, { texto: "Sensible, con necesidad de sanar vínculos", territorio: 'Pacífico' }] },
    { pregunta: "¿Qué es lo que más necesitas de la naturaleza hoy?", opciones: [{ texto: "Estabilidad y arraigo", territorio: 'Amazonas' }, { texto: "Contención para gestar algo nuevo", territorio: 'Macizo' }, { texto: "Armonía y suavidad", territorio: 'Guainia' }, { texto: "Medicina natural e integración", territorio: 'Putumayo' }] },
    { pregunta: "¿Cuál sientes que es tu mayor desafío emocional actualmente?", opciones: [{ texto: "La saturación mental y el ritmo acelerado", territorio: 'Amazonas' }, { texto: "Ciclos del pasado que necesitan cerrarse", territorio: 'Macizo' }, { texto: "La sensación de fragmentación interior", territorio: 'Guainia' }, { texto: "La falta de claridad para ordenar lo vivido", territorio: 'Bogota' }] },
    { pregunta: "Si tuvieras que elegir un paisaje para acompañar tu proceso, sería:", opciones: [{ texto: "La tierra húmeda y la inmensidad verde", territorio: 'Amazonas' }, { texto: "La montaña fuerte y la piedra antigua", territorio: 'Macizo' }, { texto: "El océano profundo y sonoro", territorio: 'Pacífico' }, { texto: "El agua calma de una laguna sagrada", territorio: 'Bogota' }] },
    { pregunta: "¿Cómo prefieres atravesar tus momentos de transformación?", opciones: [{ texto: "Soltando lo viejo en completo silencio", territorio: 'Macizo' }, { texto: "Integrando opuestos y buscando reconciliación", territorio: 'Guainia' }, { texto: "Convirtiendo mi intención en acción directa", territorio: 'Sierra' }, { texto: "Ablandando el proceso con suavidad", territorio: 'Putumayo' }] },
    { pregunta: "En tus relaciones y entorno, hoy buscas:", opciones: [{ texto: "Recordar que pertenezco a un sistema mayor", territorio: 'Amazonas' }, { texto: "Reconexión con la historia familiar", territorio: 'Pacífico' }, { texto: "Convivencia pacífica en la diferencia", territorio: 'Guainia' }, { texto: "Cierre consciente y comprensión", territorio: 'Bogota' }] },
    { pregunta: "¿Qué espacio te daría más paz al imaginarlo?", opciones: [{ texto: "La cima de una montaña que mira al mar", territorio: 'Sierra' }, { texto: "Un bosque húmedo lleno de vida", territorio: 'Putumayo' }, { texto: "El canto lejano de ballenas en el mar", territorio: 'Pacífico' }, { texto: "Un cerro sagrado rodeado de ríos", territorio: 'Guainia' }] },
    { pregunta: "Frente a una decisión importante en tu vida, tú necesitas:", opciones: [{ texto: "Enraizarme y encontrar mi centro primero", territorio: 'Amazonas' }, { texto: "Que mis pensamientos se conviertan en actos", territorio: 'Sierra' }, { texto: "Escuchar mi intuición antes de hablar", territorio: 'Pacífico' }, { texto: "Entender cada parte del proceso antes de saltar", territorio: 'Bogota' }] },
    { pregunta: "El mensaje que más resuena contigo hoy es:", opciones: [{ texto: "Sin raíz no hay expansión.", territorio: 'Amazonas' }, { texto: "Toda transformación necesita contención.", territorio: 'Macizo' }, { texto: "Antes de hablar, escucha profundo.", territorio: 'Pacífico' }, { texto: "Comprender es parte vital del viaje.", territorio: 'Bogota' }] }
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
    const [paso, setPaso] = useState(0);
    const [puntajes, setPuntajes] = useState({ Amazonas: 0, Macizo: 0, Guainia: 0, Sierra: 0, Pacífico: 0, Putumayo: 0, Bogota: 0 });

    const responder = (territorio) => {
        const nuevosPuntajes = { ...puntajes, [territorio]: puntajes[territorio] + 1 };
        if (paso < PREGUNTAS.length - 1) {
            setPuntajes(nuevosPuntajes);
            setPaso(paso + 1);
        } else {
            const ordenados = Object.entries(nuevosPuntajes).sort((a, b) => b[1] - a[1]);
            alTerminar([ordenados[0][0], ordenados[1][0]]);
        }
    };

    const colorActual = COLORES_VIBRATORIOS[paso];

    return (
        // Fondo con un tinte muy suave (5% opacidad) del color actual para no cansar la vista
        <div className="quiz-contenedor fade-in" style={{ backgroundColor: `${colorActual}0D`, minHeight: '100vh' }}>
            <div className="quiz-tarjeta" style={{ borderColor: colorActual }}>

                {/* Progreso y Título con el color fuerte exacto */}
                <p className="quiz-progreso" style={{ color: colorActual, opacity: 0.8 }}>
                    REFLEXIÓN {paso + 1} / 9
                </p>

                <h2 className="quiz-pregunta" style={{ color: colorActual }}>
                    {PREGUNTAS[paso].pregunta}
                </h2>

                <div className="quiz-opciones">
                    {PREGUNTAS[paso].opciones.map((opcion, index) => (
                        <button
                            key={index}
                            className="quiz-boton-opcion"
                            onClick={() => responder(opcion.territorio)}
                            // El borde izquierdo y el texto al pasar el mouse usarán el color exacto
                            style={{ '--color-hover': colorActual, borderLeftColor: colorActual }}
                        >
                            {opcion.texto}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Quiz;