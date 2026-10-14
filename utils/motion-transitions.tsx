import { Variants } from "framer-motion";

export const fadeIn = (
  position: "right" | "bottom",
  delay = 0
): Variants => {
  const isRight = position === "right";
  const isBottom = position === "bottom";

  return {
    hidden: {
      opacity: 0,
      x: isRight ? 40 : 0,
      y: isBottom ? 40 : 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut", // ✅ correcto
        delay,
      },
    },
  };
};
