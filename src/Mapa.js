import React, { useState } from 'react';

const DESTINOS = [
    { id: 'Sierra', titulo: 'Corazón Manifestador', lugar: 'Sierra Nevada', desc: 'Buscas propósito y fuerza para actuar.', color: '#0407a8ff', x: '48.5%', y: '20.5%', iconoImg: '/assets/icono_sierra.png' },
    { id: 'Pacífico', titulo: 'Memoria del Océano', lugar: 'Pacífico', desc: 'Es el momento de sanar linaje.', color: 'rgba(9, 114, 212, 1)', x: '32.2%', y: '46.5%', iconoImg: '/assets/icono_pacifico.png' },
    { id: 'Bogota', titulo: 'Círculo de Integración', lugar: 'Bogotá y Guatavita', desc: 'La comprensión y el cierre de ciclos.', color: 'rgba(139, 21, 0, 1)', x: '55.3%', y: '51.2%', iconoImg: '/assets/icono_bogota.png' },
    { id: 'Guainia', titulo: 'Aguas de Unidad', lugar: 'Guainía e Inírida', desc: 'Tu ser pide armonía y reconciliación.', color: 'hsla(130, 92%, 29%, 1.00)', x: '67.8%', y: '58.4%', iconoImg: '/assets/icono_guainia.png' },
    { id: 'Macizo', titulo: 'Útero de la Tierra', lugar: 'Macizo Colombiano', desc: 'Es tiempo de gestar una transformación.', color: 'rgba(96, 46, 231, 0.6)', x: '41.1%', y: '63.8%', iconoImg: '/assets/icono_macizo.png' },
    { id: 'Putumayo', titulo: 'Bosque Medicina', lugar: 'Putumayo y Caquetá', desc: 'Necesitas integración y suavidad.', color: 'rgba(107, 27, 27, 1)', x: '50.2%', y: '78.5%', iconoImg: '/assets/icono_putumayo.png' },
    { id: 'Amazonas', titulo: 'Raíz Viva', lugar: 'Amazonas', desc: 'Necesitas recuperar tu equilibrio natural.', color: 'rgba(40, 114, 38, 1)', x: '61.5%', y: '94.2%', iconoImg: '/assets/icono_amazonas.png' }
];

export default function Mapa({ onMarkerClick }) {
    const [sel, setSel] = useState(null);

    const manejarViaje = (d) => {
        setSel(d);
        if (onMarkerClick) onMarkerClick(d.id);
    };

    return (
        <div className="contenedor-home-mapa-total">
            {/* LA IMAGEN AHORA ES LARGA Y OCUPA TODO EL FONDO */}
            <img
                src="/assets/mapa_base.png"
                alt="Mapa Sagrado"
                className="mapa-anclado-fondo"
            />

            {/* LOS PINES FLOTAN SOBRE EL FONDO SIN MOVERSE */}
            {DESTINOS.map((d) => (
                <button
                    key={d.id}
                    onClick={() => manejarViaje(d)}
                    className="pin-destino"
                    style={{
                        position: 'absolute',
                        left: d.x,
                        top: d.y,
                        transform: 'translate(-50%, -50%)',
                        border: `3px solid ${d.color}`,
                        backgroundColor: 'white',
                        cursor: 'pointer',
                        overflow: 'hidden',
                        zIndex: 10,
                        padding: '0',
                        borderRadius: '50%'
                    }}
                >
                    <img src={d.iconoImg} alt={d.id} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                </button>
            ))}

            {/* BURBUJA DE INFO (NOMBRE SOBRE DESCRIPCIÓN) */}
            {sel && (
                <div className="fade-in" style={{
                    position: 'absolute',
                    top: sel.y,
                    left: sel.x,
                    transform: 'translate(-50%, -130%)',
                    background: 'rgba(255, 255, 255, 0.98)',
                    padding: '15px',
                    borderRadius: '20px',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                    zIndex: 100,
                    width: '200px',
                    border: `2px solid ${sel.color}`,
                    pointerEvents: 'none' // Para que no bloquee clics accidentales
                }}>
                    <strong style={{ color: sel.color, fontSize: '15px', display: 'block', fontFamily: 'Cinzel, serif' }}>
                        {sel.lugar.toUpperCase()}
                    </strong>
                    <p style={{ margin: '8px 0 0', fontSize: '12px', color: '#333', lineHeight: '1.4', fontFamily: 'sans-serif' }}>
                        {sel.desc}
                    </p>
                </div>
            )}
        </div>
    );
}