
import React from 'react';

const RoiCard: React.FC<{ icon: string; title: string; value: string; description: string }> = ({ icon, title, value, description }) => (
    <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
        <span className="text-5xl">{icon}</span>
        <h3 className="font-bold text-xl my-2">{title}</h3>
        <p className="text-blue-600 font-bold text-3xl mb-2">{value}</p>
        <p className="text-gray-600">{description}</p>
    </div>
);

const RoiAnalysis: React.FC = () => {
    return (
        <section id="roi-analysis" className="mb-16">
             <h2 className="text-3xl font-bold text-center mb-8">Impacto en el Negocio y Retorno de la Inversión (ROI)</h2>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <RoiCard 
                    icon="⏳"
                    title="Ahorro de Tiempo Radical"
                    value="10-15"
                    description="Horas ahorradas al mes en tareas administrativas, emails y organización de archivos."
                />
                <RoiCard
                    icon="🎯"
                    title="Mejora de la Conversión"
                    value="+20%"
                    description="La respuesta inmediata y profesional aumenta la probabilidad de que un lead se convierta en cliente."
                />
                <RoiCard
                    icon="📂"
                    title="Cero Pérdida de Leads"
                    value="100%"
                    description="Todas las consultas se registran de forma segura. Se acabaron los emails perdidos o los datos olvidados."
                />
             </div>
        </section>
    );
};

export default RoiAnalysis;
