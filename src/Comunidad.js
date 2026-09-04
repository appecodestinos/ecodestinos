import { useTranslation } from "react-i18next";
import React from 'react';

export default function Comunidad() {
    const { t } = useTranslation();
    return (
        <div className="fade-in p-20 vista-seccion-contenedor" style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{ color: '#F4E8C1', fontSize: '2.2rem', fontFamily: 'Playfair Display, serif', textAlign: 'center', marginBottom: '25px', textShadow: '0 2px 4px rgba(0,0,0,0.8)' }}>
                {t('comunidades.title')}
            </h2>
            <div className="modulo-comunidad" style={{ background: 'rgba(10, 25, 18, 0.75)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)', borderRadius: '12px', padding: '16px', border: '1px solid rgba(200, 169, 110, 0.3)', boxShadow: '0 8px 25px rgba(0,0,0,0.4)' }}>
                <h3 style={{ color: '#A7F3D0', fontFamily: 'Montserrat, sans-serif', fontSize: '1.3rem', fontWeight: '600', marginBottom: '12px' }}>{t('comunidades.partners_title')}</h3>
                <p style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '1rem', lineHeight: '1.6', marginBottom: '20px' }}>{t('comunidades.partners_desc')}</p>
                <div className="tarjeta-transparencia" style={{ background: 'rgba(6, 78, 59, 0.4)', borderRadius: '12px', padding: '16px', border: '1px solid rgba(167, 243, 208, 0.3)', marginBottom: '20px' }}>
                    <p style={{ color: '#F3F4F6', fontSize: '1rem', lineHeight: '1.5', margin: 0 }}>
                        <strong style={{ color: '#FFE6A7' }}>{t('comunidades.transparency_title')}</strong> {t('comunidades.transparency_desc')}
                    </p>
                </div>
                <div className="galeria-fotos-comu" style={{ marginTop: '15px' }}>
                    <div className="foto-placeholder" style={{ background: 'rgba(255,255,255,0.08)', color: '#F4E8C1', padding: '20px', borderRadius: '12px', textAlign: 'center', border: '1px dashed rgba(200, 169, 110, 0.4)', fontSize: '1rem' }}>
                        {t('comunidades.gallery')}
                    </div>
                </div>
            </div>
        </div>
    );
}