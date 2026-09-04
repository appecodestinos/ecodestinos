import { useTranslation } from "react-i18next";
import React, { useState } from 'react';

const DESTINOS = [
    { id: 'SierraNevada', key: 'sierra', color: '#0407a8ff', x: '48.5%', y: '20.5%', iconoImg: '/assets/icono_sierra.png' },
    { id: 'Pacífico', key: 'pacifico', color: 'rgba(9, 114, 212, 1)', x: '27%', y: '46.5%', iconoImg: '/assets/icono_pacifico.png' },
    { id: 'SabanaDeBogota', key: 'sabanadebogota', color: 'rgba(139, 21, 0, 1)', x: '55.3%', y: '51.2%', iconoImg: '/assets/icono_sabanadebogota.png' },
    { id: 'Guainia', key: 'guainia', color: 'hsla(130, 92%, 29%, 1.00)', x: '67.8%', y: '58.4%', iconoImg: '/assets/icono_guainia.png' },
    { id: 'Macizo', key: 'macizo', color: 'rgba(96, 46, 231, 0.6)', x: '41.1%', y: '63.8%', iconoImg: '/assets/icono_macizo.png' },
    { id: 'Putumayo', key: 'putumayo', color: 'rgba(107, 27, 27, 1)', x: '50.2%', y: '78.5%', iconoImg: '/assets/icono_putumayo.png' },
    { id: 'Amazonas', key: 'amazonas', color: 'rgba(40, 114, 38, 1)', x: '61.5%', y: '94.2%', iconoImg: '/assets/icono_amazonas.png' },
    { id: 'Antioquia', key: 'antioquia', color: '#E65100', x: '42%', y: '45%', iconoImg: '/assets/icon_antioquia.png' }
];

export default function Mapa({ onMarkerClick }) {
    const { t } = useTranslation();
    const [sel, setSel] = useState(null);
    const [destinoCargando, setDestinoCargando] = useState(null);

    const manejarViaje = (d) => {
        if (destinoCargando) return;
        setSel(prev => prev?.id === d.id ? null : d);
    };

    const irAlDestino = (id) => {
        setDestinoCargando(id);

        setTimeout(() => {
            if (onMarkerClick) {
                onMarkerClick(id);
            }
            setDestinoCargando(null);
            setSel(null);
        }, 3000);
    };

    return (
        <div className="seccion-mapa-enmarcada" style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
            <div className="franja-blanca-top" style={{ width: '100%', height: '25px', backgroundColor: '#ffffff', zIndex: 5 }} />

            <div className="contenedor-home-mapa-total" style={{ position: 'relative', width: '100%' }}>
                <img
                    src="/assets/mapa_base.png"
                    alt={t('map.alt_text', 'Mapa Sagrado de los Territorios Vivos')}
                    className="mapa-anclado-fondo"
                    style={{ width: '100%', display: 'block' }}
                />

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
                        <img
                            src={d.iconoImg}
                            alt={d.id}
                            className={d.id === 'Antioquia' ? 'pin-antioquia-icono' : ''}
                            style={d.id === 'Antioquia' ? { width: '250%', height: '250%', objectFit: 'cover', borderRadius: '50%', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%) scale(1.2)' } : { width: '100%', height: '100%', objectFit: 'contain' }}
                        />
                    </button>
                ))}

                {sel && (
                    <div
                        className="fade-in"
                        onClick={() => !destinoCargando && irAlDestino(sel.id)}
                        style={{
                            position: 'absolute',
                            top: sel.y,
                            left: sel.x,
                            transform: 'translate(-50%, -130%)',
                            background: '#ffffff',
                            padding: '16px',
                            borderRadius: '16px',
                            boxShadow: '0 8px 25px rgba(0,0,0,0.25)',
                            zIndex: 100,
                            width: '240px',
                            border: `2px solid ${sel.color}`,
                            cursor: destinoCargando ? 'default' : 'pointer',
                            pointerEvents: 'auto'
                        }}
                    >
                        <strong style={{ color: sel.color, fontSize: '16px', display: 'block', fontFamily: 'Cinzel, serif', fontWeight: 'bold' }}>
                            {t(`map.${sel.key}.location`, sel.id).toUpperCase()}
                        </strong>

                        <span style={{ fontSize: '13px', color: '#2E472D', display: 'block', marginTop: '4px', fontWeight: '600', fontFamily: 'Montserrat, sans-serif' }}>
                            {t(`map.${sel.key}.pillars`)}
                        </span>

                        <p style={{ fontSize: '11px', color: '#555555', marginTop: '6px', marginBottom: '8px', lineHeight: '1.3', fontFamily: 'Montserrat, sans-serif' }}>
                            {t(`map.${sel.key}.desc`)}
                        </p>

                        {destinoCargando === sel.id ? (
                            <div style={{ width: '100%', height: '6px', backgroundColor: '#e0e0e0', borderRadius: '3px', overflow: 'hidden', marginTop: '8px' }}>
                                <div style={{ width: '100%', height: '100%', backgroundColor: sel.color, animation: 'cargarBarra 3s linear forwards' }} />
                                <style>{`@keyframes cargarBarra { 0% { width: 0%; } 100% { width: 100%; } }`}</style>
                            </div>
                        ) : (
                            <div style={{ fontSize: '11px', color: sel.color, marginTop: '8px', opacity: 0.9, textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 'bold', textAlign: 'center' }}>
                                {t('landing.start', 'Iniciar viaje')} →
                            </div>
                        )}
                    </div>
                )}
            </div>

            <div className="franja-blanca-bottom" style={{ width: '100%', height: '25px', backgroundColor: '#ffffff', zIndex: 5 }} />
        </div>
    );
}