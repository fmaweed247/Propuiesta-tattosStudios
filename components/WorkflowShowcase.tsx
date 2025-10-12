import React, { useState } from 'react';

// Importaciones de la librería Lightbox
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// Importaciones de tus imágenes
import formScreenshot from '/src/form-screenshot.png';
import emailCliente from '/src/email-cliente.png';
import emailEquipoConImagen from '/src/email-equipo-con-imagen.png';
import emailEquipoSinImagen from '/src/email-equipo-sin-imagen.png';
import sheetsLeads from '/src/sheets-leads.png';
import sheetsMetrics from '/src/sheets-metrics.png';
import driveScreenshot from '/src/drive-screenshot.png';

// Definición completa y correcta del componente FlowStep
const FlowStep: React.FC<{
    step: number;
    title: string;
    description: string;
    children: React.ReactNode;
    className?: string;
    contentClassName?: string;
    textOrder?: number;
    imageOrder?: number;
}> = ({ step, title, description, children, className = '', contentClassName = '', textOrder = 1, imageOrder = 2 }) => (
    <div className={`flow-step grid md:grid-cols-2 gap-8 items-center mb-12 ${className}`}>
        <div className={`order-${textOrder} md:order-${textOrder}`}>
            <span className="text-sm font-bold text-blue-600 bg-blue-100 py-1 px-3 rounded-full">Paso {step}</span>
            <h3 className="font-bold text-2xl my-3">{title}</h3>
            <p className="text-gray-600 mb-4">{description}</p>
        </div>
        <div className={`order-${imageOrder} md:order-${imageOrder} ${contentClassName}`}>
            {children}
        </div>
    </div>
);


