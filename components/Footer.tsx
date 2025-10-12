
import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="text-center mt-12 py-6 border-t border-gray-200">
             <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Flujo de Captación Inteligente</h3>
             <p className="text-lg text-gray-600">El sistema automatiza la recogida de información para que tu equipo se centre en el cliente, no en la administración.</p>
             <div className="mt-6 text-gray-500 space-y-2">
                <p>¿Preguntas? <a href="mailto:info@iswstudioweb.com" className="text-blue-600 hover:underline">info@iswstudioweb.com</a></p>
                <p className="text-sm">Una solución creada por <span className="font-semibold">Ivan de ISW Studio Web</span>.</p>
                <p className="text-sm">Creado con ❤️ por un desarrollador apasionado por la eficiencia.</p>
             </div>
        </footer>
    );
};

export default Footer;
