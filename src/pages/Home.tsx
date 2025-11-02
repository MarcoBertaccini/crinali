import { Calendar, Users, Shield, Mountain, TrendingUp, Mail, MessageCircle, Facebook, Instagram } from 'lucide-react';
import AnimatedCounter from '../components/AnimatedCounter';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  return (
    <div className="min-h-screen">
      <section className="relative h-screen flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center pointer-events-none"
          style={{
            backgroundImage: 'url("public/background home.jpeg")',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Crinali
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-white/90 max-w-2xl mx-auto">
            Allenamenti, community, eventi. Vivi l’outdoor insieme a noi.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => onNavigate('contatti')}
              className="w-auto bg-sand hover:bg-sand-dark text-white px-10 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 shadow-xl min-h-[44px]"
            >
              Iscriviti
            </button>
            <button
              onClick={() => onNavigate('partner')}
              className="w-auto bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-10 py-4 rounded-lg font-semibold text-lg transition-all border-2 border-white/50 min-h-[44px]"
            >
              Partner
            </button>
          </div>
        </div>
      </section>

      <section className="py-24 bg-sand-light/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="bg-sand/20 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="w-10 h-10 text-sand-dark" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-3">Comunity</h3>
              <p className="text-black-light leading-relaxed">
                Uno dei nostri fondamenti: la condivisione
              </p>
            </div>

            <div className="text-center">
              <div className="bg-sand/20 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Shield className="w-10 h-10 text-sand-dark" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-3">Sicurezza</h3>
              <p className="text-black-light leading-relaxed">
                Uscite organizzate con guide esperte e assicurazione
              </p>
            </div>

            <div className="text-center">
              <div className="bg-sand/20 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Mountain className="w-10 h-10 text-sand-dark" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-3">Territorio</h3>
              <p className="text-black-light leading-relaxed">
                Scopriamo i sentieri più belli dell'Appennino
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Crinali in numeri</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-6xl mb-4">🏃‍♂️</div>
              <AnimatedCounter targetText="180+" />
              <p className="text-lg text-black-light">iscritti attivi</p>
            </div>

            <div className="text-center">
              <div className="text-6xl mb-4">🏔️</div>
              <AnimatedCounter targetText="20+" />
              <p className="text-lg text-black-light">eventi organizzati nel 2025</p>
            </div>

            <div className="text-center">
              <div className="text-6xl mb-4">🌄</div>
              <AnimatedCounter targetText="320+" />
              <p className="text-lg text-black-light">km di sentieri percorsi</p>
            </div>
          </div>
        </div>
      </section>

      <section id="partner" className="py-24 bg-sand-light/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/possibileprogetto.jpeg"
                alt="Gruppo Crinali"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
                Il progetto Crinali
              </h2>
              <p className="text-lg text-black-light mb-8 leading-relaxed">
                Crinali nasce dalla passione per la corsa, la natura e la valorizzazione del territorio. Il nostro obiettivo è quello di creare una comunità in cui ogni associato possa crescere, migliorarsi e condividere il piacere dello sport all’aria aperta.
              </p>

              <button
                onClick={() => onNavigate('squadra')}
                className="w-auto bg-sand hover:bg-sand-dark text-white px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg min-h-[44px]"
              >
                Scopri di più
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-white to-sand-light/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Unisciti a Crinali</h2>
              <p className="text-xl text-black-light leading-relaxed">
                Vuoi far parte della nostra community? Contattaci per iscriverti!
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
              <p className="text-lg text-black-light text-center mb-10 leading-relaxed">
                Se vuoi iscriverti e correre con noi, scegli il modo che preferisci per metterti in contatto:
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <a
                  href="mailto:info@crinali-running.it"
                  className="group bg-sand-light/30 hover:bg-sand hover:text-white p-6 rounded-xl transition-all transform hover:scale-105 hover:shadow-lg flex items-start gap-4"
                >
                  <div className="bg-sand group-hover:bg-white p-3 rounded-full transition-colors">
                    <Mail className="w-6 h-6 text-white group-hover:text-sand" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-bold text-black group-hover:text-white mb-1 transition-colors">Email</h3>
                    <p className="text-sm text-black-light group-hover:text-white/90 transition-colors break-all">
                      info@crinali-running.it
                    </p>
                  </div>
                </a>

                <a
                  href="https://wa.me/3394010495"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-sand-light/30 hover:bg-[#25D366] hover:text-white p-6 rounded-xl transition-all transform hover:scale-105 hover:shadow-lg flex items-start gap-4"
                >
                  <div className="bg-[#25D366] group-hover:bg-white p-3 rounded-full transition-colors">
                    <MessageCircle className="w-6 h-6 text-white group-hover:text-[#25D366]" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-bold text-black group-hover:text-white mb-1 transition-colors">WhatsApp</h3>
                    <p className="text-sm text-black-light group-hover:text-white/90 transition-colors">
                      Scrivici direttamente
                    </p>
                  </div>
                </a>

                <a
                  href="https://www.facebook.com/profile.php?id=61566640619886"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-sand-light/30 hover:bg-[#1877F2] hover:text-white p-6 rounded-xl transition-all transform hover:scale-105 hover:shadow-lg flex items-start gap-4"
                >
                  <div className="bg-[#1877F2] group-hover:bg-white p-3 rounded-full transition-colors">
                    <Facebook className="w-6 h-6 text-white group-hover:text-[#1877F2]" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-bold text-black group-hover:text-white mb-1 transition-colors">Facebook</h3>
                    <p className="text-sm text-black-light group-hover:text-white/90 transition-colors">
                      Seguici e contattaci
                    </p>
                  </div>
                </a>

                <a
                  href="https://www.instagram.com/crinali_runningclub/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-sand-light/30 hover:bg-gradient-to-br hover:from-[#833AB4] hover:via-[#E1306C] hover:to-[#F77737] hover:text-white p-6 rounded-xl transition-all transform hover:scale-105 hover:shadow-lg flex items-start gap-4"
                >
                  <div className="bg-gradient-to-br from-[#833AB4] via-[#E1306C] to-[#F77737] group-hover:bg-white group-hover:from-white group-hover:to-white p-3 rounded-full transition-all">
                    <Instagram className="w-6 h-6 text-white group-hover:text-[#E1306C]" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-bold text-black group-hover:text-white mb-1 transition-colors">Instagram</h3>
                    <p className="text-sm text-black-light group-hover:text-white/90 transition-colors">
                      @crinali_runningclub
                    </p>
                  </div>
                </a>
              </div>

              <div className="mt-10 pt-8 border-t border-black/10">
                <p className="text-center text-black-light text-sm leading-relaxed">
                  Non vediamo l'ora di conoscerti e di correre insieme sui sentieri dell'Appennino!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
