import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import SectionTitle from "../components/SectionTitle";

function About() {
  return (
    <section id="sobre" className="py-10 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Sobre mim"
          subtitle="Conheça um pouco da minha trajetória"
        />

        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          {/* Bloco da Imagem */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }} // Evita disparar antes da hora no mobile
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-4xl border border-slate-800/80 bg-slate-900/95 p-4 sm:p-8 shadow-[0_40px_100px_-70px_rgba(15,23,42,0.8)]"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.14),transparent_30%)] pointer-events-none" />
            <img
              src="/sobre.png"
              alt="Sobre mim"
              className="relative h-72 sm:h-112 w-full rounded-[1.75rem] object-cover object-top shadow-xl"
            />
          </motion.div>

          {/* Bloco de Texto */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-6 sm:space-y-8"
          >
            <div className="rounded-4xl border border-slate-800/80 bg-slate-900/95 p-6 sm:p-8 shadow-[0_20px_80px_-40px_rgba(15,23,42,0.8)]">
              {/* CORREÇÃO: flex-wrap e text-xs no mobile para o badge não estourar a lateral */}
              <div className="inline-flex flex-wrap items-center gap-2 sm:gap-3 rounded-3xl bg-slate-950/80 px-4 py-2.5 mb-4 text-sky-300 shadow-[0_10px_30px_-20px_rgba(56,189,248,0.45)]">
                <Sparkles size={18} className="shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-slate-100">
                  Foco em usabilidade e performance
                </span>
              </div>
              
              {/* CORREÇÃO: text-2xl no mobile para palavras longas como "desenvolvedor" caberem sem quebras feias */}
              <h3 className="mt-4 sm:mt-8 pb-3 sm:pb-4 text-2xl sm:text-3xl font-semibold text-white">
                Sou um desenvolvedor apaixonado por tecnologia.
              </h3>
              <p className="mt-3 sm:mt-5 text-sm sm:text-base leading-7 sm:leading-8 text-slate-300">
                Tenho focus na criação de aplicações web modernas, interfaces
                responsivas e soluções eficientes. Minha experiência envolve
                React, JavaScript, TypeScript, Node.js e criação de APIs.
              </p>
            </div>

            {/* Grid de Mini Cards */}
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-3xl border border-slate-800/80 bg-slate-900/95 p-5 sm:p-6 text-center">
                <p className="text-xs uppercase tracking-[0.22em] text-slate-400">
                  Stack
                </p>
                <p className="mt-2 sm:mt-4 text-base sm:text-lg font-semibold text-white">
                  React & Tailwind
                </p>
              </div>
              <div className="rounded-3xl border border-slate-800/80 bg-slate-900/95 p-5 sm:p-6 text-center">
                <p className="text-xs uppercase tracking-[0.22em] text-slate-400">
                  Tempo
                </p>
                <p className="mt-2 sm:mt-4 text-base sm:text-lg font-semibold text-white">
                  +3 anos
                </p>
              </div>
              <div className="rounded-3xl border border-slate-800/80 bg-slate-900/95 p-5 sm:p-6 text-center">
                <p className="text-xs uppercase tracking-[0.22em] text-slate-400">
                  Produtividade
                </p>
                <p className="mt-2 sm:mt-4 text-base sm:text-lg font-semibold text-white">
                  Entrega ágil
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;