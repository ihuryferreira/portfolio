import { ExternalLink, Code } from "lucide-react";
import { motion } from "framer-motion";

interface Props {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  demo: string;
}

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

function ProjectCard({
  title,
  description,
  image,
  technologies,
  github,
  demo,
}: Props) {
  return (
    <motion.article
      className="group overflow-hidden rounded-[2rem] border border-slate-800/70 bg-slate-950/90 shadow-[0_24px_80px_-40px_rgba(15,23,42,0.8)] transition duration-300 hover:-translate-y-2 hover:border-sky-500/30 hover:shadow-[0_32px_100px_-48px_rgba(56,189,248,0.28)]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      variants={cardVariants}
    >
      <div className="relative overflow-hidden bg-slate-900/70">
        <motion.img
          src={image}
          alt={title}
          className="h-64 w-full object-cover transition duration-700 ease-out group-hover:scale-[1.08]"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />
      </div>

      <div className="flex min-h-[22rem] flex-col justify-between gap-6 p-6 sm:p-8">
        <div>
          <h3 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            {title}
          </h3>
          <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
            {description}
          </p>
        </div>

        <div className="space-y-5">
          <div className="flex flex-wrap gap-2">
            {technologies.map((item) => (
              <span
                key={item}
                className="rounded-full border border-slate-800/80 bg-slate-900/80 px-3 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-slate-300 shadow-[0_2px_12px_-8px_rgba(15,23,42,0.8)]"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <motion.a
              href={github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-800/90 bg-slate-950/80 px-4 py-3 text-sm font-medium text-slate-100 transition duration-300 hover:-translate-y-0.5 hover:border-sky-500/40 hover:bg-sky-500/10 hover:text-white"
              whileHover={{ y: -2 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              <Code size={18} /> GitHub
            </motion.a>

            <motion.a
              href={demo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-800/90 bg-slate-950/80 px-4 py-3 text-sm font-medium text-slate-100 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-400/40 hover:bg-cyan-500/10 hover:text-white"
              whileHover={{ y: -2 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              <ExternalLink size={18} /> Demo
            </motion.a>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default ProjectCard;
