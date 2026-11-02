function Footer() {
  return (
    <footer className="border-t border-slate-800/70 bg-slate-950/80 text-center text-sm text-slate-500">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-5 sm:flex-row">
          <p>
            © {new Date().getFullYear()} Ihury Ferreira. Todos os direitos
            reservados.
          </p>
          <nav
            aria-label="Links institucionais e de contato"
            className="flex flex-wrap items-center justify-center gap-x-5 gap-y-3"
          >
            <a
              href="https://github.com/ihuryferreira"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-sky-300"
            >
              GitHub
            </a>
            <a
              href="mailto:contato@ihuryferreira.com.br"
              className="transition hover:text-sky-300"
            >
              E-mail
            </a>
            <a
              href="#perguntas-frequentes"
              className="transition hover:text-sky-300"
            >
              Perguntas frequentes
            </a>
            <a
              href="/privacidade.html"
              className="transition hover:text-sky-300"
            >
              Privacidade
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
