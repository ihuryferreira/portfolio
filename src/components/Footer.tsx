function Footer() {
  return (
    <footer className="border-t border-slate-800/70 bg-slate-950/80 text-center text-sm text-slate-500">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <p>
          © {new Date().getFullYear()} Ihury Ferreira. Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
