"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-background text-foreground px-6 md:px-16 py-22">
        <section className="grid md:grid-cols-2 gap-12 items-center">

          {/* AVATAR - IZQUIERDA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="relative w-72 h-72 md:w-70 md:h-70 flex items-center justify-center">

              {/* Glow */}
              <div className="absolute inset-0 rounded-full bg-secondary/50 blur-3xl"></div>

              {/* Imagen */}
              <div className="relative w-full h-full rounded-full border-2 border-secondary overflow-hidden shadow-2xl md:w-full md:h-full">
                <img
                  src="/imagen/joss1.jpg"
                  alt="Avatar José Alberto"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* TEXTO - DERECHA */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 text-center md:text-left"
          >
            <h1 className="text-4xl md:text-4xl font-inter leading-tight">
              ¡Hola!<br />
              <span className="text-secondary">
                Soy José 
              </span>
            </h1>

            <h2 className="text-xl md:text-2xl font-inter text-muted-foreground">
              Desarrollador Web Full Stack
            </h2>

            <p className="max-w-xl font-inter">
             Me dedico a convertir ideas en productos digitales funcionales, desde sitios web hasta
aplicaciones a la medida, con código limpio y buenas prácticas. No dudes en contactarme
o echar un vistazo a mis trabajos anteriores a continuación.
            </p>

            {/* BOTÓN DESCARGAR CV */}
            <motion.a
              href="/cv/CV_Jose_Alberto_Ascencion_Silvestre_FullStack.pdf"
              download="CV_Jose_Alberto_Ascencion_Silvestre_FullStack.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 rounded-full bg-secondary px-6 py-3 font-inter text-background shadow-lg transition-opacity hover:opacity-90"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Descargar CV
            </motion.a>
          </motion.div>

        </section>
      </div>
    </>
  );
}