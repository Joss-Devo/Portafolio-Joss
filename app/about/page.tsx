"use client";

import AnimatedAvatar from "@/components/AnimatedAvatar";
import { motion } from "framer-motion";

const AboutMePage = () => {
  return (
    <section className="min-h-screen py-20">

      {/* CONTENIDO CENTRADO */}
      <div className="container mx-auto grid grid-cols-1  md:grid-cols-2 gap-12 items-center px-6">
        
        {/* Avatar */}
        <div className="flex justify-center -mt-8 mr-1 pr-2   md:-mt-15">
          <AnimatedAvatar />
        </div>

        {/* Texto */}
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }} className="space-y-4 text-center  md:text-left">
          <h1 className="text-4xl  font-inter">
            Sobre mí
          </h1>

          <p className="leading-relaxed text-xl font-inter  text-white">
            Soy José Alberto Ascensión Silvestre, ingeniero en sistemas computacionales especializado en desarrollo web, con enfoque en aplicaciones Full Stack modernas y escalables
          </p>

          <p className="leading-relaxed text-xl font-inter   text-white">
            Durante mi desarrollo profesional he trabajado en el diseño y desarrollo de aplicaciones web Full Stack, como sistemas de gestión, tiendas en línea con panel administrativo y plataformas multimedia. Me he encargado del frontend, el backend y el diseño de bases de datos, utilizando React, Next.js, TypeScript, Laravel, Angular, Node.js, PostgreSQL, MySQL, MongoDB y Supabase, con un enfoque en código limpio y experiencia de usuario.
          </p>
        </motion.div>
      </div>

      {/* BLOQUE ANCHO COMPLETO */}
      <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }} className="w-full   py-8 px-6">
        <p className="max-w-7xl ml-10 mr-10 pr-1  text-wrap font-inter md:text-start  text-xl  text-white">
          Me caracterizo por mi pensamiento analítico, mi organización y mi compromiso con la calidad del código. Me gusta aprender sobre nuevas tecnologías, y lo hago de forma constante para mantenerme actualizado. Mi objetivo es integrarme a un equipo donde pueda aportar soluciones técnicas sólidas y participar en proyectos de alto impacto.
        </p>
      </motion.div>

    </section>
  );
};

export default AboutMePage;




     

   