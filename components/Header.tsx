import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="text-center mb-12">
            <img src="/src/isw-logo.png" alt="Logo de ISW Studio Web" className="mx-auto mb-6 h-24 w-auto rounded-lg" />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">Deja de gestionar emails y empieza a tatuar más.</h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">El sistema que automatiza la captación y organización de tus clientes, para que tú te dediques solo al arte.</p>
            <div className="mt-8">
                <a href="#contacto" className="bg-blue-600 text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-block">
                    Solicita una Demo Gratuita
                </a>
            </div>
        </header>
    );
};

export default Header;