
import React from 'react';

const TechItem: React.FC<{ icon: string; name: string; category: string; className?: string }> = ({ icon, name, category, className = '' }) => (
    <div className="text-center">
        <p className={`text-5xl font-bold ${className}`}>{icon}</p>
        <p className="font-semibold mt-2">{name}</p>
        <p className="text-sm text-gray-500">{category}</p>
    </div>
);

const TechStack: React.FC = () => {
    return (
        <section id="tech-stack" className="mb-16">
             <h2 className="text-3xl font-bold text-center mb-8">Tecnologías Utilizadas</h2>
             <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="flex justify-around items-center flex-wrap gap-8">
                    <TechItem icon="n8n" name="n8n" category="Automatización" className="text-orange-500" />
                    <TechItem icon="React" name="React" category="Formulario Web" className="text-cyan-500" />
                    <TechItem icon="📧" name="Gmail" category="Comunicación" />
                    <TechItem icon="📈" name="Google Sheets" category="Base de Datos" />
                    <TechItem icon="📁" name="Google Drive" category="Almacenamiento" />
                </div>
             </div>
        </section>
    );
};

export default TechStack;
