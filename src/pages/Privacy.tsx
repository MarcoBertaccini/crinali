interface PrivacyProps {
  onNavigate: (page: string) => void;
}

export default function Privacy({ onNavigate }: PrivacyProps) {
  return (
    <div className="min-h-screen bg-white">
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-8">
            Privacy e Cookie Policy
          </h1>

          <div className="prose prose-lg max-w-none">
            <div className="bg-sand-light/20 border-l-4 border-sand p-6 rounded-lg mb-8">
              <p className="text-lg text-black-light leading-relaxed mb-4">
                Questo sito non utilizza cookie di profilazione né di terze parti.
              </p>
              <p className="text-lg text-black-light leading-relaxed mb-4">
                Sono presenti solo cookie tecnici necessari al corretto funzionamento del sito.
              </p>
              <p className="text-lg text-black-light leading-relaxed">
                Nessun dato personale degli utenti viene raccolto o tracciato per fini commerciali.
              </p>
            </div>

            <div className="mt-12">
              <h2 className="text-2xl font-bold text-black mb-4">Informazioni e Contatti</h2>
              <p className="text-lg text-black-light leading-relaxed">
                Per eventuali richieste o informazioni:{' '}
                <a
                  href="mailto:info@crinali.it"
                  className="text-sand hover:text-sand-dark font-semibold transition-colors"
                >
                  info@crinalirunning.it
                </a>
              </p>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <button
                onClick={() => onNavigate('home')}
                className="text-sand hover:text-sand-dark font-semibold transition-colors"
              >
                ← Torna alla home
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
