import React, { useState, useEffect } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes } from "firebase/storage";
import { db, storage } from "./firebase";
import './App.css';
import Mapa from './Mapa';
import Quiz from './Quiz';
import Agente from './Agente';

// 1. EL MAPA DE SABIDURÍA (Con rutas de fotos, colores vivos y nueva multimedia)
const INFO_DESTINOS = {
  Amazonas: {
    titulo: "Raíz Viva", arquetipo: "Ancestralidad", proceso: "Pertenencia y retorno al origen", color: "rgba(40, 114, 38, 1)",
    desc: "Tierra del pulmón verde. Conectamos con el Mundo de Adentro (Wiwa) y restauramos el equilibrio en la Maloka con médicos tradicionales.",
    foto: "/assets/amazonastarjeta.jpg",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    galeria: ["/assets/amz1.jpg", "/assets/amz2.jpg", "/assets/amz3.jpg"]
  },
  Macizo: {
    titulo: "Útero de la Tierra", arquetipo: "Nutrición", proceso: "Gestación y transformación", color: "rgba(138, 100, 240, 1)",
    desc: "San Agustín y Silvia. Donde nace la estrella fluvial (Río Magdalena). Custodiado por los volcanes Puracé y Sotará. Sabiduría Misak y arcilla.",
    foto: "/assets/macizotarjeta.jpg",
    video: "URL_VIDEO",
    galeria: ["/assets/mac1.jpg", "/assets/mac2.jpg"]
  },
  Guainia: {
    titulo: "Aguas de Unidad", arquetipo: "Conciliación", proceso: "Reintegración de la memoria", color: "hsla(130, 92%, 29%, 1.00)",
    desc: "Los Cerros de Mavecure son la Tulpa Gigante de 3 piedras. Rocas más antiguas del planeta para unir los fuegos sagrados de los pueblos.",
    foto: "/assets/guainiatarjeta.jpg",
    video: "URL_VIDEO",
    galeria: ["/assets/gua1.jpg", "/assets/gua2.jpg"]
  },
  Sierra: {
    titulo: "Corazón Manifestador", arquetipo: "Despertar", proceso: "Propósito y dirección", color: "#8d0f6eff",
    desc: "Sierra Nevada. Abrir el corazón y ordenar el pensamiento con los abuelos Koguis y Arhuacos para diseñar nuestra misión de vida.",
    foto: "/assets/sierratarjeta.jpg",
    video: "URL_VIDEO",
    galeria: ["/assets/sie1.jpg", "/assets/sie2.jpg"]
  },
  Pacífico: {
    titulo: "Memoria del Océano", arquetipo: "Sanación", proceso: "Limpieza de linaje y familia", color: "rgba(9, 114, 212, 1)",
    desc: "El parir de las ballenas Yubarta. Selva, mar limpio y la mezcla mágica de culturas Afro y Embera para sanar la historia familiar.",
    foto: "/assets/pacificotarjeta.jpg",
    video: "URL_VIDEO",
    galeria: ["/assets/pac1.jpg", "/assets/pac2.jpg"]
  },
  Putumayo: {
    titulo: "Bosque Medicina", arquetipo: "Alquimia", proceso: "Integración y medicina interna", color: "rgba(0, 61, 0, 1)",
    desc: "Territorio del Jaguar. Transformación mística en el silencio sonoro de la selva agreste con plantas de poder.",
    foto: "/assets/putumayotarjeta.jpg",
    video: "URL_VIDEO",
    galeria: ["/assets/put1.jpg", "/assets/put2.jpg"]
  },
  Bogota: {
    titulo: "Círculo de Integración", arquetipo: "Sabiduría", proceso: "Cierre consciente y luz del alma", color: "rgba(139, 21, 0, 1)",
    desc: "Laguna de Guatavita. El vientre de Bachué donde nació la gente. Encontramos el Oro del Alma para brillar en nuestro entorno.",
    foto: "/assets/bogotatarjeta.jpg",
    video: "URL_VIDEO",
    galeria: ["/assets/bog1.jpg", "/assets/bog2.jpg"]
  }
};

