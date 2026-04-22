import React, { useState, useEffect } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes } from "firebase/storage";
import { useTranslation } from 'react-i18next';
import { db, storage } from "./firebase";
import './App.css';
import Mapa from './Mapa';
import Quiz from './Quiz';
import Agente from './Agente';
import Amazonas from './Amazonas';
import Putumayo from './Putumayo';
import Macizo from './Macizo';
import Guainia from './Guainia';
import Sierra from './Sierra';
import Pacifico from './Pacifico';
import Bogota from './Bogota';
import Medellin from './Medellin';
import MiRuta from './MiRuta';

// 1. EL MAPA DE SABIDURÍA (Con rutas de fotos, colores vivos y nueva multimedia)
const INFO_DESTINOS = {
  Amazonas: {
    titulo: "Raíz Viva", arquetipo: "Ancestralidad", proceso: "Equilibrio y Arraigo", color: "rgba(40, 114, 38, 1)",
    desc: "Tierra del pulmón verde. Conectamos con el Mundo de Adentro (Wiwa) y restauramos el equilibrio en la Maloka con médicos tradicionales.",
    foto: "/assets/amazonastarjeta.jpg",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    galeria: ["/assets/amz1.jpg", "/assets/amz2.jpg", "/assets/amz3.jpg"]
  },
  Macizo: {
    titulo: "Útero de la Tierra", arquetipo: "Nutrición", proceso: "Gestación y Transformación", color: "rgba(138, 100, 240, 1)",
    desc: "San Agustín y Silvia. Donde nace la estrella fluvial (Río Magdalena). Custodiado por los volcanes Puracé y Sotará. Sabiduría Misak y arcilla.",
    foto: "/assets/macizotarjeta.jpg",
    video: "URL_VIDEO",
    galeria: ["/assets/mac1.jpg", "/assets/mac2.jpg"]
  },
  Guainia: {
    titulo: "Aguas de Unidad", arquetipo: "Conciliación", proceso: "Integración y Unidad", color: "hsla(130, 92%, 29%, 1.00)",
    desc: "Los Cerros de Mavecure son la Tulpa Gigante de 3 piedras. Rocas más antiguas del planeta para unir los fuegos sagrados de los pueblos.",
    foto: "/assets/guainiatarjeta.jpg",
    video: "URL_VIDEO",
    galeria: ["/assets/gua1.jpg", "/assets/gua2.jpg"]
  },
  Sierra: {
    titulo: "Corazón Manifestador", arquetipo: "Despertar", proceso: "Manifestación y Propósito", color: "#8d0f6eff",
    desc: "Sierra Nevada. Abrir el corazón y ordenar el pensamiento con los abuelos Koguis y Arhuacos para diseñar nuestra misión de vida.",
    foto: "/assets/sierratarjeta.jpg",
    video: "URL_VIDEO",
    galeria: ["/assets/sie1.jpg", "/assets/sie2.jpg"]
  },
  Pacífico: {
    titulo: "Memoria del Océano", arquetipo: "Memoria", proceso: "Emoción y Escucha", color: "rgba(9, 114, 212, 1)",
    desc: "El parir de las ballenas Yubarta. Selva, mar limpio y la mezcla mágica de culturas Afro y Embera para equilibrar e integrar la historia familiar.",
    foto: "/assets/pacificotarjeta.jpg",
    video: "URL_VIDEO",
    galeria: ["/assets/pac1.jpg", "/assets/pac2.jpg"]
  },
  Putumayo: {
    titulo: "Bosque Medicina", arquetipo: "Alquimia", proceso: "Transición e Integración", color: "rgba(0, 61, 0, 1)",
    desc: "Territorio del Jaguar. Transformación mística en el silencio sonoro de la selva agreste con plantas de poder.",
    foto: "/assets/putumayotarjeta.jpg",
    video: "URL_VIDEO",
    galeria: ["/assets/put1.jpg", "/assets/put2.jpg"]
  },
  Bogota: {
    titulo: "Círculo de Integración", arquetipo: "Sabiduría", proceso: "Conciencia y Comprensión", color: "rgba(139, 21, 0, 1)",
    desc: "Laguna de Guatavita. El vientre de Bachué donde nació la gente. Encontramos el Oro del Alma para brillar en nuestro entorno.",
    foto: "/assets/bogotatarjeta.jpg",
    video: "URL_VIDEO",
    galeria: ["/assets/bog1.jpg", "/assets/bog2.jpg"]
  },
  Medellin: {
    titulo: "Territorio de Acción", arquetipo: "Expansión", proceso: "Acción y Movimiento", color: "#E65100",
    desc: "Ideal para activar proyectos, salir de la pausa y transformar la realidad a través del movimiento.",
    foto: "/assets/icon_medellin.png",
    video: "URL_VIDEO",
    galeria: []
  }
};

