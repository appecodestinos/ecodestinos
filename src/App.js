import React, { useState, useEffect } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { collection, addDoc } from "firebase/firestore";
import { useTranslation } from 'react-i18next';
import { db } from "./firebase";
import './App.css';
import Mapa from './Mapa';
import Quiz from './Quiz';
import Agente from './Agente';
import Amazonas from './Amazonas';
import Putumayo from './Putumayo';
import Macizo from './Macizo';
import Guainia from './Guainia';
import SierraNevada from './SierraNevada';
import Pacifico from './Pacifico';
import SabanaDeBogota from './SabanaDeBogota';
import Antioquia from './Antioquia';
import MiRuta from './MiRuta';

const INFO_DESTINOS = {
  Amazonas: {
    titulo: "Amazonía", arquetipo: "Raíz · Equilibrio", proceso: "Equilibrio y Arraigo", color: "rgba(40, 114, 38, 1)",
    desc: "Invita a volver a lo esencial, reconocer lo que nos sostiene y recuperar sentido de pertenencia y equilibrio en la selva profunda.",
    foto: "/assets/amazonastarjeta.jpg",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    galeria: ["/assets/amz1.jpg", "/assets/amz2.jpg", "/assets/amz3.jpg"]
  },
  Macizo: {
    titulo: "Macizo / San Agustín", arquetipo: "Renacer · Intención", proceso: "Gestación y Transformación", color: "rgba(138, 100, 240, 1)",
    desc: "Invita a sembrar una intención, soltar aquello que ya cumplió su ciclo y abrir espacio para lo nuevo en el origen de las aguas.",
    foto: "/assets/macizotarjeta.jpg",
    video: "URL_VIDEO",
    galeria: ["/assets/mac1.jpg", "/assets/mac2.jpg"]
  },
  Guainia: {
    titulo: "Guainía", arquetipo: "Amor · Relación", proceso: "Integración y Unidad", color: "hsla(130, 92%, 29%, 1.00)",
    desc: "Invita al encuentro, la escucha, la reciprocidad y al cuidado de los vínculos sagrados entre cerros milenarios.",
    foto: "/assets/guainiatarjeta.jpg",
    video: "URL_VIDEO",
    galeria: ["/assets/gua1.jpg", "/assets/gua2.jpg"]
  },
  SierraNevada: {
    titulo: "Sierra Nevada", arquetipo: "Manifestación", proceso: "Manifestación y Propósito", color: "#8d0f6eff",
    desc: "Invita a materializar, llevar la intención a la acción y dar forma tangible a aquello que viene gestándose.",
    foto: "/assets/sierranevadatarjeta.jpg",
    video: "URL_VIDEO",
    galeria: ["/assets/sie1.jpg", "/assets/sie2.jpg"],
    destacado: true
  },
  Pacífico: {
    titulo: "Pacífico", arquetipo: "Linaje · Sonido", proceso: "Emoción y Escucha", color: "rgba(9, 114, 212, 1)",
    desc: "Invita a escuchar la memoria, reconocer nuestras raíces y conectar con aquello que nos precede.",
    foto: "/assets/pacificotarjeta.jpg",
    video: "URL_VIDEO",
    galeria: ["/assets/pac1.jpg", "/assets/pac2.jpg"]
  },
  Putumayo: {
    titulo: "Putumayo / Caquetá", arquetipo: "Alquimia · Transición", proceso: "Transición e Integración", color: "rgba(0, 61, 0, 1)",
    desc: "Invita a transformar la energía, profundizar en el silencio interior y asentarse en un nuevo equilibrio.",
    foto: "/assets/putumayotarjeta.jpg",
    video: "URL_VIDEO",
    galeria: ["/assets/put1.jpg", "/assets/put2.jpg"]
  },
  SabanaDeBogota: {
    titulo: "Bogotá / Sabana", arquetipo: "Conciencia · Claridad", proceso: "Conciencia y Comprensión", color: "rgba(139, 21, 0, 1)",
    desc: "Invita a observar, integrar, comprender y elegir con mayor claridad de pensamiento.",
    foto: "/assets/bogotatarjeta.jpg",
    video: "URL_VIDEO",
    galeria: ["/assets/bog1.jpg", "/assets/bog2.jpg"]
  },
  Bogota: {
    titulo: "Bogotá / Sabana", arquetipo: "Conciencia · Claridad", proceso: "Conciencia y Comprensión", color: "rgba(139, 21, 0, 1)",
    desc: "Invita a observar, integrar, comprender y elegir con mayor claridad de pensamiento.",
    foto: "/assets/bogotatarjeta.jpg",
    video: "URL_VIDEO",
    galeria: ["/assets/bog1.jpg", "/assets/bog2.jpg"]
  },
  Antioquia: {
    titulo: "Antioquia / Zona Cafetera", arquetipo: "Fuerza · Vitalidad", proceso: "Acción y Movimiento", color: "#E65100",
    desc: "Invita a activar la fuerza interior, transformar y poner en movimiento aquello que necesita acción y creación.",
    foto: "/assets/medellintarjeta.jpg",
    video: "URL_VIDEO",
    galeria: [],
    destacado: true
  }
};

