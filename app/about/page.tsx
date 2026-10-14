"use client";

import AnimatedAvatar from "@/components/AnimatedAvatar";
import { motion } from "framer-motion";

const AboutMePage = () => {
  return (
    <section className="min-h-screen py-20">

      {/* CONTENIDO CENTRADO */}
      <div className="container mx-auto grid grid-cols-1  md:grid-cols-2 gap-12 items-center px-6">
        
        {/* Avatar */}
        <div className="flex justify-center -mt-8 mr-1 pr-2 border border-white/10  md:-mt-15">
          <AnimatedAvatar />
        </div>

        {/* Texto */}
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }} className="space-y-4 text-center  md:text-left">
          <h1 className="text-4xl  font-bold">
            Sobre mí
          </h1>

          <p className="leading-relaxed text-xl border border-white/10 text-white">
            Soy José Alberto Ascención Silvestre, Ingeniero en Desarrollo Web 
            con enfoque en aplicaciones Full Stack modernas y escalables.
          </p>

          <p className="leading-relaxed text-xl border border-white/10 text-white">
            Trabajo principalmente con React, Next.js, TypeScript y Laravel, 
            desarrollando soluciones orientadas al rendimiento, seguridad 
            y experiencia de usuario. Me caracterizo por mi pensamiento 
            analítico, organización y compromiso con la calidad del código.
          </p>
        </motion.div>
      </div>

      {/* BLOQUE ANCHO COMPLETO */}
      <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }} className="w-full   py-8 px-6">
        <p className="max-w-7xl ml-10 mr-10 pr-1  text-wrap md:text-start border border-white/10 text-xl  text-white">
          Mi objetivo profesional es formar parte de un equipo donde pueda contribuir con soluciones técnicas sólidas, seguir 
          aprendiendo continuamente y participar en proyectos de alto impacto.
        </p>
      </motion.div>

    </section>
  );
};

export default AboutMePage;




     

   