export default function App() {
  const { t, i18n } = useTranslation();

  const [pantallaActiva, setPantallaActiva] = useState('landing');
  const [seccionInterna, setSeccionInterna] = useState('home');
  const [resultadosQuiz, setResultadosQuiz] = useState([]);
  const [nombreUsuario, setNombreUsuario] = useState('');
  const [inputNombre, setInputNombre] = useState('');
  const [inputCorreo, setInputCorreo] = useState('');
  const [erroresValidacion, setErroresValidacion] = useState({ nombre: '', correo: '' });

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
    let errores = { nombre: '', correo: '' };
    let valido = true;

    if (inputNombre.trim() === '') {
      errores.nombre = t('validation.error_nombre', { defaultValue: 'Por favor, ingresa tu nombre.' });
      valido = false;
    }
    if (inputCorreo.trim() === '') {
      errores.correo = t('validation.error_correo', { defaultValue: 'Por favor, ingresa tu correo electrónico.' });
      valido = false;
    }

    setErroresValidacion(errores);

    if (valido) {
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
      alert(t('app.save_success'));
      setBitacoraTexto('');
    } catch (error) {
      console.error("Error al subir bitácora", error);
      alert(t('app.save_error'));
    }
    setSubiendoArchivo(false);
  };

  const renderizarPantalla = () => {
    switch (pantallaActiva) {
      case 'landing':
        return (
          <div className="pantalla-centrada fade-in">
            <img src={t('logo_circular')} alt="Ecodestinos" className="logo-landing" />
            <h1 className="titulo-principal">{t('landing.title')}</h1>
            <p className="texto-tagline" style={{ fontWeight: 'bold', color: '#064E3B' }}>{t('landing.tagline')}</p>

            <div className="selector-idioma">
              <button className={i18n.language === 'es' ? 'idioma-activo' : ''} onClick={() => i18n.changeLanguage('es')}>🇨🇴 ES</button>
              <button className={i18n.language === 'en' ? 'idioma-activo' : ''} onClick={() => i18n.changeLanguage('en')}>🇺🇸 EN</button>
              <button className={i18n.language === 'de' ? 'idioma-activo' : ''} onClick={() => i18n.changeLanguage('de')}>🇩🇪 DE</button>
              <button className={i18n.language === 'fr' ? 'idioma-activo' : ''} onClick={() => i18n.changeLanguage('fr')}>🇫🇷 FR</button>
            </div>

            <button className="boton-brillante-grande" onClick={() => setPantallaActiva('quiz')}>{t('landing.start')}</button>
            <button className="boton-omitir" onClick={() => { setPantallaActiva('app'); setSeccionInterna('home'); }}>{t('landing.skip')}</button>
          </div>
        );

      case 'quiz':
        return <Quiz alTerminar={(res) => { setResultadosQuiz(res); setPantallaActiva('procesando'); setTimeout(() => setPantallaActiva('resultados'), 3500); }} />;

      case 'procesando':
        return (
          <div className="pantalla-centrada fade-in">
            <div className="contenedor-agente-magico"><div className="halo-azul"></div><img src="/assets/agente.png" alt="A" className="agente-pequeno" /></div>
            <p className="texto-exotico">{t('procesando.rana')}</p>
          </div>
        );

      case 'resultados':
        return (
          <div className="pantalla-centrada fade-in">
            <h2 className="titulo-resultados">{t('resultados.title')}</h2>
            <p className="texto-intro-resultados" style={{ fontSize: '15px', fontStyle: 'italic', marginBottom: '20px', color: '#064E3B', padding: '0 10px' }}>
              {t('destinos.intro')}
            </p>
            <div className="contenedor-tarjetas">
              {resultadosQuiz.map((clave, index) => {
                const info = INFO_DESTINOS[clave] || INFO_DESTINOS['Amazonas'];
                // Obtener datos traducidos
                const tInfo = t(`destinos.${clave}`, { returnObjects: true });
                return (
                  <div key={index} className="tarjeta-resultado" style={{ borderLeft: `6px solid ${info.color}` }}>
                    <span className="nombre-geografico-label" style={{ color: info.color }}>{clave.toUpperCase()}</span>
                    <h3 style={{ color: info.color }}>{tInfo.title || info.titulo}</h3>
                    <p className="arquetipo-tag" style={{ color: info.color }}>{(tInfo.archetype || info.arquetipo).toUpperCase()}</p>
                    <p style={{ fontSize: '13px' }}>{tInfo.desc || info.desc}</p>
                  </div>
                );
              })}
            </div>
            <p className="texto-cierre-resultados" style={{ fontSize: '15px', fontWeight: 'bold', marginTop: '20px', marginBottom: '20px', color: '#064E3B', padding: '0 10px' }}>
              {t('destinos.cierre')}
            </p>
            <form onSubmit={enviarCorreoYEntrar} className="formulario-registro">
              <div className="fila-registro">
                <label className="etiqueta-input">{t('resultados.name_label')}</label>
                <input type="text" value={inputNombre} onChange={(e) => setInputNombre(e.target.value)} className="input-correo-elegante" />
                {erroresValidacion.nombre && <span style={{ color: '#D32F2F', fontSize: '12px', marginTop: '4px', display: 'block' }}>{erroresValidacion.nombre}</span>}
              </div>
              <div className="fila-registro">
                <label className="etiqueta-input">{t('resultados.email_label')}</label>
                <input type="email" value={inputCorreo} onChange={(e) => setInputCorreo(e.target.value)} className="input-correo-elegante" />
                {erroresValidacion.correo && <span style={{ color: '#D32F2F', fontSize: '12px', marginTop: '4px', display: 'block' }}>{erroresValidacion.correo}</span>}
              </div>
              <button type="submit" className="boton-brillante-grande">{t('resultados.button')}</button>
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
                      <p>{t(`destinos.${territorioActivo}.desc`)}</p>
                      <div className="barra-carga-ancestral">
                        <div className="progreso" style={{ backgroundColor: INFO_DESTINOS[territorioActivo].color }}></div>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* --- 2. SECCIÓN DETALLE TERRITORIO (MODULARIZADA) --- */}
              {seccionInterna === 'detalle-territorio' && territorioActivo && (
                <>
                  {territorioActivo === 'Amazonas' && <Amazonas info={INFO_DESTINOS[territorioActivo]} onVolver={() => setSeccionInterna('home')} />}
                  {territorioActivo === 'Putumayo' && <Putumayo info={INFO_DESTINOS[territorioActivo]} onVolver={() => setSeccionInterna('home')} />}
                  {territorioActivo === 'Macizo' && <Macizo info={INFO_DESTINOS[territorioActivo]} onVolver={() => setSeccionInterna('home')} />}
                  {territorioActivo === 'Guainia' && <Guainia info={INFO_DESTINOS[territorioActivo]} onVolver={() => setSeccionInterna('home')} />}
                  {territorioActivo === 'Sierra' && <Sierra info={INFO_DESTINOS[territorioActivo]} onVolver={() => setSeccionInterna('home')} />}
                  {territorioActivo === 'Pacífico' && <Pacifico info={INFO_DESTINOS[territorioActivo]} onVolver={() => setSeccionInterna('home')} />}
                  {territorioActivo === 'Bogota' && <Bogota info={INFO_DESTINOS[territorioActivo]} onVolver={() => setSeccionInterna('home')} />}
                  {territorioActivo === 'Medellin' && <Medellin info={INFO_DESTINOS[territorioActivo]} onVolver={() => setSeccionInterna('home')} />}
                </>
              )}

              {/* --- 3. SECCIÓN MALOKA (TUS LÍNEAS ORIGINALES RESTAURADAS) --- */}
              {seccionInterna === 'maloka' && (
                <div className="fade-in p-20">
                  <h2 style={{ color: '#064E3B' }}>{t('maloka.title')}</h2>
                  <div className="tarjeta-multimedia">
                    <h3>{t('maloka.workshop1_title')}</h3>
                    <p>{t('maloka.workshop1_desc')}</p>
                    <div className="video-fake">{t('maloka.workshop1_btn')}</div>
                  </div>
                  <div className="tarjeta-multimedia" style={{ marginTop: '20px' }}>
                    <h3>{t('maloka.audio1_title')}</h3>
                    <p>{t('maloka.audio1_desc')}</p>
                  </div>
                  <div className="tarjeta-multimedia" style={{ marginTop: '20px' }}>
                    <h3>{t('maloka.podcast1_title')}</h3>
                    <p>{t('maloka.podcast1_desc')}</p>
                  </div>
                </div>
              )}

              {/* --- 4. SECCIÓN MI RUTA (CON SPEECH TO TEXT) --- */}
              {seccionInterna === 'miruta' && <MiRuta />}

              {/* --- 5. SECCIÓN COMUNIDADES (TUS LÍNEAS ORIGINALES RESTAURADAS) --- */}
              {seccionInterna === 'comunidades' && (
                <div className="fade-in p-20">
                  <h2 style={{ color: '#064E3B' }}>{t('comunidades.title')}</h2>
                  <div className="modulo-comunidad">
                    <h3>{t('comunidades.partners_title')}</h3>
                    <p>{t('comunidades.partners_desc')}</p>
                    <div className="tarjeta-transparencia">
                      <p><strong>{t('comunidades.transparency_title')}</strong> {t('comunidades.transparency_desc')}</p>
                    </div>
                    <div className="galeria-fotos-comu">
                      <div className="foto-placeholder">{t('comunidades.gallery')}</div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <nav className="barra-navegacion">
              <button onClick={() => setSeccionInterna('home')} className={seccionInterna === 'home' ? 'activo' : ''}>
                <img src="/assets/home.png" alt="h" className="icono-nav" /><span>{t('nav.home')}</span>
              </button>
              <button onClick={() => setSeccionInterna('maloka')} className={seccionInterna === 'maloka' ? 'activo' : ''}>
                <img src="/assets/maloka.png" alt="m" className="icono-nav" /><span>{t('nav.maloka')}</span>
              </button>
              <button onClick={() => setSeccionInterna('miruta')} className={seccionInterna === 'miruta' ? 'activo' : ''}>
                <img src="/assets/miruta.png" alt="r" className="icono-nav" /><span>{t('nav.route')}</span>
              </button>
              <button onClick={() => setSeccionInterna('comunidades')} className={seccionInterna === 'comunidades' ? 'activo' : ''}>
                <img src="/assets/comunidades.png" alt="c" className="icono-nav" /><span>{t('nav.community')}</span>
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