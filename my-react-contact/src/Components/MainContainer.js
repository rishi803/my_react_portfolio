import React,{useEffect} from "react";
import "./MainContainer.css";
import Home from "./Home/HomeSection";
import Education from "./Services/ServicesSection";
import Work from "./Work/WorkSection";
import Abouts from "./About/AboutSection";
import Projects from "./Projects/ProjectSection";
import Contact from "./ContactUs/ContactSection";
import Footer from "./Footer";
import "./MainContainer.css";
import ScrollReveal from "scrollreveal"
function MainContainer() {
  useEffect(() => {
    const section = document.querySelectorAll(".section");
    ScrollReveal().reveal(section,{
      delay:375,
      duration:500,
      reset:true,
      easing:"ease-in",
    });
  },[]);
  return (
    <main>
      {/* Home Section */}
      <Home />
      {/* Service Section */}
      <Education />
      {/* Work Section */}
      <Work />
      {/* About Section */}
      <Abouts />
      {/* Project Section */}
      <Projects />

      {/* Contact Section */}
      <Contact />

      <Footer />
    </main>
  );
}

export default MainContainer;
