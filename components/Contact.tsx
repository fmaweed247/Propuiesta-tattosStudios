
import React from 'react';

const Contact: React.FC = () => {
    return (
        <section id="contacto" className="bg-gray-900 text-white py-16 md:py-20 rounded-2xl">
            <div className="container mx-auto text-center px-4">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Listo para dejar atrás el caos administrativo?</h2>
                <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8">Hablemos 15 minutos. Te haré una demostración en vivo y te daré un presupuesto cerrado y sin compromiso, adaptado a las necesidades de tu estudio.</p>
                <a href="mailto:info@iswstudioweb.com?subject=Solicitud de Demo del Sistema de Gestión" className="bg-blue-600 text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-block">
                    Quiero mi Demo Gratuita
                </a>
            </div>
        </section>
    );
};

export default Contact;
