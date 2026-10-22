"use client";

import { motion } from "framer-motion";

interface ToolCardProps {
  name: string;
  description: string;
  icon: any;
}

const ToolCard = ({ name, description, icon: Icon }: ToolCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-lg shadow-lg hover:border-secondary transition"
    >
      <div className="mb-4 text-secondary">
        <Icon size={40} strokeWidth={1.5} />
      </div>

      <h3 className="text-xl font-inter mb-2">{name}</h3>

      <p className="text-gray-400 text-sm">
        {description}
      </p>
    </motion.div>
  );
};

export default ToolCard;
