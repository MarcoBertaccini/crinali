import { useState, useEffect } from 'react';
import { Users, Wine, UtensilsCrossed, Music, Heart, Laugh, Calendar, MapPin } from 'lucide-react';

interface EventiProps {
  onNavigate?: (page: string) => void;
}

interface AirtableEvent {
  id: string;
  fields: {
    Titolo?: string;
    Data?: string;
    Luogo?: string;
    'Link iscrizione'?: string;
    Immagine?: Array<{
      url: string;
    }>;
  };
}

export default function Eventi({ onNavigate }: EventiProps = {}) {
  const [events, setEvents] = useState<AirtableEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch(
          'https://api.airtable.com/v0/appMWdXxlHvAqOcMc/Eventi%20Crinali',
          {
            headers: {
              Authorization: 'Bearer pataYvWGiMSGsrfOS.19d4c631ec08b7fdb33945c76483ef288c1b8db1b6b55a2b666a008b15cfe627',
            },
          }
        );

        if (!response.ok) {
          throw new Error('Failed to fetch events');
        }

        const data = await response.json();

        const today = new Date();
        today.setHours(0, 0, 0, 0);

        const futureEvents = data.records
          .filter((event: AirtableEvent) => {
            if (!event.fields.Data) return false;
            const eventDate = new Date(event.fields.Data);
            return eventDate >= today;
          })
          .sort((a: AirtableEvent, b: AirtableEvent) => {
            const dateA = new Date(a.fields.Data || '').getTime();
            const dateB = new Date(b.fields.Data || '').getTime();
            return dateA - dateB;
          });

        setEvents(futureEvents);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching events:', err);
        setError(true);
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);
  const eventTypes = [
    {
      title: 'Trail Running',
      description: 'La nostra passione principale: correre sui sentieri dell\'Appennino, esplorando percorsi di varia difficoltà e lunghezza.',
      icon: Users,
      image: '/trail running.png',
    },
    {
      title: 'Trekking',
      description: ': Conoscere nuovi sentieri con la calma e lo spirito di gruppo. Percorsi di media e lunga distanza adatti a tutti.',
      icon: UtensilsCrossed,
      image:'/trekking.jpeg',
    },
    {
      title: 'Birrette',
      description: 'Dopo una bella corsa o un caldo trekking, niente di meglio che rilassarsi insieme con una birretta fresca e chiacchiere.',
      icon: Wine,
      image: '/birrette.jpeg',
    },
    {
      title: 'Feste e Celebrazioni',
      description: 'Festeggiamo insieme i traguardi raggiunti, le stagioni e ogni occasione per stare insieme.',
      icon: Music,
      image: '/festeggiamo.jpeg',
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
            <p className="text-xl text-gray-700">
              Scopri i nostri eventi in programma e unisciti a noi
            </p>
          </div>

          {loading && (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-sand-dark"></div>
              <p className="mt-4 text-gray-600">Caricamento eventi...</p>
            </div>
          )}

          {error && (
            <div className="text-center py-12 max-w-2xl mx-auto">
              <p className="text-gray-600 text-lg">
                Nessun evento disponibile al momento. Controlla presto per aggiornamenti!
              </p>
            </div>
          )}

          {!loading && !error && events.length === 0 && (
            <div className="text-center py-12 max-w-2xl mx-auto">
              <p className="text-gray-600 text-lg">
                Nessun evento disponibile al momento. Controlla presto per aggiornamenti!
              </p>
            </div>
          )}

          {!loading && !error && events.length > 0 && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {events.map((event) => {
                const eventDate = event.fields.Data
                  ? new Date(event.fields.Data).toLocaleDateString('it-IT', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric',
                    })
                  : '';

                const imageUrl =
                  event.fields.Immagine && event.fields.Immagine.length > 0
                    ? event.fields.Immagine[0].url
                    : 'https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=800';

                return (
                  <div
                    key={event.id}
                    className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all transform hover:scale-105"
                  >
                    <div className="aspect-video w-full overflow-hidden">
                      <img
                        src={imageUrl}
                        alt={event.fields.Titolo || 'Evento'}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-2xl font-montserrat font-bold text-black mb-4">
                        {event.fields.Titolo || 'Evento'}
                      </h3>

                      {event.fields.Data && (
                        <div className="flex items-center gap-2 text-gray-700 mb-3">
                          <Calendar className="w-5 h-5 text-sand-dark flex-shrink-0" />
                          <span className="text-sm">{eventDate}</span>
                        </div>
                      )}

                      {event.fields.Luogo && (
                        <div className="flex items-center gap-2 text-gray-700 mb-6">
                          <MapPin className="w-5 h-5 text-sand-dark flex-shrink-0" />
                          <span className="text-sm">{event.fields.Luogo}</span>
                        </div>
                      )}

                      {event.fields['Link iscrizione'] && (
                        <a
                          href={event.fields['Link iscrizione']}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block w-full bg-sand hover:bg-sand-dark text-black text-center px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105"
                        >
                          Iscriviti
                        </a>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
