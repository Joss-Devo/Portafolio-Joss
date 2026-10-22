"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github } from "lucide-react";


const ContactPage = () =>   {
     const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await res.json();

    if (result.success) {
      alert("Mensaje enviado correctamente 🚀");
      form.reset();
    } else {
      alert("Error enviando mensaje ❌");
    }
  };

  return (
    <>
      

      <section className="min-h-screen px-6 md:px-16 py-25">
        <div className="max-w-6xl mx-auto space-y-16">

          {/* HEADER */}
          <div className="text-center space-y-4">
            <h1 className="text-5xl font-inter">
              Contacto
            </h1>
            <p className="text-gray-400 max-w-xl mx-auto">
              ¿Tienes un proyecto en mente o una oportunidad laboral?
              Estoy disponible para colaborar y aportar soluciones.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-start">

            {/* INFORMACIÓN DE CONTACTO */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="flex items-center gap-4">
                <Mail className="text-secondary" size={28} />
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-gray-400">jsilvestre59@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Phone className="text-secondary" size={28} />
                <div>
                  <p className="font-semibold">Teléfono</p>
                  <p className="text-gray-400">+52 55 3461 5504</p>
                </div>
              </div>
            </motion.div>

            {/* FORMULARIO */}
            <motion.form
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6 bg-white/6 border  border-white/10 backdrop-blur-xl p-8 rounded-3xl"
              onSubmit={handleSubmit}

            >
              <div>
                <label className="block mb-2 text-sm">Nombre</label>
                <input
  type="text"
  name="name"
  required
  className="w-full px-4 py-3 rounded-xl bg-black/30 border border-white/10"
/>

              </div>

              <div>
                <label className="block mb-2 text-sm">Email</label>
                <input
  type="email"
  name="email"
  required
  className="w-full px-4 py-3 rounded-xl bg-black/30 border border-white/10"
/>

              </div>

              <div>
                <label className="block mb-2 text-sm">Mensaje</label>
                <textarea
  name="message"
  rows={4}
  required
  className="w-full px-4 py-3 rounded-xl bg-black/30 border border-white/10"
/>

              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-secondary text-white font-inter hover:scale-105 transition"
              >
                Enviar Mensaje
              </button>
            </motion.form>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
