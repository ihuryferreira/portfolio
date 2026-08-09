import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle";

function Experience() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Experiência"
          subtitle="Minha trajetória profissional"
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="rounded-4xl border border-slate-800/80 bg-slate-900/95 p-8 shadow-[0_40px_120px_-70px_rgba(15,23,42,0.8)]"
        >
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h3 className="text-2xl font-semibold text-white">
                Desenvolvedor Full Stack
              </h3>
              <p className="mt-2 text-sky-300">Projetos Independentes</p>
            </div>
            <span className="inline-flex rounded-full border border-slate-800/90 bg-slate-950/80 px-4 py-2 text-sm text-slate-300">
              2024 - Atual
            </span>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl border border-slate-800/90 bg-slate-950/80 p-6">
              <h4 className="font-semibold text-white">React</h4>
              <p className="mt-3 text-sm leading-7 text-slate-400">
                Construção de interfaces dinâmicas e componentes acessíveis.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-800/90 bg-slate-950/80 p-6">
              <h4 className="font-semibold text-white">Node.js</h4>
              <p className="mt-3 text-sm leading-7 text-slate-400">
                APIs REST e integrações rápidas com serviços externos.
              </p>
            </div>
          </div>

          <ul className="mt-8 space-y-3 text-slate-400">
            <li>• Desenvolvimento de aplicações web com React</li>
            <li>• Criação de APIs REST utilizando Node.js</li>
            <li>• Integração com bancos de dados e serviços externos</li>
            <li>• Desenvolvimento de interfaces responsivas</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

export default Experience;
