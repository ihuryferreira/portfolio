function FAQ() {
  return (
    <section
      id="perguntas-frequentes"
      className="py-12 sm:py-20"
      aria-labelledby="faq-title"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <p className="text-sm uppercase tracking-[0.35em] text-sky-400/70">
            Informações
          </p>
          <h2
            id="faq-title"
            className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl"
          >
            Perguntas frequentes
          </h2>
        </div>

        <div className="divide-y divide-slate-800 rounded-3xl border border-slate-800/80 bg-slate-900/80 px-5 sm:px-8">
          <details className="py-5">
            <summary className="cursor-pointer font-medium text-white marker:text-sky-400">
              Quais tecnologias aparecem nos projetos?
            </summary>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              Os projetos usam tecnologias como React, TypeScript, Next.js,
              Node.js e PostgreSQL. A stack específica está descrita em cada
              projeto.
            </p>
          </details>
          <details className="py-5">
            <summary className="cursor-pointer font-medium text-white marker:text-sky-400">
              Como posso falar sobre um projeto?
            </summary>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              Use o formulário da seção de contato ou envie um e-mail para
              contato@ihuryferreira.com.br.
            </p>
          </details>
          <details className="py-5">
            <summary className="cursor-pointer font-medium text-white marker:text-sky-400">
              Onde posso ver outros trabalhos e o código público?
            </summary>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              Os repositórios públicos estão vinculados aos projetos e ao perfil
              de Ihury Ferreira no GitHub.
            </p>
          </details>
          <details className="py-5">
            <summary className="cursor-pointer font-medium text-white marker:text-sky-400">
              Onde Ihury Ferreira está localizado e como atende?
            </summary>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              Ihury Ferreira está em Goiânia, Goiás, Brasil, e atende
              remotamente.
            </p>
          </details>
        </div>
      </div>
    </section>
  );
}

export default FAQ;
