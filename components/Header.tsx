// src/Header.tsx

import React from 'react';
// 1. IMPORTA el logo. Asegúrate de que esta ruta es correcta.
import iswLogo from '/src/isw-logo.png'; 

const Header: React.FC = () => {
    return (
        <header className="text-center mb-12">
            {/* 2. USA la variable que has importado en el atributo 'src' */}
            <img src={iswLogo} alt="Logo de ISW Studio Web" className="mx-auto mb-6 h-24 w-auto rounded-lg" />
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