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
  reverse?: boolean;
}

const PortfolioItem = ({
  title,
  description,
  image,
  tech,
  gallery = [],
  reverse,
}: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: reverse ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="grid md:grid-cols-2 gap-10 items-center"
      >
        <img
          src={image}
          alt={title}
          className="rounded-2xl shadow-2xl"
        />

        <div className="space-y-4">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="text-gray-400">{description}</p>

          <div className="flex gap-2 flex-wrap">
            {tech.map((item, i) => (
              <span
                key={i}
                className="px-3 py-1 text-xs rounded-full bg-secondary/20 text-secondary"
              >
                {item}
              </span>
            ))}
          </div>

          {/* 🔥 Botón */}
          {gallery.length > 0 && (
            <button
              onClick={() => setOpen(true)}
              className="mt-4 px-5 py-2 rounded-xl bg-secondary text-white text-sm hover:scale-105 transition"
            >
              Ver imágenes
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

export default PortfolioItem;