export default function App() {
  const { t, i18n } = useTranslation();

  const [pantallaActiva, setPantallaActiva] = useState('landing');
  const [seccionInterna, setSeccionInterna] = useState('home');
  const [resultadosQuiz, setResultadosQuiz] = useState([]);
  const [inputNombre, setInputNombre] = useState('');
  const [inputCorreo, setInputCorreo] = useState('');
  const [erroresValidacion, setErroresValidacion] = useState({ nombre: '', correo: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [mensajeErrorDetallado, setMensajeErrorDetallado] = useState('');

  const [territorioActivo, setTerritorioActivo] = useState(null);
  const [flashActivo, setFlashActivo] = useState(false);

  useEffect(() => {
    const n = localStorage.getItem('ecoNombre');
    const c = localStorage.getItem('ecoEmail');
    if (n) { setInputNombre(n); }
    if (c) setInputCorreo(c);
  }, []);

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

  const enviarCorreoYEntrar = async (e) => {
    e.preventDefault();
    let errores = { nombre: '', correo: '' };
    let valido = true;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (inputNombre.trim() === '') {
      errores.nombre = t('validation.error_nombre', { defaultValue: 'Por favor, ingresa tu nombre.' });
      valido = false;
    }
    if (inputCorreo.trim() === '') {
      errores.correo = t('validation.error_correo', { defaultValue: 'Por favor, ingresa tu correo electrónico.' });
      valido = false;
    } else if (!emailRegex.test(inputCorreo.trim())) {
      errores.correo = t('validation.error_correo_valido', { defaultValue: 'Por favor, ingresa un correo electrónico válido.' });
      valido = false;
    }

    setErroresValidacion(errores);

    if (valido) {
      setIsLoading(true);
      setIsError(false);
      setMensajeErrorDetallado('');
      try {
        await capturarLead(inputNombre.trim(), inputCorreo.trim(), resultadosQuiz);

        const response = await fetch('/api/submitLead', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            nombre: inputNombre.trim(),
            correo: inputCorreo.trim(),
            destinos: resultadosQuiz
          })
        });

        let resData = null;
        const contentType = response.headers.get('content-type');
        if (contentType && contentType.includes('application/json')) {
          resData = await response.json().catch(() => null);
        }

        if (response.ok) {
          console.log("🟢 [Frontend] Lead y correo enviados con éxito:", resData);
          setIsSuccess(true);
          localStorage.setItem('ecoNombre', inputNombre.trim());
          localStorage.setItem('ecoEmail', inputCorreo.trim());
        } else {
          console.warn(`⚠️ [Frontend] /api/submitLead status ${response.status}:`, resData);
          const msg = resData?.brevoError?.message || resData?.message || '';

          if (response.status === 404) {
            console.log("🟢 [Frontend] Lead registrado en Firebase (API local 404). Permitiendo entrada al mapa.");
            setIsSuccess(true);
            localStorage.setItem('ecoNombre', inputNombre.trim());
            localStorage.setItem('ecoEmail', inputCorreo.trim());
          } else {
            setMensajeErrorDetallado(msg);
            setIsError(true);
          }
        }
      } catch (error) {
        console.error("🔴 [Frontend] Excepción al enviar el correo:", error);
        setIsSuccess(true);
        localStorage.setItem('ecoNombre', inputNombre.trim());
        localStorage.setItem('ecoEmail', inputCorreo.trim());
      } finally {
        setIsLoading(false);
      }
    }
  };

  const iniciarViaje = (nombreLugar) => {
    setTerritorioActivo(nombreLugar);
    setFlashActivo(true);

    setTimeout(() => {
      setSeccionInterna('detalle-territorio');
      setFlashActivo(false);
    }, 600);
  };

  const volverAlMapa = () => {
    setSeccionInterna('home');
    setTerritorioActivo(null);
  };

  const renderizarPantalla = () => {
    switch (pantallaActiva) {
      case 'landing':
        return (
          <div className="pantalla-centrada fade-in" style={{
            background: "linear-gradient(rgba(15, 38, 25, 0.5), rgba(15, 38, 25, 0.7)), url('/assets/fondo-app-landing.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "100vh"
          }}>
            <img src={t('logo_circular')} alt="Ecodestinos" className="logo-landing" />
            <div className="main-title-container">
              <h1 className="main-title">
                <span className="t-dorado">{t('landing_ui.title_1')}</span>
                <br />
                <span className="t-blanco">{t('landing_ui.title_2')}</span>
              </h1>
            </div>
            <p className="subtitle-text">
              {t('landing_ui.sub_1')}
              <span className="dorado-vivo">{t('landing_ui.sub_highlight')}</span>
              {t('landing_ui.sub_2')}
            </p>

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
          <div className="pantalla-carga fade-in" style={{
            background: "linear-gradient(rgba(15, 38, 25, 0.8), rgba(15, 38, 25, 0.95)), url('/assets/fondo-app-quiz.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "100vh",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            position: "fixed",
            inset: 0,
            zIndex: 9999
          }}>
            <div className="contenedor-agente-magico"><div className="halo-azul"></div><img src="/assets/agente.png" alt="A" className="agente-pequeno" /></div>
            <p className="texto-exotico">{t('procesando.rana')}</p>
          </div>
        );

      case 'resultados':
        return (
          <div className="pantalla-centrada contenedor-resultados fade-in" style={{
            background: "linear-gradient(rgba(15, 38, 25, 0.7), rgba(15, 38, 25, 0.9)), url('/assets/fondo-app-home.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "100vh"
          }}>
            <h2 className="titulo-resultados">{t('resultados.title')}</h2>
            <div className="contenedor-tarjetas grid-resultados">
              {resultadosQuiz.map((clave, index) => {
                const info = INFO_DESTINOS[clave] || INFO_DESTINOS['Amazonas'];
                const tInfo = t(`destinos.${clave}`, { returnObjects: true });
                const nombreDestino = clave === 'SierraNevada' ? 'Sierra Nevada' : (clave === 'SabanaDeBogota' || clave === 'Bogota' ? 'Bogotá / Sabana' : (clave === 'Antioquia' || clave === 'Medellin' ? 'Antioquia / Zona Cafetera' : (clave === 'Macizo' ? 'Macizo / San Agustín' : clave)));
                return (
                  <div key={index} className="result-card-container">
                    {info.foto && (
                      <img src={info.foto} alt={tInfo.title || info.titulo} className="result-card-image" />
                    )}

                    <div className="header-destino">
                      <h4 className="destino-geografico">{nombreDestino}</h4>
                      <h1 className="titulo-premium">{tInfo.title || info.titulo}</h1>
                      {tInfo.archetype && (
                        <p style={{ color: '#F39C12', fontWeight: 'bold', fontSize: '14px', margin: '4px 0 8px 0' }}>{tInfo.archetype}</p>
                      )}
                    </div>

                    <p className="descripcion-premium">{tInfo.desc || info.desc}</p>
                  </div>
                );
              })}
            </div>
            <p className="texto-cierre-resultados" style={{ fontSize: '15px', fontWeight: 'bold', marginTop: '20px', marginBottom: '20px', color: '#064E3B', padding: '0 10px' }}>
              {t('frase_final')}
            </p>
            {isSuccess ? (
              <div className="mensaje-exito" style={{ marginTop: '20px', padding: '20px', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '15px', border: '1px solid #064E3B', textAlign: 'center' }}>
                <p style={{ color: '#064E3B', fontSize: '18px', fontWeight: 'bold', marginBottom: '15px' }}>
                  ¡El viaje ha comenzado! Revisa tu correo electrónico para ver tus rutas (revisa también tu bandeja de spam).
                </p>
                <button onClick={() => { setPantallaActiva('app'); setSeccionInterna('home'); }} className="boton-brillante-grande">
                  Entrar al Mapa
                </button>
              </div>
            ) : (
              <form onSubmit={enviarCorreoYEntrar} className="formulario-registro">
                <div className="fila-registro">
                  <label className="etiqueta-input">{t('resultados.name_label')}</label>
                  <input type="text" value={inputNombre} onChange={(e) => setInputNombre(e.target.value)} className="input-correo-elegante" disabled={isLoading} />
                  {erroresValidacion.nombre && <span style={{ color: '#D32F2F', fontSize: '12px', marginTop: '4px', display: 'block' }}>{erroresValidacion.nombre}</span>}
                </div>
                <div className="fila-registro">
                  <label className="etiqueta-input">{t('resultados.email_label')}</label>
                  <input type="email" value={inputCorreo} onChange={(e) => setInputCorreo(e.target.value)} className="input-correo-elegante" disabled={isLoading} />
                  {erroresValidacion.correo && <span style={{ color: '#D32F2F', fontSize: '12px', marginTop: '4px', display: 'block' }}>{erroresValidacion.correo}</span>}
                </div>
                {isError && (
                  <div style={{ color: '#FFCDD2', fontSize: '13px', marginTop: '10px', textAlign: 'center', backgroundColor: 'rgba(211, 47, 47, 0.25)', padding: '12px', borderRadius: '10px', border: '1px solid #EF5350' }}>
                    <p style={{ margin: 0, fontWeight: 'bold' }}>Hubo un error al conectar. Por favor, intenta de nuevo.</p>
                    {mensajeErrorDetallado && <p style={{ margin: '6px 0 0 0', fontSize: '12px', color: '#FFF' }}><strong>Brevo:</strong> {mensajeErrorDetallado}</p>}
                  </div>
                )}
                <button type="submit" className="boton-brillante-grande" disabled={isLoading}>
                  {isLoading ? 'Enviando...' : t('resultados.button')}
                </button>
              </form>
            )}
          </div>
        );

      case 'app':
        return (
          <div className="aplicacion-movil">
            <header className="header-app">
              <img src="/assets/logoecodestinos.png" alt="L" className="logo-header-pro" />
            </header>

            <div className="area-contenido-app">

              {seccionInterna === 'home' && (
                <div className="contenedor-home-mapa-total">
                  <Mapa onMarkerClick={iniciarViaje} />
                </div>
              )}

              {seccionInterna === 'detalle-territorio' && territorioActivo && (
                <>
                  {territorioActivo === 'Amazonas' && <Amazonas info={INFO_DESTINOS[territorioActivo]} onVolver={volverAlMapa} />}
                  {territorioActivo === 'Putumayo' && <Putumayo info={INFO_DESTINOS[territorioActivo]} onVolver={volverAlMapa} />}
                  {territorioActivo === 'Macizo' && <Macizo info={INFO_DESTINOS[territorioActivo]} onVolver={volverAlMapa} />}
                  {territorioActivo === 'Guainia' && <Guainia info={INFO_DESTINOS[territorioActivo]} onVolver={volverAlMapa} />}
                  {territorioActivo === 'SierraNevada' && <SierraNevada info={INFO_DESTINOS[territorioActivo]} onVolver={volverAlMapa} />}
                  {territorioActivo === 'Pacífico' && <Pacifico info={INFO_DESTINOS[territorioActivo]} onVolver={volverAlMapa} />}
                  {territorioActivo === 'SabanaDeBogota' && <SabanaDeBogota info={INFO_DESTINOS[territorioActivo]} onVolver={volverAlMapa} />}
                  {territorioActivo === 'Antioquia' && <Antioquia info={INFO_DESTINOS[territorioActivo]} onVolver={volverAlMapa} />}
                </>
              )}

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

              {seccionInterna === 'miruta' && <MiRuta />}

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

            <Agente nombre={inputNombre} />

            {flashActivo && (
              <div style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'white',
                zIndex: 99999,
                pointerEvents: 'none',
                animation: 'efectoFlash 0.8s ease-out forwards'
              }}>
                <style>
                  {`@keyframes efectoFlash { 0% { opacity: 1; } 100% { opacity: 0; } }`}
                </style>
              </div>
            )}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="App">
      {renderizarPantalla()}
      <Analytics />
    </div>
  );
}