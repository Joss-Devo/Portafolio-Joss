"use client";

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { Container, ISourceOptions } from "@tsparticles/engine";
import { loadFull } from "tsparticles";




const FondoParticles = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
  initParticlesEngine(async (engine) => {
    await loadFull(engine);
  }).then(() => setInit(true));
}, []);

  const particlesLoaded = async (container?: Container) => {
    console.log(container);
  };

  const options: ISourceOptions = useMemo(
    () => ({
      autoPlay: true,
      background: {
        color: { value: "#000000" },
      },
      fullScreen: {
        enable: true,
        zIndex: -1,
      },
      fpsLimit: 120,
      detectRetina: true,

      interactivity: {
        events: {
          onClick: { enable: false },
          onHover: { enable: false },
          
        },
      },

      particles: {
        number: {
          value: 200,
        },
        color: {
          value: "#ffffff",
        },
        shape: {
          type: "circle",
        },
        opacity: {
          value: 1,
        },
        size: {
          value: 1,
        },
        move: {
          enable: true,
          speed: 0.5,
          direction: "right",
          outModes: {
            default: "out",
          },
        },
      },

      emitters: {
        autoPlay: true,
        rate: {
          quantity: 1,
          delay: 50,
        },
        position: {
          x: -5,
          y: 55,
        },
        particles: {
          shape: {
            type: "images",
            options: {
              images: {
                src: "/imagen/astro.png",
               width: 700,
                height: 700,
              },
            },
          },
          size: {
            value: 30,
          },
          move: {
            speed: 1,
            straight: true,
            outModes: {
              default: "none",
              right: "destroy",
            },
          },
          rotate: {
            value: { min: 0, max: 360 },
            animation: {
              enable: true,
              speed: 2,
              sync: true,
            },
          },
        },
      },

      motion: {
        disable: true,
        reduce: {
          factor: 8,
          value: true,
        },
      },
    }),
    []
  );

  if (!init) return null;

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <Particles
        id="tsparticles"
        options={options}
        particlesLoaded={particlesLoaded}
      />
    </div>
  );
};

export default FondoParticles;
