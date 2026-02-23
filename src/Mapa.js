import React, { useState } from 'react';

// 🌟 COORDINADAS AJUSTADAS (Más cerca entre sí y centradas)
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

export default function Mapa() {
    const [sel, setSel] = useState(null);

    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
            <h2 style={{ color: '#064E3B' }}>Tu Ruta Sagrada</h2>

            {/* CONTENEDOR RELATIVO - EL ANCLA DE TODO */}
            <div style={{
                position: 'relative',
                display: 'inline-block', // Crucial: el contenedor mide lo mismo que la imagen
                margin: '0 auto',
                maxWidth: '90vw'
            }}>

                {/* IMAGEN BASE */}
                <img src="/assets/mapa_base.png" alt="Mapa" style={{ width: '100%', display: 'block', borderRadius: '15px' }} />

                {/* PINES INTERACTIVOS */}
                {DESTINOS.map((d) => (
                    <button
                        key={d.id}
                        onClick={() => setSel(d)}
                        style={{
                            position: 'absolute',
                            left: d.x,
                            top: d.y,
                            transform: 'translate(-50%, -50%)',
                            width: '40px', // Tamaño controlado
                            height: '40px',
                            borderRadius: '50%',
                            border: `3px solid ${d.color}`,
                            backgroundColor: 'white',
                            cursor: 'pointer',
                            overflow: 'hidden',
                            zIndex: 10,
                            padding: '0'
                        }}
                    >
                        <img src={d.iconoImg} alt={d.id} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                    </button>
                ))}

                {/* BURBUJA DE INFO */}
                {sel && (
                    <div style={{
                        position: 'absolute',
                        top: sel.y,
                        left: sel.x,
                        transform: 'translate(-50%, -120%)',
                        background: 'white',
                        padding: '10px',
                        borderRadius: '10px',
                        boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
                        zIndex: 100,
                        width: '150px'
                    }}>
                        <strong style={{ color: sel.color, fontSize: '12px' }}>{sel.titulo}</strong>
                        <p style={{ margin: '5px 0 0', fontSize: '11px' }}>{sel.frase}</p>
                        <button onClick={() => setSel(null)} style={{ border: 'none', background: 'none', cursor: 'pointer', float: 'right' }}>×</button>
                    </div>
                )}
            </div>
        </div>
    );
}