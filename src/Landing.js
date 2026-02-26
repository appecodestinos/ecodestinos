import { useTranslation } from "react-i18next";
import React from 'react';

const Landing = ({ alComenzar }) => (
    <div className="fade-in landing-hero">
        <img src="/assets/logo.png" alt="Ecodestinos Logo" className="logo-principal" />
        <h1 className="eco-titulo">Territorios Vivos</h1>
        <p className="eco-tagline">Descubre el destino que vibra con tu energía ancestral.</p>
        <button className="btn-comenzar" onClick={alComenzar}>
            INICIAR EXPERIENCIA
        </button>
    </div>
);

export default Landing;