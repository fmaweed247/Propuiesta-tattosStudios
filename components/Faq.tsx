
import React from 'react';

const FaqItem: React.FC<{ question: string; children: React.ReactNode }> = ({ question, children }) => (
    <details className="bg-white p-6 rounded-lg shadow-lg cursor-pointer group">
        <summary className="font-bold text-lg flex justify-between items-center list-none">
            <span>{question}</span>
            <span className="transform group-open:-rotate-180 transition-transform duration-300">▼</span>
        </summary>
        <p className="mt-4 text-gray-600">{children}</p>
    </details>
);

const Faq: React.FC = () => {
    return (
        <section id="faq" className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Resolvemos tus dudas</h2>
            <div className="max-w-3xl mx-auto space-y-4">
                <FaqItem question="¿Necesito tener conocimientos técnicos para usarlo?">
                    Para nada. Nosotros nos encargamos de toda la configuración e implementación. Tú solo tendrás que revisar tus emails y tu Google Sheets, como siempre, pero de forma mucho más organizada.
                </FaqItem>
                <FaqItem question="¿Mis datos y los de mis clientes están seguros?">
                    Totalmente. El sistema se apoya en la infraestructura de Google (Gmail, Sheets, Drive), una de las más seguras del mundo. No almacenamos tus datos en servidores externos.
                </FaqItem>
                <FaqItem question="¿Cuánto se tarda en tenerlo funcionando?">
                    El proceso es rápido. Una vez que tengamos acceso a la información necesaria, la implementación estándar puede estar lista en menos de 48-72 horas.
                </FaqItem>
            </div>
        </section>
    );
};

export default Faq;
