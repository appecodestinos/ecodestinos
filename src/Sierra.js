import React from 'react';

const Sierra = ({ info, onVolver }) => {
    if (!info) return null;

    return (
        <div className="pagina-territorio fade-in">
            <button className="boton-regresar" onClick={onVolver}>← REGRESAR AL MAPA</button>

            <div className="hero-territorio">
                <img src={info.foto} alt="F" className="foto-cabecera" />
                <div className="overlay-titulo">
                    <h1 className="cinzel-font">SIERRA</h1>
                    <p className="arquetipo-sub">{info.arquetipo}</p>
                </div>
            </div>

            <div className="contenido-multimedia-wrap">
                <div className="bloque-texto">
                    <h3>Sabiduría del Territorio</h3>
                    <p className="texto-maestro">{info.desc}</p>
                </div>

                <div className="bloque-video">
                    <h3>Video Inmersivo</h3>
                    <video controls className="video-territorio" src={info.video}></video>
                </div>

                <div className="bloque-galeria">
                    <h3>Galería de Memorias</h3>
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

export default Sierra;
