"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface Props {
  images: string[];
  onClose: () => void;
}

const ProjectGallery = ({ images, onClose }: Props) => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 mt-5 bg-black/95 backdrop-blur-lg flex items-center justify-center"
    >
      {/* Botón cerrar */}
      <button
        onClick={onClose}
        className="fixed top-6 right-8 text-white text-4xl font-light hover:scale-110 transition z-50"
      >
        ✕
      </button>

      {/* Flecha izquierda FUERA de la imagen */}
      <button
        onClick={prevSlide}
        className="absolute left-6 text-white text-5xl hover:scale-125 transition z-40"
      >
        ‹
      </button>

      {/* Contenedor imagen */}
      <div className="w-[85vw] h-[85vh] flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.img
            key={current}
            src={images[current]}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4 }}
            className="max-h-full max-w-full object-contain rounded-2xl shadow-2xl"
          />
        </AnimatePresence>
      </div>

      {/* Flecha derecha FUERA de la imagen */}
      <button
        onClick={nextSlide}
        className="absolute right-6 text-white text-5xl hover:scale-125 transition z-40"
      >
        ›
      </button>

      {/* Indicadores */}
      <div className="absolute bottom-8 flex gap-3">
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full cursor-pointer transition ${
              current === index
                ? "bg-white scale-125"
                : "bg-gray-500"
            }`}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default ProjectGallery;