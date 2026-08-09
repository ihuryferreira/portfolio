interface Props {
  name: string;
  level: string;
}

function SkillCard({ name, level }: Props) {
  return (
    <div className="rounded-[1.75rem] border border-slate-800/80 bg-slate-900/95 p-6 shadow-[0_20px_60px_-40px_rgba(15,23,42,0.8)]">
      <div className="flex items-center justify-between gap-4 mb-4 text-sm text-slate-200">
        <span className="font-medium text-white">{name}</span>
        <span className="rounded-full bg-slate-800/90 px-3 py-1 text-xs uppercase tracking-[0.18em] text-sky-300">
          {level}
        </span>
      </div>

      <div className="h-2.5 overflow-hidden rounded-full bg-slate-800">
        <div
          className="h-2.5 rounded-full bg-sky-500 transition-all duration-500"
          style={{ width: level }}
        />
      </div>
    </div>
  );
}

export default SkillCard;
