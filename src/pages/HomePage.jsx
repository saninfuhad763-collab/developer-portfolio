import { Section } from "../components/layout/Section";
import { Container } from "../components/layout/Container";
import { Hero } from "../components/sections/Hero";
import { About } from "../components/sections/About";
import { Skills } from "../components/sections/Skills";

export const HomePage = () => {
  return (
    <>
      <Hero />
      <About />
      <Skills />

      <Section id="projects" variant="secondary">
        <Container>
          <h2 className="text-h2">Projects Placeholder</h2>
        </Container>
      </Section>

      <Section id="experience">
        <Container>
          <h2 className="text-h2">Experience Placeholder</h2>
        </Container>
      </Section>

      <Section id="contact" variant="secondary">
        <Container>
          <h2 className="text-h2">Contact Placeholder</h2>
        </Container>
      </Section>
    </>
  );
};
