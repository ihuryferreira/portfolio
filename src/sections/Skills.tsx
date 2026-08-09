import SectionTitle from "../components/SectionTitle";
import SkillCard from "../components/SkillCard";
import { skills } from "../data/skills";

function Skills() {
  return (
    <section>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Tecnologias" subtitle="Minha stack principal" />

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {skills.map((skill) => (
            <SkillCard key={skill.name} name={skill.name} level={skill.level} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
