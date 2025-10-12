import React, { useState } from 'react';

// Importa la librería y sus estilos
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";

// --- Helper Components ---

interface CheckListItemProps {
  children: React.ReactNode;
  checkColor?: string;
}

const CheckListItem: React.FC<CheckListItemProps> = ({ children, checkColor = "text-cyan-400" }) => (
  <li className="flex items-start space-x-3">
    <svg className={`flex-shrink-0 h-6 w-6 ${checkColor}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
    </svg>
    <span className="text-gray-300">{children}</span>
  </li>
);

interface ImageCardProps {
  src: string;
  title: string;
  onClick: () => void;
}

const ImageCard: React.FC<ImageCardProps> = ({ src, title, onClick }) => (
    <div className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden group">
        <img 
            src={src} 
            alt={title} 
            className="w-full cursor-pointer group-hover:opacity-80 transition-opacity" 
            onClick={onClick}
        />
        <div className="p-3 bg-gray-900">
            <p className="text-sm text-center text-gray-400 font-medium">{title}</p>
        </div>
    </div>
);


// --- Componente principal de la App ---

const App: React.FC = () => {
    // Estado para gestionar qué imagen está abierta en el Lightbox
    const [open, setOpen] = useState(false);
    const [imageIndex, setImageIndex] = useState(0);

    const openLightbox = (index: number) => {
        setImageIndex(index);
        setOpen(true);
    };

    const images = [
        { src: "/form-screenshot.png", title: "Tu formulario personalizado - Fácil de rellenar para el cliente" },
        { src: "/email-cliente.png", title: "Email profesional que recibe el cliente al instante" },
        { src: "/email-equipo-con-imagen.png", title: "Notificación al equipo cuando HAY imagen de referencia" },
        { src: "/email-equipo-sin-imagen.png", title: "Notificación diferente cuando NO subió imagen" },
        { src: "/sheets-leads.png", title: "Todas las consultas organizadas en tu Sheets" },
        { src: "/drive-screenshot.png", title: "Imágenes guardadas automáticamente en Drive" },
        { src: "/sheets-metrics.png", title: "Métricas automáticas: cuántos leads completos vs incompletos" }
    ];

  return (
    <div className="bg-gray-900 antialiased text-gray-300">
      <main>
        {/* Hero Section */}
        <section className="relative py-20 sm:py-32 text-center">
            <div className="absolute inset-0 bg-gray-900/80 backdrop-blur-sm"></div>
            <div 
                className="absolute inset-0 bg-no-repeat bg-center bg-cover"
                style={{backgroundImage: 'url(https://picsum.photos/1920/1080?grayscale&blur=5)', opacity: '0.1'}}
            ></div>
            <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
                    Deja de perder horas con DMs. <span className="gradient-text">Automatiza tu formulario de consultas.</span>
                </h1>
                <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-300">
                    ¿Cansado de responder las mismas preguntas por Instagram? Te instalo un sistema profesional que organiza todas tus consultas en un solo lugar.
                </p>
                <div className="mt-10">
                    <a href="#pricing" className="px-8 py-4 border border-transparent text-base font-medium rounded-md text-white bg-cyan-600 hover:bg-cyan-700 shadow-lg shadow-cyan-500/20 transform hover:scale-105 transition-transform duration-300">
                        Ver la inversión
                    </a>
                </div>
            </div>
        </section>

        {/* What You Get Section */}
        <section id="features" className="py-20 sm:py-24 bg-gray-800/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl">Qué consigues exactamente:</h2>
                </div>
                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                        <h3 className="text-xl font-bold text-white">📋 Tu Formulario Web Profesional</h3>
                        <p className="mt-4 text-gray-400">Una página personalizada con tu logo y colores donde tus clientes rellenan: idea, zona, tamaño, presupuesto e imágenes de referencia.</p>
                    </div>
                     <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                        <h3 className="text-xl font-bold text-white">📊 Todo Organizado en Google Sheets</h3>
                        <p className="mt-4 text-gray-400">Cada consulta llega automáticamente a una hoja de cálculo ordenada. Sin apps raras ni complicaciones. Todo en tu Google Drive.</p>
                    </div>
                     <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                        <h3 className="text-xl font-bold text-white">✉️ Emails Automáticos</h3>
                        <p className="mt-4 text-gray-400">El cliente recibe confirmación al instante y tú una notificación con toda la info. Proyectas una imagen profesional desde el minuto 1.</p>
                    </div>
                </div>
                <div className="mt-8 text-center bg-gray-800 p-6 rounded-lg border border-gray-700 max-w-2xl mx-auto">
                    <h3 className="text-xl font-bold text-white">🔗 Link Único para Compartir</h3>
                    <p className="mt-2 text-gray-400">Ponlo en tu bio de Instagram, historias, o envíalo por WhatsApp. Un link. Todo organizado.</p>
                </div>
            </div>
        </section>

        {/* How it Works Section */}
        <section id="how-it-works" className="py-20 sm:py-24">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl">Cómo funciona en la práctica</h2>
                    <p className="mt-4 text-xl text-gray-400">El flujo completo, paso a paso:</p>
                </div>
                <div className="mt-12 text-left max-w-2xl mx-auto space-y-6">
                    <p><strong className="text-cyan-400">1. Cliente rellena tu formulario web:</strong> Describe su idea, sube foto de referencia, indica zona del cuerpo y tamaño. Todo en un formulario simple.</p>
                    <p><strong className="text-cyan-400">2. Recibe confirmación al instante:</strong> Email automático profesional confirmando que su consulta fue recibida. Primera impresión: 10/10.</p>
                    <p><strong className="text-cyan-400">3. Tú recibes notificación completa:</strong> Email con todos los detalles organizados. Si subió imagen, la ves directamente. Si no, también lo sabes.</p>
                    <p><strong className="text-cyan-400">4. Todo se guarda automáticamente:</strong> Los datos en Google Sheets, las imágenes en Google Drive y las métricas actualizadas.</p>
                    <p><strong className="text-cyan-400">5. Tú decides cuándo responder:</strong> Revisas el Sheets cuando quieras y contactas solo a los leads que te interesan.</p>
                </div>
                
                <div className="text-center mt-20">
                    <h3 className="text-2xl font-bold text-white">👇 Así se ve en la vida real:</h3>
                </div>

                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2">
                        <ImageCard src={images[0].src} title={images[0].title} onClick={() => openLightbox(0)} />
                    </div>
                    <ImageCard src={images[1].src} title={images[1].title} onClick={() => openLightbox(1)} />
                    <ImageCard src={images[2].src} title={images[2].title} onClick={() => openLightbox(2)} />
                    <ImageCard src={images[3].src} title={images[3].title} onClick={() => openLightbox(3)} />
                    <ImageCard src={images[4].src} title={images[4].title} onClick={() => openLightbox(4)} />
                    <ImageCard src={images[5].src} title={images[5].title} onClick={() => openLightbox(5)} />
                    <div className="lg:col-span-3">
                        <ImageCard src={images[6].src} title={images[6].title} onClick={() => openLightbox(6)} />
                    </div>
                </div>

                <div className="mt-12 bg-gray-800/50 border border-cyan-500/20 rounded-lg p-6 flex items-start space-x-4 max-w-3xl mx-auto">
                    <span className="text-2xl flex-shrink-0 mt-1">💡</span>
                    <div>
                        <h4 className="font-bold text-white">Nota Importante</h4>
                        <p className="text-gray-400">Estas son capturas reales del sistema funcionando. Tu instalación será idéntica, personalizada con tu marca.</p>
                    </div>
                </div>

            </div>
        </section>

        {/* What's Included Section */}
        <section id="included" className="py-20 sm:py-24 bg-gray-800/50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Qué incluye el servicio</h2>
                </div>
                <div className="mt-12 max-w-md mx-auto md:max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                    <ul role="list" className="space-y-4">
                        <CheckListItem>Instalación completa en 48-72 horas</CheckListItem>
                        <CheckListItem>Landing page personalizada con tu marca</CheckListItem>
                        <CheckListItem>Formulario configurado con tus preguntas</CheckListItem>
                        <CheckListItem>Automatización de emails (cliente + tú)</CheckListItem>
                    </ul>
                    <ul role="list" className="space-y-4">
                        <CheckListItem>Google Sheets organizado y listo</CheckListItem>
                        <CheckListItem>Tutorial en video para que sepas usarlo</CheckListItem>
                        <CheckListItem checkColor="text-green-400">2 semanas de soporte por WhatsApp</CheckListItem>
                    </ul>
                </div>
                <p className="mt-8 text-center text-lg font-semibold text-cyan-300">Todo queda en TUS cuentas. Control 100% tuyo.</p>
            </div>
        </section>
        
        {/* --- SECCIÓN DE PRECIOS MODIFICADA --- */}
        <section id="pricing" className="py-20 sm:py-24 bg-gray-900">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-base font-semibold text-cyan-400 tracking-wider uppercase">La inversión</h2>
                    <p className="mt-2 text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
                        Precio transparente y sin sorpresas
                    </p>
                </div>
                
                <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                    {/* Columna de Precios */}
                    <div className="bg-gray-800 rounded-2xl border border-gray-700 p-8 space-y-8">
                        <div>
                            <h3 className="text-xl font-bold text-white">Setup inicial (pago único)</h3>
                            <p className="mt-4 text-5xl font-extrabold text-white">149€</p>
                            <p className="mt-2 text-gray-400">Incluye instalación completa, personalización y puesta en marcha.</p>
                        </div>
                        <div className="border-t border-gray-700 pt-8">
                            <h3 className="text-xl font-bold text-white">Mensualidad</h3>
                            <p className="mt-4"><span className="text-5xl font-extrabold text-white">29€</span><span className="text-gray-400">/mes</span></p>
                            <div className="mt-4 text-left text-gray-400">
                                <h4 className="font-semibold text-gray-200">¿Por qué mensual? Porque el sistema necesita:</h4>
                                <ul className="mt-2 space-y-2 text-sm">
                                    <li className="flex items-start"><span className="text-cyan-400 mr-2 mt-1">✓</span> Servidor activo 24/7 donde funcionan las automatizaciones.</li>
                                    <li className="flex items-start"><span className="text-cyan-400 mr-2 mt-1">✓</span> Mantenimiento técnico y actualizaciones.</li>
                                    <li className="flex items-start"><span className="text-cyan-400 mr-2 mt-1">✓</span> Backups automáticos de tu información.</li>
                                    <li className="flex items-start"><span className="text-cyan-400 mr-2 mt-1">✓</span> Soporte técnico por WhatsApp.</li>
                                </ul>
                                <p className="mt-3 text-xs italic">(Si dejaras de pagar, el servidor se apaga y el sistema deja de funcionar. Por eso no puede ser pago único.)</p>
                            </div>
                        </div>
                    </div>

                    {/* Columna de Oferta */}
                    <div className="bg-gray-800 rounded-2xl border border-cyan-500/30 shadow-2xl shadow-cyan-500/10 p-8">
                        <div className="text-center">
                            <h3 className="text-xl font-bold text-green-400">🎁 Oferta de lanzamiento</h3>
                            <p className="mt-1 text-gray-300">(primeros 5 estudios)</p>
                        </div>
                        <div className="mt-6 text-center">
                            <p className="text-lg font-medium text-gray-400">Mensualidad los primeros 3 meses:</p>
                            <p className="mt-2">
                                <span className="text-5xl font-extrabold text-white">29€<span className="text-gray-400">/mes</span></span>
                                <span className="text-3xl font-medium text-gray-500 line-through ml-3">49€</span>
                            </p>
                            <p className="mt-4 text-lg font-medium text-gray-400">Después: <span className="font-bold text-white">39€/mes</span> (precio normal)</p>
                        </div>
                        <div className="mt-8 border-t border-gray-700 pt-6 text-center">
                             <p className="font-semibold text-white">Total primer año:</p>
                             <p className="mt-2 text-lg text-gray-400">€149 + (€29×3) + (€39×9) = <span className="font-bold text-2xl text-white">€586</span></p>
                             <p className="mt-2 text-cyan-300 font-semibold">Eso son €1.6/día para no tener que gestionar DMs nunca más.</p>
                        </div>
                         <a href="#contact" className="mt-8 w-full inline-block text-center px-6 py-3 border border-transparent rounded-md shadow-lg text-base font-medium text-white bg-cyan-600 hover:bg-cyan-700">
                            Empezar ahora
                        </a>
                    </div>
                </div>
                <p className="mt-6 text-center text-xs text-gray-500">
                    No incluye: Personalizaciones complejas, desarrollo a medida o gestión de redes sociales.
                </p>
            </div>
        </section>
        
        {/* Testimonial & Ideal For Section */}
        <section className="py-20 sm:py-24 bg-gray-800/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                    <h2 className="text-3xl font-extrabold text-white text-center mb-8">Por qué funciona</h2>
                    <figure>
                        <blockquote className="text-center text-xl font-medium text-white leading-8 bg-gray-800 p-6 rounded-lg border border-gray-700">
                            <p>"Antes tardaba 2 horas al día respondiendo DMs. Ahora reviso el Sheets cuando quiero y solo respondo a consultas serias con presupuesto."</p>
                        </blockquote>
                        <figcaption className="mt-4">
                            <div className="text-center text-base text-gray-400">— Ejemplo de caso de uso real</div>
                        </figcaption>
                    </figure>
                </div>
                <div>
                    <h2 className="text-3xl font-extrabold text-white text-center mb-8">Ideal para:</h2>
                    <div className="max-w-md mx-auto">
                        <ul role="list" className="space-y-4">
                            <CheckListItem>Estudios pequeños (1-3 artistas)</CheckListItem>
                            <CheckListItem>Tatuadores que reciben muchas consultas genéricas</CheckListItem>
                            <CheckListItem>Quien quiera proyectar una imagen más profesional</CheckListItem>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-20 sm:py-24">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-extrabold text-white text-center">FAQ Rápido</h2>
                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                        <h3 className="font-semibold text-white">¿Necesito conocimientos técnicos?</h3>
                        <p className="mt-2 text-gray-400">No. Te lo dejo todo instalado. Solo necesitas saber abrir Google Sheets (como Excel).</p>
                    </div>
                    <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                        <h3 className="font-semibold text-white">¿Funciona con Instagram?</h3>
                        <p className="mt-2 text-gray-400">Sí. Pones el link en tu bio, stories o envías por DM.</p>
                    </div>
                    <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                        <h3 className="font-semibold text-white">¿Puedo cambiar las preguntas del formulario después?</h3>
                        <p className="mt-2 text-gray-400">Sí. Te enseño cómo en el tutorial. Es sencillo.</p>
                    </div>
                    <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                        <h3 className="font-semibold text-white">¿Hay costos ocultos?</h3>
                        <p className="mt-2 text-gray-400">No. Solo pagas los 149€ de instalación y la mensualidad. Google Sheets es gratis siempre.</p>
                    </div>
                     <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 md:col-span-2">
                        <h3 className="font-semibold text-white">¿Qué pasa si tengo problemas?</h3>
                        <p className="mt-2 text-gray-400">Tienes soporte técnico incluido por WhatsApp para resolver cualquier duda sobre el sistema mientras mantengas la suscripción.</p>
                    </div>
                </div>
            </div>
        </section>
        
        {/* Final CTA Section */}
        <section id="contact" className="bg-cyan-800/20 py-20 sm:py-24">
            <div className="max-w-3xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
                    Siguiente paso
                </h2>
                <p className="mt-4 text-lg text-gray-300">
                    Te respondo en menos de 24h y empezamos.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a href="https://wa.me/600204383" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-500 hover:bg-green-600 w-full sm:w-auto">
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 4.315 1.919 6.066l-1.472 4.244 4.352-1.141z" /></svg>
                        Escríbeme por WhatsApp
                    </a>
                    <a href="mailto:info@iswstudioweb.com" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-cyan-400 hover:bg-cyan-300 w-full sm:w-auto">
                        O envíame un email
                    </a>
                </div>
                <p className="mt-6 text-sm text-cyan-200/60 font-semibold">Plazas limitadas para la oferta: Solo para los 5 primeros estudios.</p>
            </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 border-t border-gray-800">
            <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 text-center text-gray-500">
                 <p className="font-bold text-white">ISW Studio Web</p>
                 <p className="text-sm">Setup profesional para estudios de tatuajes</p>
                 <p className="mt-4 text-xs">&copy; {new Date().getFullYear()} iswstudioweb.com</p>
            </div>
        </footer>
      </main>

      {/* Componente Lightbox que se renderiza aquí */}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={images}
        index={imageIndex}
        plugins={[Zoom]}
      />
    </div>
  );
};

export default App;