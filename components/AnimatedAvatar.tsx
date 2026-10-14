"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const AnimatedAvatar = () => {
  return (
     <motion.div
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="flex justify-center"
    >
      <motion.div
      
        animate={{ y: [0, -12, 0] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
        }}
        whileHover={{ scale: 1.08 }}
        className="relative w-70 h-70  overflow-hidden shadow-2xl"
      >
        <Image
          src="/imagen/yo.png" 
          alt="José Alberto"
          fill
          className="object-cover "
        />
      </motion.div>
    </motion.div>
  );
};

export default AnimatedAvatar;
