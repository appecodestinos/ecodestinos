import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

const DESTINOS = [
  { id: 'sierra-nevada', name: 'Sierra Nevada', top: '13%', left: '48%' },
  { id: 'pacifico', name: 'Pacífico', top: '50%', left: '33%' },
  { id: 'eje-cafetero', name: 'Antioquia / Eje Cafetero', top: '50%', left: '44%' },
  { id: 'sabana-bogota', name: 'Sabana de Bogotá', top: '55%', left: '53%' },
  { id: 'macizo', name: 'Macizo / San Agustín', top: '68%', left: '38%' },
  { id: 'putumayo', name: 'Putumayo', top: '80%', left: '45%' },
  { id: 'guainia', name: 'Guainía', top: '62%', left: '70%' },
  { id: 'amazonas', name: 'Amazonas', top: '94%', left: '58%' }
];

const WHITE = '#ffffff';

export default function MapaLive() {
  const { t } = useTranslation();
  const [stats, setStats] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const intervalRef = useRef(null);
  const prevStatsRef = useRef({});

  const fetchStats = useCallback(async () => {
    try {
      const response = await fetch('/api/getLiveStats');
      if (!response.ok) throw new Error('Error fetching stats');
      const data = await response.json();

      prevStatsRef.current = { ...stats };
      setStats(data.totals || {});
    } catch (error) {
      console.error('Error fetching live stats:', error);
    } finally {
      setIsLoading(false);
    }
  }, [stats]);

  useEffect(() => {
    fetchStats();

    intervalRef.current = setInterval(fetchStats, 4000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [fetchStats]);

  const getAnimatedCount = (territoryId) => {
    const current = stats[territoryId] || 0;
    const previous = prevStatsRef.current[territoryId] || 0;

    if (current !== previous && current > previous) {
      return { count: current, isAnimating: true, previous };
    }
    return { count: current, isAnimating: false };
  };

  const TerritorioPin = ({ destino }) => {
    const { count, isAnimating, previous } = getAnimatedCount(destino.id);
    const displayCount = isAnimating ? previous : count;

    const pinStyle = {
      position: 'absolute',
      top: destino.top,
      left: destino.left,
      transform: 'translate(-50%, -50%)',
      zIndex: 10,
      pointerEvents: 'none'
    };

    const bubbleStyle = {
      position: 'absolute',
      bottom: '60px',
      left: '50%',
      transform: 'translateX(-50%)',
      whiteSpace: 'nowrap',
      pointerEvents: 'none',
      zIndex: 15
    };

    return (
      <div style={pinStyle} className="pin-live-container">
        <div className="pin-pulse">
          <div className="pin-core">
            <div className="pin-icon" />
          </div>
          <div className="pin-glow" />
        </div>

        <div className="bubble-float" style={bubbleStyle}>
          <div className="bubble-content">
            <span className="bubble-name">
              {destino.name}
            </span>
            <span
              className={`bubble-count ${isAnimating ? 'count-up' : ''}`}
            >
              {displayCount}
            </span>
          </div>
          <div className="bubble-arrow" />
        </div>
      </div>
    );
  };

  return (
    <div className="mapa-live-wrapper">
      <div className="mapa-live-container">
        <img
          src="/assets/mapa_base.png"
          alt={t('mapa_live.map_alt', { defaultValue: 'Mapa base de Colombia con territorios' })}
          className="mapa-base-image"
        />

        {isLoading && (
          <div className="mapa-loading-overlay">
            <div className="loading-spinner" />
            <p>{t('mapa_live.loading', { defaultValue: 'Cargando leads en vivo...' })}</p>
          </div>
        )}

        <div className="pins-layer" role="img" aria-label={t('mapa_live.pins_layer', { defaultValue: 'Marcadores de territorios con contadores en vivo' })}>
          {DESTINOS.map((destino) => (
            <TerritorioPin key={destino.id} destino={destino} />
          ))}
        </div>
      </div>

      <style jsx>{`
        .mapa-live-wrapper {
          width: 100vw;
          height: 100vh;
          margin: 0;
          padding: 0;
          overflow: hidden;
          background: #000;
          position: relative;
        }

        .mapa-live-container {
          width: 100%;
          height: 100%;
          position: relative;
          overflow: hidden;
        }

        .mapa-base-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          display: block;
        }

        .mapa-loading-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.6);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          z-index: 5;
          gap: 16px;
          color: ${WHITE};
        }

        .loading-spinner {
          width: 40px;
          height: 40px;
          border: 3px solid rgba(255, 255, 255, 0.2);
          border-top-color: ${WHITE};
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        .pins-layer {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        .pin-live-container {
          pointer-events: none;
        }

        .pin-pulse {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          border: 3px solid ${WHITE};
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          animation: pin-pulse 2s infinite;
        }

        @keyframes pin-pulse {
          0% { box-shadow: 0 0 0 0 ${WHITE}; }
          70% { box-shadow: 0 0 0 12px transparent; }
          100% { box-shadow: 0 0 0 0 transparent; }
        }

        .pin-core {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: ${WHITE};
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 20px rgba(255, 255, 255, 0.6), 0 0 30px ${WHITE};
          z-index: 2;
        }

        .pin-icon {
          width: 28px;
          height: 28px;
          object-fit: contain;
          background: center / contain no-repeat;
        }

        .pin-glow {
          position: absolute;
          inset: -6px;
          border-radius: 50%;
          background: ${WHITE};
          opacity: 0.4;
          filter: blur(8px);
          animation: glow-pulse 2s infinite;
        }

        @keyframes glow-pulse {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.15); }
        }

        .bubble-float {
          animation: float-bubble 3s ease-in-out infinite;
        }

        @keyframes float-bubble {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(-8px); }
        }

        .bubble-content {
          padding: 8px 16px;
          border-radius: 24px;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(8px);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
          min-width: 90px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.3);
          border: 1px solid rgba(255, 255, 255, 0.5);
        }

        .bubble-name {
          font-family: 'Cinzel', serif;
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
          white-space: nowrap;
          color: #1a1a1a;
        }

        .bubble-count {
          font-family: 'Playfair Display', serif;
          font-size: 1.6rem;
          font-weight: 700;
          line-height: 1;
          color: #1a1a1a;
          transition: all 0.3s ease;
        }

        .bubble-count.count-up {
          animation: count-up-anim 0.6s ease-out;
        }

        @keyframes count-up-anim {
          0% { transform: scale(0.8); opacity: 0; }
          50% { transform: scale(1.15); }
          100% { transform: scale(1); opacity: 1; }
        }

        .bubble-arrow {
          width: 0;
          height: 0;
          border-left: 10px solid transparent;
          border-right: 10px solid transparent;
          border-top: 10px solid rgba(255, 255, 255, 0.95);
          margin-top: -2px;
          filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
        }

        @media (max-width: 480px) {
          .pin-pulse { width: 48px; height: 48px; }
          .pin-core { width: 38px; height: 38px; }
          .pin-icon { width: 24px; height: 24px; }
          .bubble-content { padding: 6px 12px; min-width: 80px; }
          .bubble-name { font-size: 0.6rem; }
          .bubble-count { font-size: 1.3rem; }
          .bubble-arrow { border-left: 8px solid transparent; border-right: 8px solid transparent; border-top: 8px solid rgba(255, 255, 255, 0.95); }
        }
      `}</style>
    </div>
  );
}