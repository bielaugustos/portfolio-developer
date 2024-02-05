import { HeroSection } from "./components/pages/home/hero-section";
import { KnownTechs } from "./components/pages/home/known-techs";
import { HighlightedProjects } from "./hilighted-projects";

export default async function Home() {
  return (
    <>
      <HeroSection />
      <KnownTechs />
      <HighlightedProjects />
    </>
  )
}
