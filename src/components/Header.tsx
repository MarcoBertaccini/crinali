import { Menu, X } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Header({ currentPage, onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavigation = (page: string) => {
    onNavigate(page);
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed w-full top-0 z-50 bg-cream/95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4 lg:px-8 py-4 flex justify-between items-center">
        <button
          onClick={() => handleNavigation('home')}
          className="hover:opacity-80 transition-opacity"
        >
          <img src="public/logo-crinali.jpeg" alt="Crinali" className="h-12 w-auto" />
        </button>

        <nav className="hidden md:flex items-center gap-8">
          <button
            onClick={() => handleNavigation('eventi')}
            className={`text-sm font-medium transition-colors ${
              currentPage === 'eventi' ? 'text-sand' : 'text-black-light hover:text-sand'
            }`}
          >
            Eventi
          </button>
          <button
            onClick={() => handleNavigation('partner')}
            className={`text-sm font-medium transition-colors ${
              currentPage === 'partner' ? 'text-sand' : 'text-black-light hover:text-sand'
            }`}
          >
            Partner
          </button>
          <button
            onClick={() => handleNavigation('squadra')}
            className={`text-sm font-medium transition-colors ${
              currentPage === 'squadra' ? 'text-sand' : 'text-black-light hover:text-sand'
            }`}
          >
            Squadra
          </button>
          <button
            onClick={() => handleNavigation('contatti')}
            className="bg-sand hover:bg-sand-dark text-white px-6 py-2.5 rounded-lg font-semibold text-sm transition-all transform hover:scale-105 shadow-md"
          >
            Iscriviti
          </button>
        </nav>

        <button
          className="md:hidden text-black-light"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <nav className="md:hidden bg-cream border-t border-sand/20">
          <button
            onClick={() => handleNavigation('eventi')}
            className="block w-full text-left px-6 py-4 text-black-light hover:bg-cream-dark"
          >
            Eventi
          </button>
          <button
            onClick={() => handleNavigation('partner')}
            className="block w-full text-left px-6 py-4 text-black-light hover:bg-cream-dark"
          >
            Partner
          </button>
          <button
            onClick={() => handleNavigation('squadra')}
            className="block w-full text-left px-6 py-4 text-black-light hover:bg-cream-dark"
          >
            Squadra
          </button>
          <button
            onClick={() => handleNavigation('contatti')}
            className="block w-full text-left px-6 py-4 font-semibold text-sand hover:bg-cream-dark"
          >
            Iscriviti
          </button>
        </nav>
      )}
    </header>
  );
}
