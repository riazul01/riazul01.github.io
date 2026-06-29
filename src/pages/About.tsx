import Divider from "@mui/material/Divider";
import SectionWrapper from "components/sections/SectionWrapper";
import Header from "components/sections/about/Profile";
import Skills from "components/sections/about/Skills";
import Experience from "components/sections/about/Experience";
import Projects from "components/sections/about/Projects";
import GetInTouch from "components/sections/about/GetInTouch";
import Footer from "components/sections/about/Footer";
import Summary from "components/sections/about/Summary";

const About = () => {
  return (
    <>
      <Header />
      <SectionWrapper>
        <Summary />
        <Divider sx={{ my: 6 }} />
        <Projects />
        <Divider sx={{ my: 6 }} />
        <Experience />
        <Divider sx={{ my: 6 }} />
        <Skills />
        <Divider sx={{ my: 6 }} />
        <GetInTouch />
        <Divider sx={{ mt: 6 }} />
        <Footer />
      </SectionWrapper>
    </>
  );
};

export default About;
