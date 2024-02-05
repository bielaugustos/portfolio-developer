import { HiArrowNarrowRight } from "react-icons/hi";
import { HorizontalDivider } from "../components/divider/horizontal";
import { Link } from "../components/link";
import { SectionTitle } from "../components/section-title";
import { ProjectCard } from "./project-card";


export const HighlightedProjects = () => {
  return (
    <section className="container py-16">
      <SectionTitle title="Projetos em destaque" subtitle="destaques" />
      <HorizontalDivider className="mb-16" />
      <div>
        <ProjectCard />
        <HorizontalDivider className="my-16" />
        <ProjectCard />
        <HorizontalDivider className="my-16" />

        <p className="flex items-center gap-1.5">
          <span className="text-gray-400">Se interessou ?</span>
          <Link href="/projects" className="inline-flex">
            Ver todos
            <HiArrowNarrowRight />
          </Link>
        </p>
      </div>
    </section>
  );
};
