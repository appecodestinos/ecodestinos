import React, { useState } from 'react';

// 🌟 TUS COORDINADAS Y ICONOS (Preservados exactamente como los tenías)
const DESTINOS = [
    {
        id: 'Sierra', titulo: 'Corazón Manifestador', lugar: 'Sierra Nevada',
        frase: 'Propósito y dirección.', desc: 'Buscas propósito y fuerza para actuar.',
        color: '#0407a8ff', x: '48.5%', y: '20.5%', iconoImg: '/assets/icono_sierra.png'
    },
    {
        id: 'Pacífico', titulo: 'Memoria del Océano', lugar: 'Pacífico',
        frase: 'Linaje y escucha profunda.', desc: 'Es el momento de sanar linaje.',
        color: 'rgba(9, 114, 212, 1)', x: '32.2%', y: '46.5%', iconoImg: '/assets/icono_pacifico.png'
    },
    {
        id: 'Bogota', titulo: 'Círculo de Integración', lugar: 'Bogotá y Guatavita',
        frase: 'La comprensión y el cierre de ciclos.', desc: 'La comprensión y el cierre de ciclos.',
        color: 'rgba(139, 21, 0, 1)', x: '55.3%', y: '51.2%', iconoImg: '/assets/icono_bogota.png'
    },
    {
        id: 'Guainia', titulo: 'Aguas de Unidad', lugar: 'Guainía e Inírida',
        frase: 'Armonía y reconciliación.', desc: 'Tu ser pide armonía y reconciliación.',
        color: 'hsla(130, 92%, 29%, 1.00)', x: '67.8%', y: '58.4%', iconoImg: '/assets/icono_guainia.png'
    },
    {
        id: 'Macizo', titulo: 'Útero de la Tierra', lugar: 'Macizo Colombiano',
        frase: 'Gestación y transformación.', desc: 'Es tiempo de gestar una transformación.',
        color: 'rgba(96, 46, 231, 0.6)', x: '41.1%', y: '63.8%', iconoImg: '/assets/icono_macizo.png'
    },
    {
        id: 'Putumayo', titulo: 'Bosque Medicina', lugar: 'Putumayo y Caquetá',
        frase: 'Transición e integración.', desc: 'Necesitas integración y suavidad.',
        color: 'rgba(107, 27, 27, 1)', x: '50.2%', y: '78.5%', iconoImg: '/assets/icono_putumayo.png'
    },
    {
        id: 'Amazonas', titulo: 'Raíz Viva', lugar: 'Amazonas',
        frase: 'Equilibrio y pertenencia.', desc: 'Necesitas recuperar tu equilibrio natural.',
        color: 'rgba(40, 114, 38, 1)', x: '61.5%', y: '94.2%', iconoImg: '/assets/icono_amazonas.png'
    }
];

// Añadimos la prop onMarkerClick que viene de App.js
export default function Mapa({ onMarkerClick }) {
    const [sel, setSel] = useState(null);

    const manejarClickIcono = (d) => {
        setSel(d); // Mostramos la burbuja localmente
        // Si la función existe en el padre, avisamos para que inicie el "viaje" de 5s
        if (onMarkerClick) {
            onMarkerClick(d.id);
        }
    };

    return (
        <div style={{ padding: '10px', textAlign: 'center' }}>
            {/* Título preservado */}
            <h2 style={{
                color: '#064E3B',
                fontFamily: 'Cinzel, serif',
                marginBottom: '10px'
            }}>Tu Ruta Sagrada</h2>

            <div style={{
                position: 'relative',
                display: 'inline-block',
                margin: '0 auto',
                maxWidth: '95vw'
            }}>

                {/* IMAGEN BASE PRESERVADA */}
                <img src="/assets/mapa_base.png" alt="Mapa" style={{
                    width: '100%',
                    display: 'block',
                    borderRadius: '15px',
                    border: '2px solid #064E3B' // El bordecito verde sencillo que pediste
                }} />

                {/* PINES INTERACTIVOS (Tus botones con iconos) */}
                {DESTINOS.map((d) => (
                    <button
                        key={d.id}
                        onClick={() => manejarClickIcono(d)}
                        style={{
                            position: 'absolute',
                            left: d.x,
                            top: d.y,
                            transform: 'translate(-50%, -50%)',
                            width: '45px',
                            height: '45px',
                            borderRadius: '50%',
                            border: `3px solid ${d.color}`,
                            backgroundColor: 'white',
                            cursor: 'pointer',
                            overflow: 'hidden',
                            zIndex: 10,
                            padding: '0',
                            boxShadow: '0 0 10px rgba(0,0,0,0.2)'
                        }}
                    >
                        <img src={d.iconoImg} alt={d.id} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                    </button>
                ))}

                {/* BURBUJA DE INFO (Ajustada según tu pedido: Nombre arriba de la descripción) */}
                {sel && (
                    <div className="fade-in" style={{
                        position: 'absolute',
                        top: sel.y,
                        left: sel.x,
                        transform: 'translate(-50%, -130%)',
                        background: 'rgba(255, 255, 255, 0.95)',
                        padding: '12px',
                        borderRadius: '15px',
                        boxShadow: '0 8px 25px rgba(0,0,0,0.3)',
                        zIndex: 100,
                        width: '180px',
                        border: `2px solid ${sel.color}`
                    }}>
                        {/* El destino por su nombre encima */}
                        <strong style={{
                            color: sel.color,
                            fontSize: '14px',
                            display: 'block',
                            fontFamily: 'Cinzel, serif'
                        }}>
                            {sel.lugar.toUpperCase()}
                        </strong>

                        {/* La descripción debajo */}
                        <p style={{
                            margin: '5px 0 0',
                            fontSize: '11px',
                            color: '#333',
                            lineHeight: '1.3'
                        }}>
                            {sel.desc}
                        </p>

                        <button onClick={() => setSel(null)} style={{
                            position: 'absolute',
                            top: '5px',
                            right: '5px',
                            border: 'none',
                            background: 'none',
                            cursor: 'pointer',
                            fontSize: '16px',
                            color: '#999'
                        }}>×</button>
                    </div>
                )}
            </div>
        </div>
    );
}