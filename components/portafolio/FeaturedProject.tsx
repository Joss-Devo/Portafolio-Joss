"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import ProjectGallery from "./ProjectGallery";

interface Props {
  title: string;
  description: string;
  image: string;
  tech: string[];
  gallery?: string[]; // 👈 nuevas imágenes
}

const FeaturedProject = ({
  title,
  description,
  image,
  tech,
  gallery = [],
}: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative rounded-3xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-xl group"
      >
        {/* Imagen principal */}
        <img
          src={image}
          alt={title}
          className="w-full h-[400px] object-cover opacity-40 group-hover:opacity-30 transition"
        />

        {/* Contenido */}
        <div className="absolute inset-0 flex flex-col justify-center p-6 md:p-12">
          <h2 className="text-4xl font-inter mb-4">{title}</h2>

          <p className="max-w-xl text-gray-300 mb-6">{description}</p>

          {/* Tecnologías */}
          <div className="flex gap-3 flex-wrap mb-6">
            {tech.map((item, i) => (
              <span
                key={i}
                className="px-4 py-1 rounded-full bg-secondary/20 font-inter text-sm"
              >
                {item}
              </span>
            ))}
          </div>

          {/* 🔥 BOTÓN */}
          {gallery.length > 0 && (
            <button
              onClick={() => setOpen(true)}
              className="px-6 py-3 rounded-xl bg-secondary text-white font-inter hover:scale-105 transition w-max"
            >
              Ver imágenes del proyecto
            </button>
          )}
        </div>
      </motion.div>

      {/* Modal */}
      {open && (
        <ProjectGallery images={gallery} onClose={() => setOpen(false)} />
      )}
    </>
  );
};

export default FeaturedProject;