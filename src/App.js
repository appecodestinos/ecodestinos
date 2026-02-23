import React, { useState, useEffect } from 'react';
import './App.css';
import Mapa from './Mapa';
import Quiz from './Quiz';
import Agente from './Agente';

// 1. EL MAPA DE SABIDURÍA (Documento Maestro Inyectado)
const INFO_DESTINOS = {
  Amazonas: {
    titulo: "Raíz Viva", arquetipo: "El Ancestro", proceso: "Pertenencia y retorno al origen", color: "rgba(40, 114, 38, 1)",
    desc: "Tierra del pulmón verde. Conectamos con el Mundo de Adentro (Wiwa) y restauramos el equilibrio en la Maloka con médicos tradicionales."
  },
  Macizo: {
    titulo: "Útero de la Tierra", arquetipo: "La Gran Madre", proceso: "Gestación y transformación", color: "rgba(96, 46, 231, 0.6)",
    desc: "San Agustín y Silvia. Donde nace la estrella fluvial (Río Magdalena). Custodiado por los volcanes Puracé y Sotará. Sabiduría Misak y arcilla."
  },
  Guainia: {
    titulo: "Aguas de Unidad", arquetipo: "El Conciliador", proceso: "Reintegración de la memoria", color: "hsla(130, 92%, 29%, 1.00)",
    desc: "Los Cerros de Mavecure son la Tulpa Gigante de 3 piedras. Rocas más antiguas del planeta para unir los fuegos sagrados de los pueblos."
  },
  Sierra: {
    titulo: "Corazón Manifestador", arquetipo: "Guerrero Espiritual", proceso: "Propósito y dirección", color: "#0407a8ff",
    desc: "Sierra Nevada. Abrir el corazón y ordenar el pensamiento con los abuelos Koguis y Arhuacos para diseñar nuestra misión de vida."
  },
  Pacífico: {
    titulo: "Memoria del Océano", arquetipo: "Sanador Herido", proceso: "Limpieza de linaje y familia", color: "rgba(9, 114, 212, 1)",
    desc: "El parir de las ballenas Yubarta. Selva, mar limpio y la mezcla mágica de culturas Afro y Embera para sanar la historia familiar."
  },
  Putumayo: {
    titulo: "Bosque Medicina", arquetipo: "El Alquimista", proceso: "Integración y medicina interna", color: "rgba(107, 27, 27, 1)",
    desc: "Territorio del Jaguar. Transformación mística en el silencio sonoro de la selva agreste con plantas de poder."
  },
  Bogota: {
    titulo: "Círculo de Integración", arquetipo: "El Sabio", proceso: "Cierre consciente y luz del alma", color: "rgba(139, 21, 0, 1)",
    desc: "Laguna de Guatavita. El vientre de Bachué donde nació la gente. Encontramos el Oro del Alma para brillar en nuestro entorno."
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

  // 3. CAPTURA DE LEADS (COLUMNA INVISIBLE)
  const capturarLead = (nombre, correo, destinos) => {
    console.log("🐸 Lead para Drive:", { nombre, correo, destinos, fecha: new Date().toLocaleString() });
    // Aquí iría el fetch a Google Apps Script
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
            <button className="boton-brillante-grande" onClick={() => setPantallaActiva('quiz')}>Iniciar Diagnóstico</button>
            <button className="boton-omitir" onClick={() => { setPantallaActiva('app'); setSeccionInterna('home'); }}>Omitir al mapa</button>
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
                  <div key={index} className="tarjeta-resultado" style={{ borderLeft: `6px solid ${info.color}`, background: `${info.color}15` }}>
                    <h3 style={{ color: info.color }}>{info.titulo}</h3>
                    <p><strong>Arquetipo:</strong> {info.arquetipo}</p>
                    <p style={{ fontSize: '13px' }}>{info.desc}</p>
                  </div>
                );
              })}
            </div>
            <form onSubmit={enviarCorreoYEntrar} className="formulario-registro">
              <input
                type="text"
                placeholder="Tu nombre"
                required
                value={inputNombre}
                onChange={(e) => setInputNombre(e.target.value)}
                className="input-correo-elegante"
              />
              <input
                type="email"
                placeholder="Tu correo"
                required
                value={inputCorreo}
                onChange={(e) => setInputCorreo(e.target.value)}
                className="input-correo-elegante"
              />
              <button type="submit" className="boton-brillante-grande">
                Recibir mi Medicina y Entrar
              </button>
            </form>

            <form onSubmit={enviarCorreoYEntrar} className="formulario-registro">
              <input type="text" placeholder="¿Tu nombre, viajero?" required value={inputNombre} onChange={(e) => setInputNombre(e.target.value)} className="input-correo-elegante" />
              <input type="email" placeholder="Tu correo para enviarte los PDF..." required value={inputCorreo} onChange={(e) => setInputCorreo(e.target.value)} className="input-correo-elegante" />
              <button type="submit" className="boton-brillante-grande">Recibir mi Medicina y Entrar</button>
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
                    {Object.values(INFO_DESTINOS).map((d, i) => (
                      <div key={i} className="tarjeta-destino-estilo-nuevo" style={{ backgroundColor: `${d.color}33`, borderColor: d.color }}>
                        <h4 className="titulo-tarjeta" style={{ color: d.color }}>{d.titulo}</h4>
                        <p className="lugar-tarjeta">{d.arquetipo}</p> {/* Aquí iría "Alquimia de Agua" por ejemplo */}
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
                      {/* Aquí irían las fotos de los Misak, Emberas, etc */}
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
      default: return null;
    }
  };

  return (
    <div className="contenedor-maestro">
      {renderizarPantalla()}
      <Agente nombre={nombreUsuario} />
    </div>
  );
}