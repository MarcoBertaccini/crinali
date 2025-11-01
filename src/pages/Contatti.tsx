import { Mail, Phone, MapPin, Facebook, Instagram } from "lucide-react";
import { useState } from "react";

export default function Contatti() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="pt-20">
      {/* HERO */}
      <section
        className="relative h-96 flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?auto=compress&cs=tinysrgb&w=1600)",
        }}
      >
        <div className="absolute inset-0 bg-black/70 pointer-events-none"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl font-montserrat font-bold mb-4 text-shadow">
            Contatti
          </h1>
          <p className="text-xl">Mettiti in contatto con noi</p>
        </div>
      </section>

      {/* INFO */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-montserrat text-black mb-6">
              Informazioni di Contatto
            </h2>

            <div className="space-y-6 mb-8">
              {/* EMAIL */}
              <div className="flex items-start gap-4">
                <div className="bg-sand/10 p-3 rounded-full">
                  <Mail className="w-6 h-6 text-sand" />
                </div>
                <div>
                  <h3 className="font-semibold text-black mb-1">Email</h3>
                  <p className="text-gray-700">info@crinali.it</p>
                  <p className="text-gray-700">eventi@crinali.it</p>
                </div>
              </div>

              {/* TELEFONO */}
              <div className="flex items-start gap-4">
                <div className="bg-sand/10 p-3 rounded-full">
                  <Phone className="w-6 h-6 text-sand" />
                </div>
                <div>
                  <h3 className="font-semibold text-black mb-1">Telefono</h3>
                  <p className="text-gray-700">+39 333 123 4567</p>
                  <p className="text-sm text-gray-600">
                    Lun-Ven: 9:00 - 18:00
                  </p>
                </div>
              </div>

              {/* SEDE */}
              <div className="flex items-start gap-4">
                <div className="bg-sand/10 p-3 rounded-full">
                  <MapPin className="w-6 h-6 text-sand" />
                </div>
                <div>
                  <h3 className="font-semibold text-black mb-1">Sede</h3>
                  <p className="text-gray-700">
                    Via Monti Appennini, 42
                    <br />
                    41121 Modena (MO)
                    <br />
                    Emilia-Romagna, Italia
                  </p>
                </div>
              </div>
            </div>

            {/* SOCIAL */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-montserrat text-black mb-4">
                Seguici sui Social
              </h3>
              <div className="flex gap-4 mb-4">
                <a
                  href="https://www.facebook.com/profile.php?id=61566640619886"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white p-3 rounded-full hover:bg-sand hover:text-white transition-colors text-black"
                >
                  <Facebook className="w-6 h-6" />
                </a>
                <a
                  href="https://www.instagram.com/crinali_runningclub/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white p-3 rounded-full hover:bg-sand hover:text-white transition-colors text-black"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                <a
                  href="mailto:info@crinali-running.it"
                  className="bg-white p-3 rounded-full hover:bg-sand hover:text-white transition-colors text-black"
                >
                  <Mail className="w-6 h-6" />
                </a>
              </div>
              <p className="text-sm text-gray-600">
                Seguici per restare aggiornato su eventi, foto delle nostre
                avventure e novità dalla community!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DOVE SIAMO */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-montserrat text-black text-center mb-8">
            Dove Siamo
          </h2>
          <p className="text-center text-gray-700 mb-8 max-w-2xl mx-auto">
            La nostra sede si trova nel cuore dell'Emilia-Romagna, punto di
            partenza ideale per esplorare i sentieri dell'Appennino.
          </p>

          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="relative h-96 bg-gray-200">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-16 h-16 text-sand mx-auto mb-4" />
                    <p className="text-gray-600 font-semibold">
                      Emilia-Romagna, Italia
                    </p>
                    <p className="text-sm text-gray-500 mt-2">
                      Modena e provincia
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-6 bg-black text-white">
                <p className="text-center">
                  I nostri eventi si svolgono principalmente nell'Appennino
                  modenese e reggiano. Per informazioni specifiche su come
                  raggiungere i punti di ritrovo, contattaci!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-montserrat text-black mb-6">
            Domande Frequenti
          </h2>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
            Prima di contattarci, dai un'occhiata alle nostre FAQ. Potresti
            trovare subito la risposta che cerchi!
          </p>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto text-left">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-montserrat text-black mb-2">
                Sono principiante, posso partecipare?
              </h3>
              <p className="text-gray-700 text-sm">
                Assolutamente sì! Organizziamo eventi per tutti i livelli. Basta
                scegliere l'evento giusto per te.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-montserrat text-black mb-2">
                Devo essere iscritto per partecipare?
              </h3>
              <p className="text-gray-700 text-sm">
                No, puoi partecipare anche come ospite, ma gli iscritti hanno
                vantaggi e sconti.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-montserrat text-black mb-2">
                Quando ci si allena?
              </h3>
              <p className="text-gray-700 text-sm">
                Gli allenamenti di gruppo sono il martedì sera e il sabato
                mattina. Date e orari variano, contattaci per info.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-montserrat text-black mb-2">
                Posso portare il mio cane?
              </h3>
              <p className="text-gray-700 text-sm">
                Dipende dall'evento. Alcuni percorsi ammettono cani al
                guinzaglio, altri no. Contattaci prima.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
