import Container from "../common/Container";

import AboutContent from "./AboutContent";
import DeveloperEcosystem from "./DeveloperEcosystem";

const AboutSection = () => {
  return (
    <section id="about" className="relative py-32 overflow-hidden">

      <Container>

        <div className="grid items-center gap-24 lg:grid-cols-2">

    <DeveloperEcosystem />

          <AboutContent />

        </div>

      </Container>

    </section>
  );
};

export default AboutSection;