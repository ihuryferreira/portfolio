import { useState } from "react";
import { ArrowRight, Sparkles, Menu, X } from "lucide-react";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-800/70 bg-slate-950/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a
          href="#home"
          className="inline-flex items-center gap-3 text-base font-semibold text-white transition hover:text-sky-300"
        >
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-sky-500/15 text-sky-300 shadow-[0_10px_30px_-20px_rgba(56,189,248,0.8)]">
            <Sparkles size={18} />
          </span>
          Ihury
        </a>

        <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex" aria-label="Navegação principal">
          <a href="#home" className="transition hover:text-white">
            Home
          </a>
          <a href="#sobre" className="transition hover:text-white">
            Sobre
          </a>
          <a href="#projetos" className="transition hover:text-white">
            Projetos
          </a>
          <a href="#contato" className="transition hover:text-white">
            Contato
          </a>
        </nav>

        <a
          href="#contato"
          className="hidden sm:inline-flex items-center gap-2 rounded-full border border-slate-800/90 bg-sky-500/10 px-4 py-2 text-sm text-sky-200 transition hover:bg-sky-500/15 hover:text-white"
        >
          Fale comigo
          <ArrowRight size={16} />
        </a>

        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="inline-flex items-center justify-center rounded-xl p-2 text-slate-300 transition hover:bg-slate-800 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`md:hidden ${open ? "block" : "hidden"} border-t border-slate-800/70 bg-slate-950/95 px-4 pb-4`}
      >
        <nav className="flex flex-col gap-4 pt-4 text-sm text-slate-300" aria-label="Navegação mobile">
          <a href="#home" className="rounded-xl px-3 py-2 transition hover:bg-slate-800 hover:text-white" onClick={() => setOpen(false)}>
            Home
          </a>
          <a href="#sobre" className="rounded-xl px-3 py-2 transition hover:bg-slate-800 hover:text-white" onClick={() => setOpen(false)}>
            Sobre
          </a>
          <a href="#projetos" className="rounded-xl px-3 py-2 transition hover:bg-slate-800 hover:text-white" onClick={() => setOpen(false)}>
            Projetos
          </a>
          <a href="#contato" className="rounded-xl px-3 py-2 transition hover:bg-slate-800 hover:text-white" onClick={() => setOpen(false)}>
            Contato
          </a>
          <a
            href="#contato"
            className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-800/90 bg-sky-500/10 px-4 py-3 text-sm text-sky-200 transition hover:bg-sky-500/15 hover:text-white"
            onClick={() => setOpen(false)}
          >
            Fale comigo
            <ArrowRight size={16} />
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
