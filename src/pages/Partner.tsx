import { ArrowLeft, ExternalLink } from 'lucide-react';

interface PartnerProps {
  onNavigate: (page: string) => void;
}

interface Partner {
  name: string;
  logo: string;
  website: string;
  description: string;
}

export default function Partner({ onNavigate }: PartnerProps) {
  const partners: Partner[] = [
    {
      name: 'Gimelli sport',
      logo: 'https://www.gimellisport.it/images/logo_h.png',
      website: 'https://www.gimellisport.it/',
      description: 'Negozio sportivo a Forlì specializzato in abbigliamento, calzature e attrezzature per running, fitness e outdoor.',
    },
    {
      name: 'Farmacia San Martino',
      logo: 'https://www.sanmartinofarmacia.com/images/logo-testo.jpg',
      website: 'https://www.sanmartinofarmacia.com/',
      description: 'Farmacia San Martino: punto di riferimento per benessere, prevenzione, consulenza specializzata e servizi su misura.',
    },
    {
      name: 'Neversecond',
      logo: 'https://never2.it/cdn/shop/files/logo_d30a88be-2593-4157-8301-a93d7a09f9b9.svg?v=1734599327',
      website: 'https://never2.it/',
      description: 'Integratori scientifici per endurance: energia, idratazione e recupero ottimale per atleti di alto livello.',
    },
    {
      name: 'Ospedali privati OPF',
      logo: 'https://www.ospedaliprivatiforli.it/wp-content/themes/canvas-ospedaliprivatiforli/img/logo-2025-75.png',
      website: 'https://www.ospedaliprivatiforli.it/',
      description: 'Ospedali Privati Forlì: eccellenza sanitaria con servizi medici specialistici, tecnologia avanzata e attenzione personalizzata al paziente.',
    },
    {
      name: 'Sottobosco Emilia-Romagna',
      logo: 'https://www.sottoboscoromagnatoscana.it/theme/SottoboscoIt/img/logo.png',
      website: 'https://www.sottoboscoromagnatoscana.it/',
      description: 'Prodotti artigianali locali: funghi, tartufi e specialità del sottobosco tipiche dell’Emilia-Romagna.',
    },
    {
      name: 'Derby 2.0',
      logo: 'https://centro-sportivo-derby.com/wp-content/uploads/2025/09/logo.svg',
      website: 'https://centro-sportivo-derby.com/',
      description: 'Centro sportivo moderno con campi da calcio, paddle e area fitness a Terra del Sole.',
    },
    {
      name: 'Parquet Romagna',
      logo: import.meta.env.BASE_URL + 'parquet romagna.png',
      website: 'https://parquetromagna.it/',
      description: 'Esperti in pavimenti in legno: posa, restauro e design su misura in tutta la Romagna.',
    },
    {
      name: 'AF2 srl',
      logo: import.meta.env.BASE_URL + '/home/project/public/logoaf2.png',
      website: 'https://af2srl.com/it',
      description: 'AF2 Srl unisce innovazione, efficienza e sostenibilità offrendo soluzioni impiantistiche tecnologiche affidabili per industria e costruzioni.',
    },
    
  ];
const minorPartners = [
    {
      name: 'Partner minore 1',
      logo: import.meta.env.BASE_URL + 'partner1.png',
      website: 'https://example.com',
    },
    {
      name: 'Partner minore 2',
      logo: import.meta.env.BASE_URL + 'partner2.png',
      website: 'https://example.com',
    },
    {
      name: 'Partner minore 3',
      logo: import.meta.env.BASE_URL + 'partner3.png',
      website: 'https://example.com',
    },
    {
      name: 'Partner minore 4',
      logo: import.meta.env.BASE_URL + 'partner4.png',
      website: 'https://example.com',
    },
  ];
  
  return (
    <div className="min-h-screen bg-cream overflow-x-hidden">
      <div className="container mx-auto px-4 py-16">
        <button
          onClick={() => onNavigate('home')}
          className="inline-flex items-center gap-2 text-sand hover:text-sand-dark mb-12 font-semibold transition-colors group"
          aria-label="Torna alla Home"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="sr-only">Torna alla Home</span>
        </button>

        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-black mb-6">
              I Nostri Partner
            </h1>
            <p className="text-xl text-black-light max-w-2xl mx-auto">
              Grazie a chi supporta la nostra passione per il trail running
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-8 max-w-5xl mx-auto">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="w-full bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-sand/20 sm:transform sm:hover:-translate-y-2"
              >
                <div className="h-24 sm:h-28 bg-white flex items-center justify-center p-4 sm:p-6">
                  {partner.logo ? (
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="max-w-[80%] max-h-full w-auto h-auto object-contain"
                      loading="lazy"
                    />
                  ) : (
                    <div className="text-center text-gray-400 text-sm">
                      Logo in arrivo
                    </div>
                  )}
                </div>
                <div className="p-5 sm:p-6 text-center">
                  <h3 className="text-base sm:text-lg font-bold text-black mb-2 sm:mb-3">
                    {partner.name}
                  </h3>
                  {partner.description && (
                    <p className="text-sm text-black-light leading-relaxed mb-4 line-clamp-3" style={{ lineHeight: '1.6' }}>
                      {partner.description}
                    </p>
                  )}
                  {partner.website && (
                    <a
                      href={partner.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sand hover:text-sand-dark font-semibold text-sm transition-colors mt-3 sm:mt-4"
                    >
                      Visita il sito
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Partner minori */}
          
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-4xl mx-auto items-center justify-center">
              {minorPartners.map((partner, index) => (
                <a
                  key={index}
                  href={partner.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all flex items-center justify-center p-4 h-24 border border-sand/10"
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-h-12 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
                    loading="lazy"
                  />
                </a>
              ))}
            </div>
          </div>


          

          <div className="mt-16 text-center">
            <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-12 max-w-3xl mx-auto border border-sand/20">
              <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4">
                Vuoi diventare partner?
              </h2>
              <p className="text-base sm:text-lg text-black-light mb-8">
                Supporta la squadra Crinali e fai crescere insieme a noi la comunità del trail running
              </p>
              <button
                onClick={() => onNavigate('contatti')}
                className="bg-sand hover:bg-sand-dark text-white px-8 sm:px-10 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all transform hover:scale-105 shadow-lg"
              >
                Contattaci
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
