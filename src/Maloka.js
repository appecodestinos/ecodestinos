import { useTranslation } from "react-i18next";
import React from 'react';

export default function Maloka() {
    const { t } = useTranslation();
    return (
        <div className="fade-in p-20 vista-seccion-contenedor" style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{ color: '#F4E8C1', fontSize: '2.2rem', fontFamily: 'Playfair Display, serif', textAlign: 'center', marginBottom: '25px', textShadow: '0 2px 4px rgba(0,0,0,0.8)' }}>
                {t('maloka.title')}
            </h2>
            <div className="tarjeta-multimedia-dark" style={{ background: 'rgba(10, 25, 18, 0.75)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)', borderRadius: '12px', padding: '16px', marginBottom: '20px', border: '1px solid rgba(200, 169, 110, 0.3)', boxShadow: '0 8px 25px rgba(0,0,0,0.4)' }}>
                <h3 style={{ color: '#A7F3D0', fontFamily: 'Montserrat, sans-serif', fontSize: '1.25rem', fontWeight: '600', marginBottom: '10px' }}>{t('maloka.workshop1_title')}</h3>
                <p style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '1rem', lineHeight: '1.6', marginBottom: '15px' }}>{t('maloka.workshop1_desc')}</p>
                <div className="video-fake" style={{ background: 'linear-gradient(135deg, #064E3B, #0a7a5c)', color: '#FFFFFF', padding: '12px 20px', borderRadius: '25px', display: 'inline-block', fontWeight: '600', cursor: 'pointer', boxShadow: '0 4px 12px rgba(0,0,0,0.3)' }}>{t('maloka.workshop1_btn')}</div>
            </div>
            <div className="tarjeta-multimedia-dark" style={{ background: 'rgba(10, 25, 18, 0.75)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)', borderRadius: '12px', padding: '16px', marginBottom: '20px', border: '1px solid rgba(200, 169, 110, 0.3)', boxShadow: '0 8px 25px rgba(0,0,0,0.4)' }}>
                <h3 style={{ color: '#A7F3D0', fontFamily: 'Montserrat, sans-serif', fontSize: '1.25rem', fontWeight: '600', marginBottom: '10px' }}>{t('maloka.audio1_title')}</h3>
                <p style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '1rem', lineHeight: '1.6' }}>{t('maloka.audio1_desc')}</p>
            </div>
            <div className="tarjeta-multimedia-dark" style={{ background: 'rgba(10, 25, 18, 0.75)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)', borderRadius: '12px', padding: '16px', marginBottom: '20px', border: '1px solid rgba(200, 169, 110, 0.3)', boxShadow: '0 8px 25px rgba(0,0,0,0.4)' }}>
                <h3 style={{ color: '#A7F3D0', fontFamily: 'Montserrat, sans-serif', fontSize: '1.25rem', fontWeight: '600', marginBottom: '10px' }}>{t('maloka.podcast1_title')}</h3>
                <p style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '1rem', lineHeight: '1.6' }}>{t('maloka.podcast1_desc')}</p>
            </div>
        </div>
    );
}