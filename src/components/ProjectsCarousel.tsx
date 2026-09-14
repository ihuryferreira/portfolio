import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Code, ExternalLink, X } from "lucide-react";

import { projects, type Project, type ProjectPreview } from "../data/projects";

const GAP = 24;

function getVisibleColumns() {
  if (typeof window === "undefined") return 1;
  if (window.matchMedia("(min-width: 1024px)").matches) return 3;
  if (window.matchMedia("(min-width: 640px)").matches) return 2;
  return 1;
}

function ProjectPreview({ type }: { type: ProjectPreview }) {
  if (type === "donalds") {
    return (
      <div className="flex h-full w-full flex-col justify-between rounded-lg border border-slate-800/60 bg-slate-950 p-4 transition-transform duration-500 group-hover:scale-105">
        <div className="flex items-center justify-between border-b border-slate-800/40 pb-2">
          <span className="flex items-center gap-1.5 text-xs font-bold text-amber-500">
            <span className="inline-block h-3 w-3 rounded-sm bg-red-600" />
            Donalds Delivery
          </span>
          <span className="font-mono text-[10px] text-slate-500">v1.2.0</span>
        </div>
        <div className="py-2 text-center">
          <p className="text-xs font-semibold text-slate-200">Seja bem-vindo!</p>
          <div className="mt-2 flex justify-center gap-3">
            <span className="rounded border border-slate-700 bg-slate-800 px-2 py-1 text-xs text-slate-300">🍔 Burger</span>
            <span className="rounded border border-slate-700 bg-slate-800 px-2 py-1 text-xs text-slate-300">🍟 Fries</span>
          </div>
        </div>
        <div className="text-center text-[10px] text-slate-400">Cardápio digital responsivo</div>
      </div>
    );
  }

  if (type === "recipes") {
    return (
      <div className="flex h-full w-full flex-col gap-3 rounded-lg border border-slate-800/60 bg-slate-950 p-4 transition-transform duration-500 group-hover:scale-105">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold text-emerald-400">Receitas Culinárias</span>
          <span className="rounded bg-emerald-500/10 px-2 py-1 text-[10px] text-emerald-300">Buscar</span>
        </div>
        <div className="grid flex-1 grid-cols-3 gap-2">
          {[
            ["Bowl fresco", "#f59e0b"],
            ["Massa caseira", "#fb7185"],
            ["Torta cítrica", "#34d399"],
          ].map(([name, color]) => (
            <div key={name} className="flex flex-col justify-end rounded-md border border-slate-800 bg-slate-900 p-2" style={{ borderTopColor: color }}>
              <span className="text-[9px] text-slate-300">{name}</span>
              <span className="mt-1 text-[8px] text-slate-500">20 min</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (type === "survey") {
    return (
      <div className="flex h-full w-full flex-col rounded-lg border border-slate-800/60 bg-slate-950 p-4 transition-transform duration-500 group-hover:scale-105">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <span className="text-xs font-bold text-sky-400">Pesquisa Dashboard</span>
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
        </div>
        <div className="mt-4 flex flex-1 items-end justify-center gap-3">
          {["h-10 bg-sky-700", "h-16 bg-sky-700", "h-12 bg-sky-700", "h-20 bg-sky-400", "h-14 bg-sky-700"].map((barClass, barIndex) => (
            <span key={barIndex} className={`${barClass} w-5 rounded-t`} />
          ))}
        </div>
        <div className="mt-3 flex justify-between text-[10px] text-slate-500">
          <span>Respostas</span>
          <span className="font-mono text-slate-300">1,248</span>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-full w-full flex-col rounded-lg border border-slate-800/60 bg-slate-950 p-4 transition-transform duration-500 group-hover:scale-105">
      <div className="flex items-center justify-between border-b border-slate-800 pb-3">
        <span className="text-xs font-bold text-violet-300">Waguinho Hambúrgueres</span>
        <span className="rounded bg-violet-500/10 px-2 py-1 text-[10px] text-violet-300">Sprint 04</span>
      </div>
      <div className="mt-4 grid flex-1 grid-cols-3 gap-2 text-[9px] text-slate-500">
        {[
          ["A fazer", "Organizar backlog"],
          ["Em andamento", "API de tarefas"],
          ["Concluído", "Login responsivo"],
        ].map(([status, task]) => (
          <div key={status} className="rounded border border-slate-800 bg-slate-900 p-2">
            <span className="text-slate-400">{status}</span>
            <p className="mt-2 text-slate-200">{task}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

type UnavailableLink = "github" | "demo";

function ProjectCard({ project }: { project: Project }) {
  const [unavailableLink, setUnavailableLink] = useState<UnavailableLink | null>(null);

  useEffect(() => {
    if (!unavailableLink) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setUnavailableLink(null);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [unavailableLink]);

  const isUnavailable = (url: string) => url === "#";

  return (
    <article className="glass-card group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-800">
      <div className="relative flex h-52 items-center justify-center overflow-hidden border-b border-slate-800/80 bg-slate-900 p-4">
        <ProjectPreview type={project.preview} />
      </div>
      <div className="flex grow flex-col justify-between p-6">
        <div>
          <h3 className="mb-2 font-heading text-lg font-bold text-white transition-colors group-hover:text-sky-400">{project.title}</h3>
          <p className="mb-5 text-xs leading-relaxed text-slate-400">{project.description}</p>
          <div className="mb-6 flex flex-wrap gap-1.5">
            {project.technologies.map((technology) => (
              <span key={technology} className="rounded border border-slate-700/60 bg-slate-800/90 px-2 py-0.5 text-[10px] font-medium text-slate-300">{technology.toUpperCase()}</span>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3 border-t border-slate-800/60 pt-3">
          {isUnavailable(project.github) ? (
            <button type="button" onClick={() => setUnavailableLink("github")} className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-xs font-medium text-slate-300 transition-colors hover:border-slate-600 hover:text-white">
              <Code size={15} aria-hidden="true" /> GitHub
            </button>
          ) : (
            <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-xs font-medium text-slate-300 transition-colors hover:border-slate-600 hover:text-white">
              <Code size={15} aria-hidden="true" /> GitHub
            </a>
          )}
          {isUnavailable(project.demo) ? (
            <button type="button" onClick={() => setUnavailableLink("demo")} className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-sky-500/30 bg-sky-500/10 px-3 py-2 text-xs font-medium text-sky-400 transition-colors hover:bg-sky-500/20 hover:text-sky-300">
              <ExternalLink size={15} aria-hidden="true" /> Demo
            </button>
          ) : (
            <a href={project.demo} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-sky-500/30 bg-sky-500/10 px-3 py-2 text-xs font-medium text-sky-400 transition-colors hover:bg-sky-500/20 hover:text-sky-300">
              <ExternalLink size={15} aria-hidden="true" /> Demo
            </a>
          )}
        </div>
      </div>
      {unavailableLink && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-slate-950/80 p-5 backdrop-blur-sm" role="presentation" onClick={() => setUnavailableLink(null)}>
          <div role="dialog" aria-modal="true" aria-labelledby={`${project.title}-${unavailableLink}-title`} className="w-full max-w-sm rounded-2xl border border-slate-700 bg-slate-900 p-6 shadow-2xl" onClick={(event) => event.stopPropagation()}>
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-sky-400">{unavailableLink === "github" ? "Código-fonte" : "Demonstração"}</p>
                <h4 id={`${project.title}-${unavailableLink}-title`} className="mt-2 text-lg font-bold text-white">{unavailableLink === "github" ? "Código privado" : "Demo indisponível"}</h4>
              </div>
              <button type="button" onClick={() => setUnavailableLink(null)} aria-label="Fechar aviso" className="rounded-lg p-1 text-slate-400 transition hover:bg-slate-800 hover:text-white">
                <X size={18} aria-hidden="true" />
              </button>
            </div>
            <p className="mt-4 text-sm leading-6 text-slate-300">
              {unavailableLink === "github" ? "O código deste projeto é privado e não está disponível publicamente no GitHub." : "Este projeto ainda não possui uma demonstração online disponível para acesso."}
            </p>
            <button type="button" onClick={() => setUnavailableLink(null)} className="mt-6 w-full rounded-lg bg-sky-500 px-4 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-sky-400">
              Entendi
            </button>
          </div>
        </div>
      )}
    </article>
  );
}

function ProjectsCarousel() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const [visibleColumns, setVisibleColumns] = useState(getVisibleColumns);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [step, setStep] = useState(0);
  const maxIndex = Math.max(0, projects.length - visibleColumns);
  const activeIndex = Math.min(currentIndex, maxIndex);

  useEffect(() => {
    const updateLayout = () => setVisibleColumns(getVisibleColumns());
    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  }, []);

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const updateStep = () => {
      const firstCard = viewport.querySelector<HTMLElement>("[data-project-card]");
      setStep(firstCard ? firstCard.offsetWidth + GAP : 0);
    };

    updateStep();
    const observer = new ResizeObserver(updateStep);
    observer.observe(viewport);
    return () => observer.disconnect();
  }, [visibleColumns]);

  return (
    <section id="projetos" className="relative overflow-hidden border-t border-slate-900 bg-[#040816]/50 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="mb-2 block text-xs font-bold uppercase tracking-widest text-sky-400">PORTFÓLIO</span>
            <h2 className="font-heading text-3xl font-extrabold text-white sm:text-4xl">Projetos</h2>
            <p className="mt-2 text-sm text-slate-400">Algumas aplicações que desenvolvi</p>
          </div>
          <div className="flex items-center gap-3">
            <button type="button" aria-label="Projeto anterior" disabled={activeIndex === 0} onClick={() => setCurrentIndex((index) => Math.max(0, index - 1))} className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-700/80 bg-slate-900/90 text-slate-300 shadow-md transition-all hover:border-sky-400/60 hover:text-white active:scale-95 disabled:cursor-not-allowed disabled:opacity-30">
              <ChevronLeft size={20} aria-hidden="true" />
            </button>
            <button type="button" aria-label="Próximo projeto" disabled={activeIndex >= maxIndex} onClick={() => setCurrentIndex((index) => Math.min(maxIndex, index + 1))} className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-700/80 bg-slate-900/90 text-slate-300 shadow-md transition-all hover:border-sky-400/60 hover:text-white active:scale-95 disabled:cursor-not-allowed disabled:opacity-30">
              <ChevronRight size={20} aria-hidden="true" />
            </button>
          </div>
        </div>

        <div ref={viewportRef} className="relative w-full overflow-hidden">
          <motion.div animate={{ x: -(activeIndex * step) }} transition={{ duration: 0.5, ease: "easeOut" }} className="flex items-stretch gap-6">
            {projects.map((project) => (
              <div key={project.title} data-project-card className="w-full flex-none sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]">
                <ProjectCard project={project} />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default ProjectsCarousel;