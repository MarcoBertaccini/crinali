import { Mail, Phone, Facebook, Instagram } from "lucide-react";
import { useState, type FormEvent, type ChangeEvent } from "react";

export default function Contatti() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 3000);
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
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
        <div className="absolute inset-0 bg-black/70 pointer-events-none" />
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
                  <p className="text-gray-700">info@crinalirunning.it</p>
                </div>
              </div>

              {/* TELEFONO */}
              <div className="flex items-start gap-4">
                <div className="bg-sand/10 p-3 rounded-full">
                  <Phone className="w-6 h-6 text-sand" />
                </div>
                <div>
                  <h3 className="font-semibold text-black mb-1">Telefono</h3>
                  <p className="text-gray-700">+39 339 401 0495</p>
                  <p className="text-sm text-gray-600"></p>
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
                    aria-label="Facebook"
                  >
                    <Facebook className="w-6 h-6" />
                  </a>
                  <a
                    href="https://www.instagram.com/crinali_runningclub/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white p-3 rounded-full hover:bg-sand hover:text-white transition-colors text-black"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a
                    href="mailto:info@crinalirunning.it"
                    className="bg-white p-3 rounded-full hover:bg-sand hover:text-white transition-colors text-black"
                    aria-label="Invia email"
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
        </div>
      </section>

      {/* DOVE SIAMO */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-montserrat text-black text-center mb-8">
            Dove Siamo
          </h2>
          <p className="text-center text-gray-700 mb-8 max-w-2xl mx-auto">
            I nostri eventi si svolgono principalmente nell&
