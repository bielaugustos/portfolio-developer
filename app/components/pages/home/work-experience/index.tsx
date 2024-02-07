import { SectionTitle } from "@/app/components/section-title";
import { ExperienceItem } from "./experience-item";
import { WorkExperience as IWorkExperience } from "@/app/types/work-experience";

type WorkExperienceProps = {
  experiences: IWorkExperience[];
};

export const WorkExperience = ({ experiences }: WorkExperienceProps) => {
  return (
    <section className="container py-16 flex gap-10 md:gap-4 lg:gap-16 flex-col md:flex-row">
      {/* Seção de Experiência Profissional */}
      <div className="max-w-[420px]">
        <SectionTitle
          title="Experiência Profissional"
          subtitle="experiências"
        />
        <p className="text-gray-400 mt-6">
          Atualmente <strong className="text-emerald-400">desenvolvo projetos web</strong> conectando expêriencias de outras
          áreas que agreguem valor a identidade do negócio, meu objetivo é criar
          interfaces de usuário bonitas e funcionais, além de liderar equipes
          técnicas em projetos desafiadores. Estou sempre aberto a novas
          oportunidades e desafios, disponível para pair-programming.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        {experiences?.map((experience) => (
          <ExperienceItem
            key={experience.companyName}
            experience={experience}
          />
        ))}
      </div>
    </section>
  );
};
