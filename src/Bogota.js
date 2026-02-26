import { useTranslation } from "react-i18next";
import React from 'react';

const Bogota = ({ info, onVolver }) => {
    const { t } = useTranslation();
    if (!info) return null;

    return (
        <div className="pagina-territorio fade-in">
            <button className="boton-regresar" onClick={onVolver}>{t("territory.back")}</button>

            <div className="hero-territorio">
                <img src={info.foto} alt="F" className="foto-cabecera" />
                <div className="overlay-titulo">
                    <h1 className="cinzel-font">BOGOTÁ</h1>
                    <p className="arquetipo-sub">{t("destinos.Bogota.archetype") || info.arquetipo}</p>
                </div>
            </div>

            <div className="contenido-multimedia-wrap">
                <div className="bloque-texto">
                    <h3>{t("territory.wisdom")}</h3>
                    <p className="texto-maestro">{t("destinos.Bogota.desc") || info.desc}</p>
                </div>

                <div className="bloque-video">
                    <h3>{t("territory.video")}</h3>
                    <video controls className="video-territorio" src={info.video}></video>
                </div>

                <div className="bloque-galeria">
                    <h3>{t("territory.gallery")}</h3>
                    <div className="grid-galeria">
                        {info.galeria && info.galeria.map((img, idx) => (
                            <img key={idx} src={img} alt="G" className="img-galeria" />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bogota;
