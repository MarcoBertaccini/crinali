import { useState, useEffect } from 'react';
import Preloader from './components/Preloader';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ChiSiamo from './pages/ChiSiamo';
import Eventi from './pages/Eventi';
import Squadra from './pages/Squadra';
import Contatti from './pages/Contatti';
import Partner from './pages/Partner';
import Privacy from './pages/Privacy';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={handleNavigate} />;
      case 'chi-siamo':
        return <ChiSiamo onNavigate={handleNavigate} />;
      case 'eventi':
        return <Eventi onNavigate={handleNavigate} />;
      case 'squadra':
        return <Squadra onNavigate={handleNavigate} />;
      case 'contatti':
        return <Contatti />;
      case 'partner':
        return <Partner onNavigate={handleNavigate} />;
      case 'privacy':
        return <Privacy onNavigate={handleNavigate} />;
      default:
        return <Home onNavigate={handleNavigate} />;
    }
  };

  return (
    <>
      <Preloader />
      <div className="min-h-screen bg-white">
        <Header currentPage={currentPage} onNavigate={handleNavigate} />
        <main>{renderPage()}</main>
        <Footer onNavigate={handleNavigate} />
      </div>
    </>
  );
}

export default App;
