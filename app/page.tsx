import { HeroSection } from "./components/pages/home/hero-section";
import { KnownTechs } from "./components/pages/home/known-techs";
import { WorkExperience } from "./components/pages/home/work-experience";
import { HighlightedProjects } from "./components/pages/home/hilighted-projects";

export default async function Home() {
  return (
    <>
      <HeroSection />
      <KnownTechs />
      <HighlightedProjects />
      <WorkExperience />
    </>
  )
}
