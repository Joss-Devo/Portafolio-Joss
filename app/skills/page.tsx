"use client";

import ToolsGrid from "@/components/tools/ToolsGrid";
import { motion } from "framer-motion";

const ToolsPage = () => {
  return (
    <>
      

      <section className="min-h-screen  px-6 md:px-16 py-30">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto space-y-12"
        >
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold">
              Herramientas & Tecnologías
            </h1>

            <p className="text-gray-400 max-w-2xl mx-auto">
              Estas son las tecnologías y herramientas que utilizo para
              desarrollar aplicaciones modernas, escalables y eficientes.
            </p>
          </div>

          <ToolsGrid />
        </motion.div>
      </section>
    </>
  );
};

export default ToolsPage;