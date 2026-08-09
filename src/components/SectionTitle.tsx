interface Props {
  title: string;
  subtitle?: string;
  category?: string;
}

function SectionTitle({ title, subtitle }: Props) {
  return (
    <div className="mx-auto mb-10 max-w-2xl text-center">
      <p className="text-sm uppercase tracking-[0.35em] text-sky-400/70">
        Portfólio
      </p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-base leading-7 text-slate-400">{subtitle}</p>
      )}
    </div>
  );
}

export default SectionTitle;
