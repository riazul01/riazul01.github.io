import Header from "components/sections/about/Profile";
import Skills from "components/sections/about/Skills";
import Experience from "components/sections/about/Experience";
import Projects from "components/sections/about/Projects";
import GetInTouch from "components/sections/about/GetInTouch";
import Footer from "components/sections/about/Footer";

const About = () => {
  return (
    <>
      <Header />
      <Projects />
      <Experience />
      <Skills />
      <GetInTouch />
      <Footer />
    </>
  );
};

export default About;