const WorkflowShowcase: React.FC = () => {
    const [openImageIndex, setOpenImageIndex] = useState(-1);

    const images = [
        formScreenshot,
        emailCliente,
        emailEquipoConImagen,
        emailEquipoSinImagen,
        sheetsLeads,
        sheetsMetrics,
        driveScreenshot,
    ];

    return (
        <section id="workflow-showcase" className="mb-16">
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg">
                <h2 className="text-3xl font-bold text-center mb-8">El Flujo Automatizado, Paso a Paso</h2>
                
                {/* PASO 1: FORMULARIO WEB - CON TODAS SUS PROPS, SIN "..." */}
                <FlowStep
                    step={1}
                    title="El Cliente Rellena el Formulario Web"
                    description="Todo empieza aquí. El cliente describe su idea, adjunta imágenes y envía toda la información necesaria a través de un formulario simple e intuitivo en tu propia web."
                    textOrder={2}
                    imageOrder={1}
                    contentClassName="bg-gray-900 p-4 rounded-lg shadow-inner flex justify-center items-center"
                >
                    <img 
                        src={formScreenshot} 
                        alt="Formulario web para solicitar cita de tatuaje" 
                        className="rounded-md shadow-lg max-w-full h-auto border border-gray-700 cursor-pointer"
                        onClick={() => setOpenImageIndex(0)}
                    />
                </FlowStep>
                
                <hr className="my-12 border-t-2 border-dashed border-gray-200" />

                {/* PASO 2: CONFIRMACIÓN AL CLIENTE - CON TODAS SUS PROPS, SIN "..." */}
                <FlowStep
                    step={2}
                    title="Email de Confirmación Instantáneo"
                    description="Al segundo de enviar, el cliente recibe un email profesional que confirma la recepción de su consulta. Esto genera confianza y gestiona sus expectativas desde el primer minuto."
                    textOrder={1}
                    imageOrder={2}
                    contentClassName="bg-gray-200 p-4 rounded-lg shadow-inner flex justify-center items-center"
                >
                    <img 
                        src={emailCliente} 
                        alt="Email de confirmación enviado al cliente" 
                        className="rounded-md shadow-lg max-w-full h-auto border border-gray-300 cursor-pointer"
                        onClick={() => setOpenImageIndex(1)}
                    />
                </FlowStep>

                <hr className="my-12 border-t-2 border-dashed border-gray-200" />

                {/* PASO 3: NOTIFICACIÓN AL EQUIPO */}
                <div className="flow-step text-center mb-12">
                     <span className="text-sm font-bold text-blue-600 bg-blue-100 py-1 px-3 rounded-full">Paso 3</span>
                    <h3 className="font-bold text-2xl my-3">Notificación Inteligente al Equipo</h3>
                    <p className="text-gray-600 mb-6 max-w-3xl mx-auto">Simultáneamente, el sistema notifica a tu equipo. El email contiene toda la información organizada y diferencia claramente si el cliente adjuntó una imagen de referencia o no.</p>
                    <div className="grid md:grid-cols-2 gap-6 mt-4">
                        <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-4">
                            <h4 className="text-lg font-bold text-center mb-2">✅ Con Imagen de Referencia</h4>
                            <img 
                                src={emailEquipoConImagen} 
                                alt="Notificación al equipo con imagen de referencia" 
                                className="rounded-md shadow-lg w-full h-auto border cursor-pointer"
                                onClick={() => setOpenImageIndex(2)}
                            />
                        </div>
                        <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-4">
                           <h4 className="text-lg font-bold text-center mb-2">📄 Sin Imagen de Referencia</h4>
                           <img 
                                src={emailEquipoSinImagen} 
                                alt="Notificación al equipo sin imagen de referencia" 
                                className="rounded-md shadow-lg w-full h-auto border cursor-pointer"
                                onClick={() => setOpenImageIndex(3)}
                           />
                        </div>
                    </div>
                </div>

                <hr className="my-12 border-t-2 border-dashed border-gray-200" />

                {/* PASO 4: ALMACENAMIENTO */}
                <div className="flow-step text-center">
                    <span className="text-sm font-bold text-blue-600 bg-blue-100 py-1 px-3 rounded-full">Paso 4</span>
                    <h3 className="font-bold text-2xl my-3">Organización y Archivo Automático</h3>
                    <p className="mb-6 text-gray-600 max-w-3xl mx-auto">Cero trabajo manual. El sistema archiva cada pieza de información en el lugar correcto: los datos en Google Sheets (separando leads y métricas) y los archivos visuales en Google Drive.</p>
                    <div className="grid lg:grid-cols-3 gap-6 mt-4 text-left">
                        <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-4">
                            <h4 className="font-bold text-center mb-2">📊 Google Sheets - Leads</h4>
                            <img 
                                src={sheetsLeads} 
                                alt="Registro de consultas en Google Sheets" 
                                className="rounded-md shadow-lg w-full h-auto border cursor-pointer"
                                onClick={() => setOpenImageIndex(4)}
                            />
                        </div>
                        <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-4">
                            <h4 className="font-bold text-center mb-2">📈 Google Sheets - Métricas</h4>
                            <img 
                                src={sheetsMetrics} 
                                alt="Métricas de consultas en Google Sheets" 
                                className="rounded-md shadow-lg w-full h-auto border cursor-pointer"
                                onClick={() => setOpenImageIndex(5)}
                            />
                        </div>
                        <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-4">
                            <h4 className="font-bold text-center mb-2">📁 Google Drive</h4>
                            <img 
                                src={driveScreenshot} 
                                alt="Imágenes de referencia guardadas en Google Drive" 
                                className="rounded-md shadow-lg w-full h-auto border cursor-pointer"
                                onClick={() => setOpenImageIndex(6)}
                            />
                        </div>
                    </div>
                </div>
            </div>
            
            <Lightbox
                open={openImageIndex > -1}
                close={() => setOpenImageIndex(-1)}
                slides={images.map(src => ({ src }))}
                index={openImageIndex}
            />
        </section>
    );
};

export default WorkflowShowcase;