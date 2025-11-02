import { Check, Shirt, Calendar, Users, Award, Heart } from 'lucide-react';

interface SquadraProps {
  onNavigate?: (page: string) => void;
}

export default function Squadra({ onNavigate }: SquadraProps = {}) {
  const benefits = [
    'T-shirt ufficiale Crinali',
    'Allenamento settimanale di gruppo',
    'Accesso al gruppo WhatsApp riservato ai membri',
    'Sconto sulle iscrizioni degli eventi',
    'Gare e trasferte di squadra',
    'Sconti esclusivi presso i partner convenzionati',
  ];

  return (
    <div className="pt-20">
      <section
        className="relative h-96 flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: 'url(/squadra.jpeg)',
        }}
      >
        <div className="absolute inset-0 bg-black/70 pointer-events-none"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl font-montserrat font-bold mb-4 text-shadow">Unisciti alla Squadra</h1>
          <p className="text-xl">Diventa parte della famiglia Crinali</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-montserrat text-black mb-6">Perché Iscriversi?</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Entrare a far parte di Crinali significa unirsi a una community di appassionati che condividono la stessa passione per i sentieri e la natura. Non sei uno dei tanti, ma un membro del gruppo con cui condivideremo ogni avventura: Crinali siete voi che ogni volta ci date fiducia e contribuite a rendere unico ogni momento di condivisione.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="bg-sand/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-sand" />
              </div>
              <h3 className="font-montserrat text-black mb-2">Community</h3>
              <p className="text-sm text-gray-600">Una famiglia di oltre 180 membri</p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="bg-sand/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-sand" />
              </div>
              <h3 className="font-montserrat text-black mb-2">Eventi</h3>
              <p className="text-sm text-gray-600">Oltre 20 eventi organizzati all'anno</p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="bg-sand/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-sand" />
              </div>
              <h3 className="font-montserrat text-black mb-2">Esperienza</h3>
              <p className="text-sm text-gray-600">Viviamo l’outdoor da tanti anni</p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="bg-sand/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-sand" />
              </div>
              <h3 className="font-montserrat text-black mb-2">Passione</h3>
              <p className="text-sm text-gray-600">100% dedizione e amore per la natura</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-montserrat text-black text-center mb-12">
              Vantaggi per i Membri
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm">
                  <div className="bg-sand/10 p-2 rounded-full flex-shrink-0">
                    <Check className="w-5 h-5 text-sand" />
                  </div>
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-montserrat text-black mb-6">La Maglia Ufficiale</h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Ogni membro potrà avere la maglia ufficiale di Crinali, realizzata con tessuti tecnici traspiranti di alta qualità. Pensata per portare con voi la filosofia del team in ogni chilometro sui sentieri.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-2">
                    <Shirt className="w-5 h-5 text-sand" />
                    <span className="text-gray-700">Tessuto tecnico traspirante</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Shirt className="w-5 h-5 text-sand" />
                    <span className="text-gray-700">Design esclusivo Crinali</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Shirt className="w-5 h-5 text-sand" />
                    <span className="text-gray-700">I colori sono quelli del sentiero, in ogni sua sfumatura</span>
                  </li>
                </ul>
              </div>

              <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
                <img
                  src="/foto maglia crinali.jpeg"
                  alt="Maglia Crinali"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-montserrat text-center mb-8">Quote di Iscrizione</h2>

           <div className="flex flex-col md:flex-row justify-center gap-8">
  {/* BOX FIDAL */}
  <div className="bg-sand rounded-lg p-10 border-2 border-sand-dark shadow-xl max-w-md w-full">
    <h3 className="text-3xl font-montserrat mb-4 text-center">FIDAL</h3>
    <div className="text-5xl font-bold mb-4 text-center">40€</div>
    <p className="text-white/90 mb-8 text-center">Valida per tutto l'anno solare</p>
    <ul className="space-y-3 mb-8">
      <li className="flex items-center gap-3"><Check className="w-5 h-5 text-white" /><span>Tutti i vantaggi inclusi</span></li>
      <li className="flex items-center gap-3"><Check className="w-5 h-5 text-white" /><span>Maglia ufficiale</span></li>
      <li className="flex items-center gap-3"><Check className="w-5 h-5 text-white" /><span>Sconti su eventi</span></li>
      <li className="flex items-center gap-3"><Check className="w-5 h-5 text-white" /><span>Assicurazione sportiva</span></li>
      <li className="flex items-center gap-3"><Check className="w-5 h-5 text-white" /><span>Accesso gruppo WhatsApp</span></li>
    </ul>
    <button
      onClick={() => onNavigate?.('contatti')}
      className="w-full bg-white text-sand hover:bg-gray-100 px-6 py-4 rounded-lg font-semibold transition-colors text-lg"
    >
      Iscriviti Ora
    </button>
  </div>

  {/* BOX UISP */}
  <div className="bg-sand rounded-lg p-10 border-2 border-sand-dark shadow-xl max-w-md w-full">
    <h3 className="text-3xl font-montserrat mb-4 text-center">UISP</h3>
    <div className="text-5xl font-bold text-center">25€</div>
    <p className="text-sm text-white/70 mb-4 text-center">(Rinnovo a 20€)</p>
    <p className="text-white/90 mb-8 text-center">Valida dal 1 Settembre al 31 Agosto</p>
    <ul className="space-y-3 mb-8">
      <li className="flex items-center gap-3"><Check className="w-5 h-5 text-white" /><span>Tutti i vantaggi inclusi</span></li>
      <li className="flex items-center gap-3"><Check className="w-5 h-5 text-white" /><span>Maglia ufficiale</span></li>
      <li className="flex items-center gap-3"><Check className="w-5 h-5 text-white" /><span>Sconti su eventi</span></li>
      <li className="flex items-center gap-3"><Check className="w-5 h-5 text-white" /><span>Assicurazione sportiva</span></li>
      <li className="flex items-center gap-3"><Check className="w-5 h-5 text-white" /><span>Accesso gruppo WhatsApp</span></li>
    </ul>
    <button
      onClick={() => onNavigate?.('contatti')}
      className="w-full bg-white text-sand hover:bg-gray-100 px-6 py-4 rounded-lg font-semibold transition-colors text-lg"
    >
      Iscriviti Ora
    </button>
  </div>
</div>

            <p className="text-center mt-8 text-white/80">
              La quota include l'assicurazione sportiva e tutti i vantaggi riservati ai membri.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-montserrat text-black mb-6">Come Iscriversi</h2>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div>
                <div className="bg-sand text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="font-montserrat text-black mb-2">Compila il Form</h3>
                <p className="text-sm text-gray-600">
                  Inserisci i tuoi dati e scegli la quota di iscrizione
                </p>
              </div>

              <div>
                <div className="bg-sand text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="font-montserrat text-black mb-2">Effettua il Pagamento</h3>
                <p className="text-sm text-gray-600">
                  Completa l'iscrizione con bonifico o Satispay
                </p>
              </div>

              <div>
                <div className="bg-sand text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="font-montserrat text-black mb-2">Ricevi la Maglia</h3>
                <p className="text-sm text-gray-600">
                  Contattaci per ricevere la tua maglia ufficiale 
                </p>
              </div>
            </div>

            <button
              onClick={() => onNavigate?.('contatti')}
              className="bg-sand hover:bg-sand-dark text-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 text-lg"
            >
              ISCRIVITI ORA
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
