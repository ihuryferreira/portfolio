import { motion } from "framer-motion";
import { ArrowRight, Code, Sparkles } from "lucide-react";

function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden rounded-4xl border border-slate-800/80 bg-slate-900/95 px-5 pb-24 pt-12 shadow-[0_40px_120px_-60px_rgba(15,23,42,0.9)] sm:px-10 sm:py-16"
    >
      {/* Luzes de Fundo - Ajustadas para não estourarem no mobile */}
      <div className="absolute -right-24 top-8 h-48 w-48 rounded-full bg-sky-500/10 blur-3xl" />
      <div className="absolute left-0 top-20 h-56 w-56 rounded-full bg-violet-500/10 blur-3xl" />


      {/* Grid Principal - Adicionado mb-12 para dar espaço ao card absoluto no mobile */}
      <div className="grid gap-12 lg:grid-cols-[1.3fr_0.9fr] lg:items-center mb-10 lg:mb-0">
        
        {/* Lado Esquerdo: Textos e Botões */}
        <motion.div
          initial={{ opacity: 0, x: -32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-flex items-center rounded-full border border-slate-800/90 bg-slate-950/90 px-4 py-2 text-sm text-sky-300 shadow-[0_10px_30px_-20px_rgba(56,189,248,0.7)]">
            Desenvolvedor Full Stack
          </span>

          <h1 className="pt-4 mt-4 text-3xl font-semibold tracking-tight text-white sm:text-6xl">
            Crio experiências digitais elegantes e rápidas.
          </h1>

          <p className="pt-6 mt-4 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
            Sou Ihury Ferreira e transformo ideias em interfaces reativas,
            modernas e acessíveis com React, TypeScript e animações suaves.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="#projetos"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-sky-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-sky-400"
            >
              Ver projetos
              <ArrowRight size={16} />
            </a>
            <a
              href="#contato"
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-800 bg-slate-950/80 px-6 py-3 text-sm text-slate-200 transition hover:border-slate-700 hover:bg-slate-900"
            >
              Entre em contato
            </a>
          </div>
        </motion.div>

        {/* Lado Direito: Card de Stats */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          className="relative"
        >
          <div className="rounded-2xl border border-slate-800/80 bg-slate-950/95 p-6 sm:p-8 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.6)]">
            <div className="flex items-center justify-between gap-4 rounded-3xl border border-slate-800/90 bg-slate-900/95 p-5">
              <div>
                <p className="text-sm text-slate-400">Linguagens</p>
                <p className="mt-2 font-semibold text-white">
                  React · TypeScript
                </p>
              </div>
              <div className="rounded-3xl bg-slate-950/80 p-3 text-sky-400">
                <Code size={24} />
              </div>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-slate-800/90 bg-slate-900/95 p-5">
                <p className="text-xs uppercase tracking-[0.22em] text-slate-400">
                  Projetos concluídos
                </p>
                <p className="mt-2 text-2xl font-semibold text-white">+12</p>
              </div>
              <div className="rounded-3xl border border-slate-800/90 bg-slate-900/95 p-5">
                <p className="text-xs uppercase tracking-[0.22em] text-slate-400">
                  Cliente satisfeito
                </p>
                <p className="mt-2 text-2xl font-semibold text-white">+8</p>
              </div>
            </div>
          </div>

          {/* CARD FLUTUANTE AJUSTADO: max-w-[calc(100%-2rem)] impede que ele passe das bordas do card pai no mobile */}
          <div className="absolute -bottom-10 left-0 right-0 mx-auto flex max-w-lg w-[calc(100%-2rem)] sm:w-full items-center justify-between rounded-full border border-slate-800/90 bg-slate-950/90 px-5 py-4 shadow-[0_18px_70px_-40px_rgba(56,189,248,0.5)]">
            <div>
              <p className="text-[10px] uppercase tracking-[0.24em] text-sky-300/70 sm:text-xs">
                Melhor foco
              </p>
              <p className="mt-0.5 text-xs text-slate-100 sm:text-sm">
                Interfaces responsivas e fluídas
              </p>
            </div>
            <div className="inline-flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-sky-500/15 text-sky-300 shadow-[0_20px_40px_-20px_rgba(56,189,248,0.8)] shrink-0">
              <Sparkles size={16} />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;