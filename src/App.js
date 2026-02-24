import React, { useState, useEffect } from 'react';
import './App.css';
import Mapa from './Mapa';
import Quiz from './Quiz';
import Agente from './Agente';

// 1. EL MAPA DE SABIDURÍA (Con rutas de fotos y colores vivos)
const INFO_DESTINOS = {
  Amazonas: {
    titulo: "Raíz Viva", arquetipo: "Ancestralidad", proceso: "Pertenencia y retorno al origen", color: "rgba(40, 114, 38, 1)",
    desc: "Tierra del pulmón verde. Conectamos con el Mundo de Adentro (Wiwa) y restauramos el equilibrio en la Maloka con médicos tradicionales.",
    foto: "/assets/amazonastarjeta.jpg"
  },
  Macizo: {
    titulo: "Útero de la Tierra", arquetipo: "Nutrición", proceso: "Gestación y transformación", color: "rgba(138, 100, 240, 1)",
    desc: "San Agustín y Silvia. Donde nace la estrella fluvial (Río Magdalena). Custodiado por los volcanes Puracé y Sotará. Sabiduría Misak y arcilla.",
    foto: "/assets/macizotarjeta.jpg"
  },
  Guainia: {
    titulo: "Aguas de Unidad", arquetipo: "Conciliación", proceso: "Reintegración de la memoria", color: "hsla(130, 92%, 29%, 1.00)",
    desc: "Los Cerros de Mavecure son la Tulpa Gigante de 3 piedras. Rocas más antiguas del planeta para unir los fuegos sagrados de los pueblos.",
    foto: "/assets/guainiatarjeta.jpg"
  },
  Sierra: {
    titulo: "Corazón Manifestador", arquetipo: "Despertar", proceso: "Propósito y dirección", color: "#8d0f6eff",
    desc: "Sierra Nevada. Abrir el corazón y ordenar el pensamiento con los abuelos Koguis y Arhuacos para diseñar nuestra misión de vida.",
    foto: "/assets/sierratarjeta.jpg"
  },
  Pacífico: {
    titulo: "Memoria del Océano", arquetipo: "Sanación", proceso: "Limpieza de linaje y familia", color: "rgba(9, 114, 212, 1)",
    desc: "El parir de las ballenas Yubarta. Selva, mar limpio y la mezcla mágica de culturas Afro y Embera para sanar la historia familiar.",
    foto: "/assets/pacificotarjeta.jpg"
  },
  Putumayo: {
    titulo: "Bosque Medicina", arquetipo: "Alquimia", proceso: "Integración y medicina interna", color: "rgba(0, 61, 0, 1)",
    desc: "Territorio del Jaguar. Transformación mística en el silencio sonoro de la selva agreste con plantas de poder.",
    foto: "/assets/putumayotarjeta.jpg"
  },
  Bogota: {
    titulo: "Círculo de Integración", arquetipo: "Sabiduría", proceso: "Cierre consciente y luz del alma", color: "rgba(139, 21, 0, 1)",
    desc: "Laguna de Guatavita. El vientre de Bachué donde nació la gente. Encontramos el Oro del Alma para brillar en nuestro entorno.",
    foto: "/assets/bogotatarjeta.jpg"
  }
};

