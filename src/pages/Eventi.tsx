import { Users, Wine, UtensilsCrossed, Music, Heart, Laugh } from 'lucide-react';

interface EventiProps {
  onNavigate?: (page: string) => void;
}

export default function Eventi({ onNavigate }: EventiProps = {}) {
  const eventTypes = [
    {
      title: 'Trail Running',
      description: 'La nostra passione principale: correre sui sentieri dell\'Appennino, esplorando percorsi di varia difficoltà e lunghezza.',
      icon: Users,
      image: 'public/trail running.png',
    },
    {
      title: 'Trekking',
      description: ': Conoscere nuovi sentieri con la calma e lo spirito di gruppo. Percorsi di media e lunga distanza adatti a tutti.',
      icon: UtensilsCrossed,
      image:'public/trekking.jpeg',
    },
    {
      title: 'Birrette',
      description: 'Dopo una bella corsa o un caldo trekking, niente di meglio che rilassarsi insieme con una birretta fresca e chiacchiere.',
      icon: Wine,
      image: 'public/birrette.jpeg',
    },
    {
      title: 'Feste e Celebrazioni',
      description: 'Festeggiamo insieme i traguardi raggiunti, le stagioni e ogni occasione per stare insieme.',
      icon: Music,
      image: 'public/festeggiamo.jpeg',
    },
  ];

  return (
    <div className="pt-20">
      <section
        className="relative h-96 flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: 'url(public/eventi.jpeg)',
        }}
      >
        <div className="absolute inset-0 bg-black/70 pointer-events-none"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl font-montserrat font-bold mb-4 text-shadow">Eventi</h1>
          <p className="text-xl">Non solo corsa, ma convivialità e divertimento</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-montserrat text-black mb-6">Più di un Running Club</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Crinali non è solo corsa, trail running e trekking. Siamo una vera community che ama stare insieme non solo sui sentieri, ma anche a tavola, con qualche birretta o durante le nostre occasioni sociali. Organizziamo regolarmente eventi dove il piacere di condividere momenti insieme è al centro di tutto. Perché correre è bello, ma crediamo che farlo con gli amici e festeggiare insieme sia ancora meglio.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-6">
              <div className="bg-sand/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-sand-dark" />
              </div>
              <h3 className="text-xl font-montserrat text-black mb-3">Spirito di Gruppo</h3>
              <p className="text-gray-600">
                Ogni evento è un'occasione per conoscersi meglio e rafforzare i legami
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-sand/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Laugh className="w-8 h-8 text-sand-dark" />
              </div>
              <h3 className="text-xl font-montserrat text-black mb-3">Divertimento</h3>
              <p className="text-gray-600">
                Tra risate, racconti e momenti spensierati, non ci si annoia mai
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-sand/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-sand-dark" />
              </div>
              <h3 className="text-xl font-montserrat text-black mb-3">Inclusività</h3>
              <p className="text-gray-600">
                Tutti sono i benvenuti, che tu corra veloce o preferisca camminare
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-montserrat text-black text-center mb-12">Le Nostre Attività</h2>
          <div className="space-y-8 max-w-5xl mx-auto">
            {eventTypes.map((event, index) => (
              <div
                key={index}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow`}
              >
                <div className="md:w-1/2 h-64 md:h-auto">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="md:w-1/2 p-8 flex flex-col justify-center">
                  <div className="bg-sand/10 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                    <event.icon className="w-7 h-7 text-sand-dark" />
                  </div>
                  <h3 className="text-2xl font-montserrat text-black mb-4">{event.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-montserrat text-black text-center mb-8">La Filosofia degli Eventi</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 rounded-lg p-8">
                <h3 className="text-xl font-montserrat text-black mb-4">Sul Sentiero</h3>
                <p className="text-gray-700 leading-relaxed">
                 Durante le nostre uscite ci supportiamo a vicenda, condividiamo i percorsi più belli e ci spingiamo oltre i nostri limiti. Ma sempre con il sorriso e lo spirito giusto, senza pressioni o competizioni eccessive.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-8">
                <h3 className="text-xl font-montserrat text-black mb-4">A Tavola</h3>
                <p className="text-gray-700 leading-relaxed">
                  Dopo l'attività fisica, ci piace ritrovarci per mangiare e bere insieme. Dalle cene sociali
                  agli aperitivi post-corsa, ogni occasione è buona per rilassarsi, raccontare aneddoti e
                  consolidare le amicizie nate sui sentieri.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-white to-sand-light/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-montserrat font-bold text-black mb-4">Prossimi Eventi</h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Seguici sui social per rimanere aggiornato sui prossimi eventi e le attività in programma
            </p>
          </div>

          <div className="text-center max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-12 border border-sand/20">
              <div className="mb-8">
                <div className="bg-sand/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-10 h-10 text-sand" />
                </div>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  Pubblichiamo regolarmente nuovi eventi su Facebook e Instagram. Unisciti alla community per non perdere nessuna occasione di correre insieme!
                </p>
              </div>

              <button
                onClick={() => onNavigate?.('contatti')}
                className="bg-sand hover:bg-sand-dark text-white px-10 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 shadow-lg"
              >
                Seguici sui Social
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
