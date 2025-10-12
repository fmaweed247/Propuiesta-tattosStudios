import React from 'react';

// 1. IMPORTA todas las imágenes necesarias al principio
import formScreenshot from '/src/form-screenshot.png';
import emailCliente from '/src/email-cliente.png';
import emailEquipoConImagen from '/src/email-equipo-con-imagen.png';
import emailEquipoSinImagen from '/src/email-equipo-sin-imagen.png';
import sheetsLeads from '/src/sheets-leads.png';
import sheetsMetrics from '/src/sheets-metrics.png';
import driveScreenshot from '/src/drive-screenshot.png';

// ... (El componente FlowStep no cambia)
const FlowStep: React.FC<...> = ({...}) => ( ... );


const WorkflowShowcase: React.FC = () => {
    return (
        <section id="workflow-showcase" className="mb-16">
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg">
                <h2 className="text-3xl font-bold text-center mb-8">El Flujo Automatizado, Paso a Paso</h2>
                
                {/* PASO 1: FORMULARIO WEB */}
                <FlowStep ... >
                    {/* 2. USA la variable importada */}
                    <img src={formScreenshot} alt="Formulario web para solicitar cita de tatuaje" ... />
                </FlowStep>
                
                <hr className="my-12 border-t-2 border-dashed border-gray-200" />

                {/* PASO 2: CONFIRMACIÓN AL CLIENTE */}
                <FlowStep ... >
                    <img src={emailCliente} alt="Email de confirmación enviado al cliente" ... />
                </FlowStep>

                <hr className="my-12 border-t-2 border-dashed border-gray-200" />

                {/* PASO 3: NOTIFICACIÓN AL EQUIPO */}
                <div className="flow-step text-center mb-12">
                    {/* ... */}
                    <div className="grid md:grid-cols-2 gap-6 mt-4">
                        <div ... >
                            <h4 ... >✅ Con Imagen de Referencia</h4>
                            <img src={emailEquipoConImagen} alt="Notificación al equipo con imagen de referencia" ... />
                        </div>
                        <div ... >
                           <h4 ... >📄 Sin Imagen de Referencia</h4>
                           <img src={emailEquipoSinImagen} alt="Notificación al equipo sin imagen de referencia" ... />
                        </div>
                    </div>
                </div>

                <hr className="my-12 border-t-2 border-dashed border-gray-200" />

                {/* PASO 4: ALMACENAMIENTO */}
                <div className="flow-step text-center">
                    {/* ... */}
                    <div className="grid lg:grid-cols-3 gap-6 mt-4 text-left">
                        <div ... >
                            <h4 ... >📊 Google Sheets - Leads</h4>
                            <img src={sheetsLeads} alt="Registro de consultas en Google Sheets" ... />
                        </div>
                        <div ... >
                            <h4 ... >📈 Google Sheets - Métricas</h4>
                            <img src={sheetsMetrics} alt="Métricas de consultas en Google Sheets" ... />
                        </div>
                        <div ... >
                            <h4 ... >📁 Google Drive</h4>
                            <img src={driveScreenshot} alt="Imágenes de referencia guardadas en Google Drive" ... />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WorkflowShowcase;