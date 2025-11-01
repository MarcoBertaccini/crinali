import { Heart, Target, Users, Compass } from 'lucide-react';

interface ChiSiamoProps {
  onNavigate?: (page: string) => void;
}

export default function ChiSiamo({ onNavigate }: ChiSiamoProps = {}) {
  return (
    <div className="pt-20">
      <section
        className="relative h-96 flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1308746/pexels-photo-1308746.jpeg?auto=compress&cs=tinysrgb&w=1600)',
        }}
      >
        <div className="absolute inset-0 bg-black/70 pointer-events-none"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl font-montserrat font-bold mb-4 text-shadow">Chi Siamo</h1>
          <p className="text-xl">La nostra storia, i nostri valori</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-montserrat text-black mb-6">La Nostra Storia</h2>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                Crinali Trail Running nasce nel cuore dell'Emilia-Romagna dalla passione condivisa
                di un gruppo di amici che amano correre e camminare sui sentieri dell'Appennino.
                Quello che è iniziato come un piccolo gruppo di appassionati si è trasformato in
                una vera e propria community che conta oggi decine di membri attivi.
              </p>
              <p>
                Il nostro nome, "Crinali", richiama le creste delle montagne che percorriamo, quei
                sentieri panoramici che ci regalano viste mozzafiato e momenti indimenticabili.
                Ogni uscita è un'opportunità per scoprire nuovi percorsi, superare i nostri limiti
                e soprattutto condividere la gioia di stare insieme nella natura.
              </p>
              <p>
                Non siamo solo una società sportiva, siamo una famiglia. Accogliamo persone di ogni
                livello, dal principiante che muove i primi passi nel trail running all'atleta
                esperto che cerca nuove sfide. La nostra filosofia è semplice: divertirsi,
                rispettare la natura e crescere insieme.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-montserrat text-black text-center mb-12">I Nostri Valori</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-sand/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-sand" />
              </div>
              <h3 className="text-xl font-montserrat text-black mb-3">Passione</h3>
              <p className="text-gray-600">
                Amore per il trail running e per i sentieri di montagna che ci spinge sempre avanti
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-sand/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-sand" />
              </div>
              <h3 className="text-xl font-montserrat text-black mb-3">Community</h3>
              <p className="text-gray-600">
                Spirito di gruppo e sostegno reciproco in ogni momento
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-sand/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Compass className="w-8 h-8 text-sand" />
              </div>
              <h3 className="text-xl font-montserrat text-black mb-3">Esplorazione</h3>
              <p className="text-gray-600">
                Voglia di scoprire nuovi sentieri e territori inesplorati
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-sand/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-sand" />
              </div>
              <h3 className="text-xl font-montserrat text-black mb-3">Crescita</h3>
              <p className="text-gray-600">
                Miglioramento continuo, sia come atleti che come persone
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-montserrat text-black text-center mb-12">La Squadra</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="relative h-80 rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://images.pexels.com/photos/2105493/pexels-photo-2105493.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Team Crinali"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="relative h-80 rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://images.pexels.com/photos/3621179/pexels-photo-3621179.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Team Crinali"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
          <div className="text-center mt-12 max-w-3xl mx-auto">
            <p className="text-lg text-gray-700 mb-8">
              Siamo un gruppo eterogeneo di persone accomunate dalla stessa passione. Corridori,
              escursionisti, fotografi, amanti della natura: ognuno porta il proprio contributo
              unico alla community. Insieme organizziamo allenamenti settimanali, uscite nel
              weekend ed eventi speciali durante tutto l'anno.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-montserrat mb-6">Vuoi Correre con Noi?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Se condividi la nostra passione per il trail running e vuoi far parte di questa
            fantastica community, contattaci o vieni a conoscerci di persona!
          </p>
          <button
            onClick={() => onNavigate?.('contatti')}
            className="bg-sand hover:bg-sand-dark text-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105"
          >
            CONTATTACI
          </button>
        </div>
      </section>
    </div>
  );
}
