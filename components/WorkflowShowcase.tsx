// src/WorkflowShowcase.tsx

import React, { useState } from 'react';

// Importaciones de la librería Lightbox
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// Importaciones de tus imágenes (como ya hicimos)
import formScreenshot from '/src/form-screenshot.png';
import emailCliente from '/src/email-cliente.png';
import emailEquipoConImagen from '/src/email-equipo-con-imagen.png';
import emailEquipoSinImagen from '/src/email-equipo-sin-imagen.png';
import sheetsLeads from '/src/sheets-leads.png';
import sheetsMetrics from '/src/sheets-metrics.png';
import driveScreenshot from '/src/drive-screenshot.png';

// El componente FlowStep no cambia
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
    // 1. Estado para controlar el lightbox. -1 significa que está cerrado.
    const [openImageIndex, setOpenImageIndex] = useState(-1);

    // 2. Un array con todas las imágenes que quieres mostrar en el lightbox
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
                
                {/* PASO 1: FORMULARIO WEB */}
                <FlowStep ... >
                    {/* 3. Añadimos onClick y un cursor para indicar que es clickeable */}
                    <img 
                        src={formScreenshot} 
                        alt="Formulario web para solicitar cita de tatuaje" 
                        className="rounded-md shadow-lg max-w-full h-auto border border-gray-700 cursor-pointer"
                        onClick={() => setOpenImageIndex(0)} // Abre la imagen en el índice 0
                    />
                </FlowStep>
                
                <hr className="my-12 border-t-2 border-dashed border-gray-200" />

                {/* PASO 2: CONFIRMACIÓN AL CLIENTE */}
                <FlowStep ... >
                    <img 
                        src={emailCliente} 
                        alt="Email de confirmación enviado al cliente" 
                        className="rounded-md shadow-lg max-w-full h-auto border border-gray-300 cursor-pointer"
                        onClick={() => setOpenImageIndex(1)} // Abre la imagen en el índice 1
                    />
                </FlowStep>

                <hr className="my-12 border-t-2 border-dashed border-gray-200" />

                {/* PASO 3: NOTIFICACIÓN AL EQUIPO */}
                <div className="flow-step text-center mb-12">
                    {/* ... (texto sin cambios) ... */}
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
                    {/* ... (texto sin cambios) ... */}
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
            
            {/* 4. AÑADIMOS EL COMPONENTE LIGHTBOX AL FINAL */}
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