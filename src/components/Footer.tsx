import { Mail, Phone, MapPin, Facebook, Instagram } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div>
            <div className="mb-6">
              <img src="/logo-crinali.jpeg" alt="Crinali Running Club" className="h-16 w-auto mb-4" />
              <p className="text-white/80 text-sm leading-relaxed max-w-md">
                Vivi l’outdoor insieme a noi. Allenamenti, eventi e squadra sui sentieri dell’Appennino.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-white/80">
                <Mail className="w-4 h-4 text-sand" />
                <a href="mailto:info@crinali-running.it" className="hover:text-white transition-colors">
                  info@crinalirunning.it
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm text-white/80">
                <Phone className="w-4 h-4 text-sand" />
                <span>+39 3394010495</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-white/80">
                <MapPin className="w-4 h-4 text-sand" />
                <span>Emilia-Romagna, Italia</span>
              </div>
            </div>

            <div className="mt-6 flex gap-3">
              <a
                href="https://www.facebook.com/profile.php?id=61566640619886"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-sand transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/crinali_runningclub/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-sand transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>

            <div className="mt-6">
              <button
                onClick={() => onNavigate('privacy')}
                className="text-sm text-white/60 hover:text-white transition-colors"
              >
                Privacy e Cookie Policy
              </button>
            </div>
          </div>

          <div className="flex flex-col justify-between">
            <div className="space-y-2 text-sm text-white/60">
              <p>&copy; {new Date().getFullYear()} Crinali Running Club</p>
              <p>Tutti i diritti riservati</p>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10">
              <p className="text-sm text-white/40">
                Sito realizzato da{' '}
                <a
                  href="https://www.zenith-studio.it/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sand font-medium hover:text-sand-dark transition-colors"
                >
                  Zenith Studio
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
