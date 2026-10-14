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
              <div className="relative w-full h-full rounded-full border-2 border-secondary overflow-hidden shadow-2xl">
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
            <h1 className="text-4xl md:text-4xl font-bold leading-tight">
              Ing. José Alberto <br />
              <span className="text-secondary">
                Ascención Silvestre
              </span>
            </h1>

            <h2 className="text-xl md:text-2xl text-muted-foreground">
              Desarrollador Web Full Stack
            </h2>

            <p className="max-w-xl ">
              Desarrollo aplicaciones web escalables utilizando React,
              TypeScript y Laravel. Me enfoco en crear soluciones
              funcionales con código limpio y buenas prácticas.
            </p>
          </motion.div>
          
        </section>
      </div>
    </>
  );
}
