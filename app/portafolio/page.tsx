"use client";

import { projects } from "@/components/portafolio/projectsData";
import FeaturedProject from "@/components/portafolio/FeaturedProject";
import PortfolioItem from "@/components/portafolio/PortfolioItem";


export default function PortfolioPage() {
  const featured = projects.find((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <>
      

      <section className="min-h-screen px-6 md:px-16 py-25 space-y-24">
        <div className="max-w-6xl mx-auto space-y-20">

          <div className="text-center space-y-4">
            <h1 className="text-5xl font-inter">
              Portafolio Profesional
            </h1>
            <p className="text-gray-400">
              Proyectos desarrollados con enfoque en rendimiento y escalabilidad.
            </p>
          </div>

          {featured && (
            <FeaturedProject
              title={featured.title}
              description={featured.description}
              image={featured.image}
              tech={featured.tech}
              gallery={featured.gallery}
            />
          )}

          <div className="space-y-20">
            {others.map((project, index) => (
              <PortfolioItem
                key={project.id}
                title={project.title}
                description={project.description}
                image={project.image}
                tech={project.tech}
                gallery={project.gallery}
                reverse={index % 2 === 1}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