export default function App() {
  const [pantallaActiva, setPantallaActiva] = useState('landing');
  const [seccionInterna, setSeccionInterna] = useState('home');
  const [resultadosQuiz, setResultadosQuiz] = useState([]);
  const [nombreUsuario, setNombreUsuario] = useState('');
  const [inputNombre, setInputNombre] = useState('');
  const [inputCorreo, setInputCorreo] = useState('');

  // 2. RECUPERAR MEMORIA
  useEffect(() => {
    const n = localStorage.getItem('ecoNombre');
    const c = localStorage.getItem('ecoEmail');
    if (n) { setNombreUsuario(n); setInputNombre(n); }
    if (c) setInputCorreo(c);
  }, []);

  // 3. CAPTURA DE LEADS
  const capturarLead = (nombre, correo, destinos) => {
    console.log("🐸 Lead para Drive:", { nombre, correo, destinos, fecha: new Date().toLocaleString() });
  };

  const enviarCorreoYEntrar = (e) => {
    e.preventDefault();
    if (inputCorreo.trim() !== '' && inputNombre.trim() !== '') {
      capturarLead(inputNombre, inputCorreo, resultadosQuiz);
      setNombreUsuario(inputNombre);
      localStorage.setItem('ecoNombre', inputNombre);
      localStorage.setItem('ecoEmail', inputCorreo);
      setPantallaActiva('app');
      setSeccionInterna('home');
    }
  };

  const renderizarPantalla = () => {
    switch (pantallaActiva) {
      case 'landing':
        return (
          <div className="pantalla-centrada fade-in">
            <img src="/assets/logocircular.png" alt="Ecodestinos" className="logo-landing" />
            <h1 className="titulo-principal">Territorios Vivos</h1>
            <p className="texto-tagline">Mapeando la compatibilidad entre tu alma y la tierra</p>
            <button className="boton-brillante-grande" onClick={() => setPantallaActiva('quiz')}>Iniciar medición de energía</button>
            <button className="boton-omitir" onClick={() => { setPantallaActiva('app'); setSeccionInterna('home'); }}>Omitir Quiz</button>
          </div>
        );

      case 'quiz':
        return <Quiz alTerminar={(res) => { setResultadosQuiz(res); setPantallaActiva('procesando'); setTimeout(() => setPantallaActiva('resultados'), 3500); }} />;

      case 'procesando':
        return (
          <div className="pantalla-centrada fade-in">
            <div className="contenedor-agente-magico"><div className="halo-azul"></div><img src="/assets/agente.png" alt="A" className="agente-pequeno" /></div>
            <p className="texto-exotico">La Rana está escuchando tu latido...</p>
          </div>
        );

      case 'resultados':
        return (
          <div className="pantalla-centrada fade-in">
            <h2 className="titulo-resultados">Tu Energía Resuena Con:</h2>

            <div className="contenedor-tarjetas">
              {resultadosQuiz.map((clave, index) => {
                const info = INFO_DESTINOS[clave] || INFO_DESTINOS['Amazonas'];
                return (
                  <div key={index} className="tarjeta-resultado" style={{ borderLeft: `6px solid ${info.color}` }}>
                    <span className="nombre-geografico-label" style={{ color: info.color }}>{clave.toUpperCase()}</span>
                    <h3 style={{ color: info.color }}>{info.titulo}</h3>
                    <p className="arquetipo-tag" style={{ color: info.color }}>{info.arquetipo.toUpperCase()}</p>
                    <p style={{ fontSize: '13px' }}>{info.desc}</p>
                  </div>
                );
              })}
            </div>

            <form onSubmit={enviarCorreoYEntrar} className="formulario-registro">
              <div className="fila-registro">
                <label className="etiqueta-input">tu nombre:</label>
                <input type="text" required value={inputNombre} onChange={(e) => setInputNombre(e.target.value)} className="input-correo-elegante" />
              </div>
              <div className="fila-registro">
                <label className="etiqueta-input">tu correo:</label>
                <input type="email" required value={inputCorreo} onChange={(e) => setInputCorreo(e.target.value)} className="input-correo-elegante" />
              </div>
              <button type="submit" className="boton-brillante-grande">Recibir mis destinos</button>
            </form>
          </div>
        );

      case 'app':
        return (
          <div className="aplicacion-movil">
            <header className="header-app"><img src="/assets/logoecodestinos.png" alt="L" className="logo-header" /></header>

            <div className="area-contenido-app">
              {seccionInterna === 'home' && (
                <div className="contenedor-home-flexible">
                  <div className="mapa-fijo-superior"><Mapa /></div>

                  <div className="lista-destinos-scroll">
                    {Object.entries(INFO_DESTINOS).map(([lugar, d], i) => (
                      <div key={i} className="tarjeta-destino-estilo-nuevo" style={{ borderColor: d.color }}>
                        {/* 🖼️ IMAGEN DE FONDO */}
                        <img src={d.foto} alt={lugar} className="foto-destino-card" />

                        {/* 🌫️ CAPA DE TRANSPARENCIA (Overlay) */}
                        <div className="capa-transparencia-foto"></div>

                        {/* ✍️ TEXTO CON COLOR VIVO (Encima de la capa) */}
                        <div className="info-overlay-card">
                          <span className="nombre-geografico-label" style={{ color: d.color }}>{lugar.toUpperCase()}</span>
                          <h4 className="titulo-tarjeta" style={{ color: d.color }}>{d.titulo}</h4>
                          <p className="lugar-tarjeta" style={{ color: d.color }}>{d.arquetipo.toUpperCase()}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {seccionInterna === 'maloka' && (
                <div className="fade-in p-20">
                  <h2 style={{ color: '#064E3B' }}>Maloka Ancestral</h2>
                  <div className="tarjeta-multimedia">
                    <h3>🎬 Talleres: El Vientre del Macizo</h3>
                    <p>Encuentro con los Hijos del Agua (Misak) y la medicina de la arcilla.</p>
                    <div className="video-fake">▶ Reproducir Taller</div>
                  </div>
                  <div className="tarjeta-multimedia" style={{ marginTop: '20px' }}>
                    <h3>🎧 Audios: El Canto de las Ballenas</h3>
                    <p>Meditación guiada para la sanación del linaje familiar en el Pacífico.</p>
                  </div>
                  <div className="tarjeta-multimedia" style={{ marginTop: '20px' }}>
                    <h3>🎙️ Podcast: La Voz de los Abuelos</h3>
                    <p>Sabiduría Kogui y Arhuaca sobre el propósito de vida.</p>
                  </div>
                </div>
              )}

              {seccionInterna === 'miruta' && (
                <div className="fade-in p-20">
                  <h2 style={{ color: '#064E3B' }}>Mi Bitácora de Viaje</h2>
                  <div className="modulo-mapa-offline">
                    <button className="boton-secundario">📍 Localización en el Territorio</button>
                    <button className="boton-secundario">🗺️ Mapas Offline (Maps.me)</button>
                  </div>
                  <div className="grabadora-experiencia" style={{ marginTop: '30px' }}>
                    <h3>🎙️ Graba tu sentir hoy</h3>
                    <p style={{ fontSize: '12px' }}>Tus audios se guardarán para tu integración post-viaje.</p>
                    <textarea className="caja-texto" placeholder="Escribe o graba aquí tus procesos emocionales..."></textarea>
                    <button className="boton-microfono">🔴 Iniciar Grabación</button>
                  </div>
                </div>
              )}

              {seccionInterna === 'comunidades' && (
                <div className="fade-in p-20">
                  <h2 style={{ color: '#064E3B' }}>Comunidades Vivas</h2>
                  <div className="modulo-comunidad">
                    <h3>👥 Socios Estratégicos</h3>
                    <p>Nuestra comunidad participa en las decisiones y la formación emocional.</p>
                    <div className="tarjeta-transparencia">
                      <p><strong>Transparencia:</strong> 85% del valor de tu viaje va directo a la autonomía comunitaria.</p>
                    </div>
                    <div className="galeria-fotos-comu">
                      <div className="foto-placeholder">Galería de Testimonios</div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <nav className="barra-navegacion">
              <button onClick={() => setSeccionInterna('home')} className={seccionInterna === 'home' ? 'activo' : ''}>
                <img src="/assets/home.png" alt="h" className="icono-nav" /><span>Inicio</span>
              </button>
              <button onClick={() => setSeccionInterna('maloka')} className={seccionInterna === 'maloka' ? 'activo' : ''}>
                <img src="/assets/maloka.png" alt="m" className="icono-nav" /><span>Maloka</span>
              </button>
              <button onClick={() => setSeccionInterna('miruta')} className={seccionInterna === 'miruta' ? 'activo' : ''}>
                <img src="/assets/miruta.png" alt="r" className="icono-nav" /><span>Mi Ruta</span>
              </button>
              <button onClick={() => setSeccionInterna('comunidades')} className={seccionInterna === 'comunidades' ? 'activo' : ''}>
                <img src="/assets/comunidades.png" alt="c" className="icono-nav" /><span>Comunidad</span>
              </button>
            </nav>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="contenedor-maestro">
      {renderizarPantalla()}
      {pantallaActiva === 'app' && <Agente nombre={nombreUsuario} />}
    </div>
  );
}