export default function App() {
  const [pantallaActiva, setPantallaActiva] = useState('landing');
  const [seccionInterna, setSeccionInterna] = useState('home');
  const [resultadosQuiz, setResultadosQuiz] = useState([]);
  const [nombreUsuario, setNombreUsuario] = useState('');
  const [inputNombre, setInputNombre] = useState('');
  const [inputCorreo, setInputCorreo] = useState('');

  // ESTADOS NUEVOS PARA LA NAVEGACIÓN MAPA -> TERRITORIO
  const [territorioActivo, setTerritorioActivo] = useState(null);
  const [cargandoDestino, setCargandoDestino] = useState(false);

  // ESTADOS DE BITÁCORA
  const [bitacoraTexto, setBitacoraTexto] = useState('');
  const [subiendoArchivo, setSubiendoArchivo] = useState(false);

  // 2. RECUPERAR MEMORIA
  useEffect(() => {
    const n = localStorage.getItem('ecoNombre');
    const c = localStorage.getItem('ecoEmail');
    if (n) { setNombreUsuario(n); setInputNombre(n); }
    if (c) setInputCorreo(c);
  }, []);

  // 3. CAPTURA DE LEADS
  const capturarLead = async (nombre, correo, destinos) => {
    console.log("🐸 Lead para Firebase:", { nombre, correo, destinos, fecha: new Date().toLocaleString() });
    try {
      const docRef = await addDoc(collection(db, "leads"), {
        nombre,
        correo,
        destinos,
        fecha: new Date().toISOString()
      });
      console.log("Lead guardado con ID: ", docRef.id);
    } catch (e) {
      console.error("Error añadiendo el lead: ", e);
    }
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

  // FUNCIÓN MAESTRA DE VIAJE (Los 5 segundos)
  const iniciarViaje = (nombreLugar) => {
    setTerritorioActivo(nombreLugar);
    setCargandoDestino(true);

    setTimeout(() => {
      setCargandoDestino(false);
      setSeccionInterna('detalle-territorio');
    }, 5000);
  };

  const guardarBitacora = async () => {
    if (!bitacoraTexto.trim()) return;
    setSubiendoArchivo(true);
    try {
      const timestamp = Date.now();
      const archivoRef = ref(storage, `bitacoras/${nombreUsuario || 'anon'}_${timestamp}.txt`);
      const blob = new Blob([bitacoraTexto], { type: "text/plain" });
      await uploadBytes(archivoRef, blob);
      alert("¡Bitácora guardada en la nube con éxito!");
      setBitacoraTexto('');
    } catch (error) {
      console.error("Error al subir bitácora", error);
      alert("Hubo un error al guardar tu bitácora.");
    }
    setSubiendoArchivo(false);
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
            <header className="header-app">
              <img src="/assets/logoecodestinos.png" alt="L" className="logo-header-pro" />
            </header>

            <div className="area-contenido-app">

              {/* --- 1. SECCIÓN HOME (MAPA GIGANTE INMERSIVO) --- */}
              {seccionInterna === 'home' && (
                <div className="contenedor-home-mapa-total">
                  <Mapa onMarkerClick={iniciarViaje} />

                  {/* BURBUJA DE TRANSICIÓN MÍSTICA (5 SEGUNDOS) */}
                  {cargandoDestino && (
                    <div className="burbuja-transicion fade-in">
                      <div className="halo-energia" style={{ borderColor: INFO_DESTINOS[territorioActivo].color }}></div>
                      <h2 style={{ color: INFO_DESTINOS[territorioActivo].color }}>
                        {territorioActivo.toUpperCase()}
                      </h2>
                      <p>{INFO_DESTINOS[territorioActivo].desc}</p>
                      <div className="barra-carga-ancestral">
                        <div className="progreso" style={{ backgroundColor: INFO_DESTINOS[territorioActivo].color }}></div>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* --- 2. SECCIÓN DETALLE TERRITORIO (NUEVA INTERFAZ MULTIMEDIA) --- */}
              {seccionInterna === 'detalle-territorio' && territorioActivo && (
                <div className="pagina-territorio fade-in">
                  <button className="boton-regresar" onClick={() => setSeccionInterna('home')}>← REGRESAR AL MAPA</button>

                  <div className="hero-territorio">
                    <img src={INFO_DESTINOS[territorioActivo].foto} alt="F" className="foto-cabecera" />
                    <div className="overlay-titulo">
                      <h1 className="cinzel-font">{territorioActivo.toUpperCase()}</h1>
                      <p className="arquetipo-sub">{INFO_DESTINOS[territorioActivo].arquetipo}</p>
                    </div>
                  </div>

                  <div className="contenido-multimedia-wrap">
                    <div className="bloque-texto">
                      <h3>Sabiduría del Territorio</h3>
                      <p className="texto-maestro">{INFO_DESTINOS[territorioActivo].desc}</p>
                    </div>

                    <div className="bloque-video">
                      <h3>Video Inmersivo</h3>
                      <video controls className="video-territorio" src={INFO_DESTINOS[territorioActivo].video}></video>
                    </div>

                    <div className="bloque-galeria">
                      <h3>Galería de Memorias</h3>
                      <div className="grid-galeria">
                        {INFO_DESTINOS[territorioActivo].galeria.map((img, idx) => (
                          <img key={idx} src={img} alt="G" className="img-galeria" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* --- 3. SECCIÓN MALOKA (TUS LÍNEAS ORIGINALES RESTAURADAS) --- */}
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

              {/* --- 4. SECCIÓN MI RUTA (TUS LÍNEAS ORIGINALES RESTAURADAS) --- */}
              {seccionInterna === 'miruta' && (
                <div className="fade-in p-20">
                  <h2 style={{ color: '#064E3B' }}>Mi Bitácora de Viaje</h2>
                  <div className="modulo-mapa-offline">
                    <button className="boton-secundario">📍 Localización en el Territorio</button>
                    <button className="boton-secundario">🗺️ Mapas Offline (Maps.me)</button>
                  </div>
                  <div className="grabadora-experiencia" style={{ marginTop: '30px' }}>
                    <h3>🎙️ Graba tu sentir hoy (o escríbelo en tu bitácora)</h3>
                    <p style={{ fontSize: '12px' }}>Tus registros se guardarán para tu integración post-viaje.</p>
                    <textarea
                      className="caja-texto"
                      placeholder="Escribe o graba aquí tus procesos emocionales..."
                      value={bitacoraTexto}
                      onChange={(e) => setBitacoraTexto(e.target.value)}
                    ></textarea>
                    <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
                      <button className="boton-microfono">🔴 Iniciar Audio (Próximamente)</button>
                      <button
                        className="boton-brillante-grande"
                        onClick={guardarBitacora}
                        disabled={subiendoArchivo || !bitacoraTexto.trim()}
                        style={{ padding: '10px 20px', fontSize: '14px' }}
                      >
                        {subiendoArchivo ? "Guardando en la Nube..." : "☁️ Guardar Texto"}
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* --- 5. SECCIÓN COMUNIDADES (TUS LÍNEAS ORIGINALES RESTAURADAS) --- */}
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
      <Analytics />
    </div>
  );
}