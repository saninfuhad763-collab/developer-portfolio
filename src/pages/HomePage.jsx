import { Section } from "../components/layout/Section";
import { Container } from "../components/layout/Container";
import { Hero } from "../components/sections/Hero";
import { About } from "../components/sections/About";
import { Skills } from "../components/sections/Skills";
import { Projects } from "../components/sections/Projects";
import { ProfessionalJourney } from "../components/sections/ProfessionalJourney";

export const HomePage = () => {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <ProfessionalJourney />

      <Section id="contact" variant="secondary">
        <Container>
          <h2 className="text-h2">Contact Placeholder</h2>
        </Container>
      </Section>
    </>
  );
};
