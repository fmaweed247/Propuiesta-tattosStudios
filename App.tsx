
import React from 'react';
import Header from './components/Header';
import WorkflowShowcase from './components/WorkflowShowcase';
import RoiAnalysis from './components/RoiAnalysis';
import TechStack from './components/TechStack';
import Faq from './components/Faq';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
    return (
        <div className="container mx-auto p-4 md:p-8">
            <Header />
            <main>
                <WorkflowShowcase />
                <RoiAnalysis />
                <TechStack />
                <Faq />
            </main>
            <Contact />
            <Footer />
        </div>
    );
};

export default App;
