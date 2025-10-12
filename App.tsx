import React from 'react';

// --- Helper Components (Defined outside the main App component) ---

interface CheckListItemProps {
  children: React.ReactNode;
}

const CheckListItem: React.FC<CheckListItemProps> = ({ children }) => (
  <li className="flex items-start space-x-3">
    <svg className="flex-shrink-0 h-6 w-6 text-cyan-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
    </svg>
    <span className="text-gray-300">{children}</span>
  </li>
);

interface FeatureCardProps {
  // Fix: Replaced JSX.Element with React.ReactElement to resolve "Cannot find namespace 'JSX'" error.
  icon: React.ReactElement;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
  <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 transform hover:scale-105 transition-transform duration-300">
    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-cyan-500 text-white mb-4">
      {icon}
    </div>
    <h3 className="text-lg font-medium tracking-tight text-white">{title}</h3>
    <p className="mt-2 text-base text-gray-400">{description}</p>
  </div>
);

// --- Main App Component ---

const App: React.FC = () => {
  return (
    <div className="bg-gray-900 antialiased">
      <main>
        {/* Hero Section */}
        <section className="relative py-20 sm:py-32">
            <div className="absolute inset-0 bg-gray-900/80 backdrop-blur-sm"></div>
            <div 
                className="absolute inset-0 bg-no-repeat bg-center bg-cover"
                style={{backgroundImage: 'url(https://picsum.photos/1920/1080?grayscale&blur=5)', opacity: '0.1'}}
            ></div>
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
                    Deja de gestionar DMs. <span className="gradient-text">Empieza a tatuar más.</span>
                </h1>
                <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-300">
                    ¿Harto de perder horas con DMs y emails? Automatiza la gestión de tus clientes y dedica tu tiempo a lo que de verdad importa: crear arte.
                </p>
                <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                    <a href="#pricing" className="px-8 py-4 border border-transparent text-base font-medium rounded-md text-white bg-cyan-600 hover:bg-cyan-700 shadow-lg shadow-cyan-500/20 transform hover:scale-105 transition-transform duration-300">
                        ¡Solicítalo ya a mitad de precio!
                    </a>
                </div>
            </div>
        </section>

        {/* Problem & Solution Section */}
        <section id="solution" className="py-20 sm:py-24 bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-base font-semibold text-cyan-400 tracking-wider uppercase">La Solución</h2>
                    <p className="mt-2 text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
                        Tu nuevo asistente digital 24/7
                    </p>
                    <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-400">
                        Te presento el Sistema de Gestión de Consultas para Estudios de Tatuajes. Una herramienta que recibe, organiza y responde las solicitudes de tus clientes de forma automática.
                    </p>
                </div>
            </div>
        </section>
        
        {/* Benefits Section */}
        <section id="benefits" className="py-20 sm:py-24 bg-gray-800/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                 <div className="text-center mb-12">
                     <h2 className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
                        ¿Qué ganas con esto?
                    </h2>
                </div>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                    <FeatureCard 
                        icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
                        title="Ahorra horas de gestión"
                        description="Olvídate de responder las mismas preguntas una y otra vez. El sistema lo hace por ti."
                    />
                    <FeatureCard 
                        icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" /></svg>}
                        title="Organización total"
                        description="Todas las consultas en un único panel, ordenadas y con la información que necesitas."
                    />
                    <FeatureCard 
                        icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>}
                        title="Imagen más profesional"
                        description="Tus clientes reciben respuestas al instante, mejorando su experiencia desde el primer contacto."
                    />
                    <FeatureCard 
                        icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" /></svg>}
                        title="Enfócate en tu arte"
                        description="Dedica tu energía a diseñar y tatuar, no a tareas administrativas que te queman."
                    />
                </div>
            </div>
        </section>

        {/* How it Works Section */}
        <section id="how-it-works" className="py-20 sm:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:text-center">
                    <h2 className="text-base font-semibold text-cyan-400 tracking-wider uppercase">Proceso</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">¿Cómo funciona?</p>
                </div>
                <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-12">
                    <div className="p-6 bg-gray-800 rounded-lg border border-gray-700">
                        <h3 className="text-xl font-bold text-white">1. Tu "Recepción" Online (Landing Page)</h3>
                        <p className="mt-4 text-gray-400">Una página sencilla y personalizada con tu marca. Incluye un formulario inteligente que guía al cliente para que te dé toda la info de una vez: idea, tamaño, zona del cuerpo, imágenes de referencia, etc.</p>
                    </div>
                    <div className="p-6 bg-gray-800 rounded-lg border border-gray-700">
                        <h3 className="text-xl font-bold text-white">2. Tu Panel de Operaciones (Google Sheets)</h3>
                        <p className="mt-4 text-gray-400">Toda la información del formulario llega a una hoja de cálculo súper organizada. Cada solicitud es una nueva fila con los datos listos para revisar, y un email automático confirma la recepción al cliente.</p>
                    </div>
                </div>
                <div className="mt-10 text-center">
                     <a href="https://tattoproyect.vercel.app/" target="_blank" rel="noopener noreferrer" className="inline-block text-lg font-medium text-cyan-400 hover:text-cyan-300">
                        Ver un ejemplo real aquí &rarr;
                    </a>
                </div>
            </div>
        </section>

        {/* Automated Flow Section */}
        <section id="automated-flow" className="py-20 sm:py-24 bg-gray-800/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
                        El Flujo Automatizado, Paso a Paso
                    </h2>
                    <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-400">
                        Descubre cómo el sistema transforma el caos en un proceso ordenado y eficiente, desde la consulta inicial hasta el archivo final.
                    </p>
                </div>

                <div className="space-y-24">
                    {/* Step 1 */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="bg-gray-800 p-2 rounded-xl shadow-2xl shadow-cyan-500/10 border border-gray-700">
                            <div className="bg-gray-900 rounded-t-lg p-2 flex items-center">
                                <div className="flex space-x-1.5">
                                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                </div>
                            </div>
                            <img src="src/form-screenshot.png" alt="Formulario web para tatuajes" className="rounded-b-lg w-full" />
                        </div>
                        <div>
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-cyan-900/50 text-cyan-300 ring-1 ring-inset ring-cyan-300/20">Paso 1</span>
                            <h3 className="mt-4 text-2xl font-bold text-white">El Cliente Rellena el Formulario Web</h3>
                            <p className="mt-2 text-gray-400">
                                Todo empieza aquí. El cliente describe su idea, adjunta imágenes y envía toda la información necesaria a través de un formulario simple e intuitivo en tu propia web.
                            </p>
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="lg:order-2 bg-gray-800 p-2 rounded-xl shadow-2xl shadow-cyan-500/10 border border-gray-700">
                            <div className="bg-white rounded-t-lg p-2 flex items-center">
                                 <div className="flex space-x-1.5">
                                    <div className="w-3 h-3 rounded-full bg-gray-200"></div>
                                    <div className="w-3 h-3 rounded-full bg-gray-200"></div>
                                    <div className="w-3 h-3 rounded-full bg-gray-200"></div>
                                </div>
                            </div>
                            <img src="src/email-cliente.png" alt="Email de confirmación instantáneo" className="rounded-b-lg w-full" />
                        </div>
                        <div className="lg:order-1">
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-cyan-900/50 text-cyan-300 ring-1 ring-inset ring-cyan-300/20">Paso 2</span>
                            <h3 className="mt-4 text-2xl font-bold text-white">Email de Confirmación Instantáneo</h3>
                            <p className="mt-2 text-gray-400">
                                Al segundo de enviar, el cliente recibe un email profesional que confirma la recepción de su consulta. Esto genera confianza y gestiona sus expectativas desde el primer minuto.
                            </p>
                        </div>
                    </div>

                    {/* Step 3 */}
                     <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="bg-gray-800 p-4 rounded-xl shadow-2xl shadow-cyan-500/10 border border-gray-700">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <img src="src/email-equipo-con-imagen.png" alt="Notificación con imagen de referencia" className="rounded-lg w-full border border-gray-700" />
                                <img src="src/email-equipo-sin-imagen.png" alt="Notificación sin imagen de referencia" className="rounded-lg w-full border border-gray-700" />
                            </div>
                        </div>
                        <div>
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-cyan-900/50 text-cyan-300 ring-1 ring-inset ring-cyan-300/20">Paso 3</span>
                            <h3 className="mt-4 text-2xl font-bold text-white">Notificación Inteligente al Equipo</h3>
                            <p className="mt-2 text-gray-400">
                                Simultáneamente, el sistema notifica a tu equipo. El email contiene toda la información organizada y diferencia claramente si el cliente adjuntó una imagen de referencia o no.
                            </p>
                        </div>
                    </div>

                    {/* Step 4 */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="lg:order-2 bg-gray-800 p-4 rounded-xl shadow-2xl shadow-cyan-500/10 border border-gray-700">
                             <div className="grid grid-cols-1 gap-4">
                                <img src="src/sheets-leads.png" alt="Google Sheets Leads" className="rounded-lg w-full border border-gray-700" />
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <img src="src/sheets-metrics.png" alt="Google Sheets Metrics" className="rounded-lg w-full border border-gray-700" />
                                    <img src="src/drive-screenshot.png" alt="Google Drive Archive" className="rounded-lg w-full border border-gray-700" />
                                </div>
                            </div>
                        </div>
                        <div className="lg:order-1">
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-cyan-900/50 text-cyan-300 ring-1 ring-inset ring-cyan-300/20">Paso 4</span>
                            <h3 className="mt-4 text-2xl font-bold text-white">Organización y Archivo Automático</h3>
                            <p className="mt-2 text-gray-400">
                                Cero trabajo manual. El sistema archiva cada pieza de información en el lugar correcto: los datos en Google Sheets (separando leads y métricas) y los archivos visuales en Google Drive.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>

        {/* Package Details Section */}
        <section id="features" className="bg-gray-900 py-20 sm:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Un producto "llave en mano"</h2>
                    <p className="mt-4 text-xl text-gray-400">Yo me encargo de todo. Esto es lo que incluye exactamente el paquete:</p>
                </div>
                <div className="mt-12 max-w-3xl mx-auto">
                    <ul role="list" className="space-y-4">
                        <CheckListItem>Landing page/formulario personalizado con tu marca.</CheckListItem>
                        <CheckListItem>Configuración del flujo de automatización completo (Formulario &gt; Google Sheets &gt; Emails).</CheckListItem>
                        <CheckListItem>Instalación en tus propias cuentas para que tengas el control total.</CheckListItem>
                        <CheckListItem>Guía rápida y sencilla para que sepas cómo funciona.</CheckListItem>
                        <CheckListItem>Lo tienes funcionando en 72h máximo.</CheckListItem>
                    </ul>
                     <p className="mt-6 text-center text-sm text-gray-500">(No incluye personalizaciones complejas o gestión de redes sociales).</p>
                </div>
            </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20 sm:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-base font-semibold text-cyan-400 tracking-wider uppercase">La Inversión</h2>
                    <p className="mt-2 text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
                        Oferta de Lanzamiento Limitada
                    </p>
                    <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-400">
                        Para los 3 primeros estudios que se sumen, tengo una oferta especial que no se repetirá.
                    </p>
                </div>
                
                <div className="mt-12 max-w-lg mx-auto rounded-lg shadow-xl bg-gray-800 border border-cyan-500/50 ring-1 ring-cyan-500/30 overflow-hidden lg:max-w-none lg:flex">
                    <div className="bg-gray-800 px-6 py-8 lg:p-12 flex-1">
                        <h3 className="text-2xl font-extrabold text-white sm:text-3xl">Paquete Completo</h3>
                        <p className="mt-6 text-base text-gray-400">La inversión inicial se amortiza sola con el tiempo que te ahorra las primeras semanas.</p>
                        <div className="mt-8">
                            <div className="flex items-center">
                                <h4 className="flex-shrink-0 pr-4 bg-gray-800 text-sm tracking-wider font-semibold uppercase text-cyan-400">Pago único por instalación</h4>
                                <div className="flex-1 border-t-2 border-gray-600"></div>
                            </div>
                            <p className="mt-4">
                                <span className="text-5xl font-extrabold text-white">225€</span>
                                <span className="text-2xl font-medium text-gray-400 line-through ml-2">450€</span>
                            </p>
                             <p className="mt-1 text-lg font-bold text-green-400">¡50% de descuento!</p>
                        </div>
                        <div className="mt-8 pt-6 border-t border-gray-700">
                            <div className="flex items-center">
                                <h4 className="flex-shrink-0 pr-4 bg-gray-800 text-sm tracking-wider font-semibold uppercase text-cyan-400">Cuota mensual</h4>
                                <div className="flex-1 border-t-2 border-gray-600"></div>
                            </div>
                            <p className="mt-4">
                                <span className="text-5xl font-extrabold text-white">49€</span>
                                <span className="text-lg font-medium text-gray-400">/mes</span>
                            </p>
                            <p className="mt-1 text-sm text-gray-500">(mantenimiento y hosting)</p>
                        </div>
                         <p className="mt-6 text-sm text-gray-500">(Precios sin IVA)</p>
                    </div>
                    <div className="py-8 px-6 text-center bg-gray-800 lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center lg:p-12 border-t border-gray-700 lg:border-t-0 lg:border-l">
                         <p className="text-lg leading-6 font-medium text-white">¿Listo/a para organizar tu curro?</p>
                         <div className="mt-4 flex items-center justify-center text-5xl font-extrabold text-white">
                            <span>Tatuar más</span>
                         </div>
                        <div className="mt-6">
                            <a href="mailto:info@iswstudioweb.com" className="w-full px-6 py-3 border border-transparent rounded-md shadow-lg text-base font-medium text-white bg-cyan-600 hover:bg-cyan-700">
                                Contactar ahora
                            </a>
                        </div>
                         <p className="mt-4 text-sm">
                            <a href="#cta" className="font-medium text-gray-400 hover:text-gray-200">Agendemos una llamada de 15 min</a>
                        </p>
                    </div>
                </div>
            </div>
        </section>

        {/* Final CTA Section */}
        <section id="cta" className="bg-gray-900 py-20 sm:py-24">
            <div className="max-w-3xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
                    ¿Listo/a para dar el paso?
                </h2>
                <p className="mt-4 text-lg text-gray-400">
                    Si te interesa, el siguiente paso es fácil. Respóndeme a este email y agendamos una llamada rápida de 15 minutos sin compromiso para resolver cualquier duda que tengas.
                </p>
                <div className="mt-8">
                    <a href="mailto:info@iswstudioweb.com" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-cyan-400 hover:bg-cyan-300">
                        Agendar llamada
                    </a>
                </div>
            </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 border-t border-gray-800">
            <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 text-center text-gray-500">
                 <img src="src/isw-logo.png" alt="ISW Studio Web Logo" className="h-12 w-auto mx-auto mb-4" />
                 <p>&copy; {new Date().getFullYear()} iswstudioweb.com</p>
                 <p className="mt-2">IVAN.C.G</p>
                 <a href="mailto:info@iswstudioweb.com" className="hover:text-cyan-400">info@iswstudioweb.com</a>
            </div>
        </footer>
      </main>
    </div>
  );
};

export default App;
