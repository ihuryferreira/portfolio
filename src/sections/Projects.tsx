import SectionTitle from "../components/SectionTitle";

import ProjectCard from "../components/ProjectCard";

import { projects } from "../data/projects";

function Projects() {
  return (
    <section id="projetos" className="py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Projetos"
          subtitle="Algumas aplicações que desenvolvi"
        />

        <div className="mt-12 grid gap-8 sm:grid-cols-3 xl:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
