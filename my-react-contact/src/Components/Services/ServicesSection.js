import React from "react";
import "./ServicesSection.css";
import { Player } from '@lottiefiles/react-lottie-player';
import Smiley1 from "../../img/smiley_1.svg";
import Smiley2 from "../../img/smiley_2.svg";
import Smiley3 from "../../img/smiley_3.svg";

function ServicesSection() {
  return (
    <section className="services section" id="services">
      <div className="circle service_circleOne"></div>
      <div className="circle service_circleThree"></div>

        <div className="service_text_section" style={{textAlign:"center"}}>
          <h2 className="service_subtitle">
            My Tech <br /> <span>Tools</span>
          </h2>
          <p>
            Lorem ipsum is a placeholder text commonly used to demonstrate.Lorem
            ipsum may be final copy is available.
          </p>
          <Player
  autoplay
  loop
  src="https://assets7.lottiefiles.com/packages/lf20_SmywXC.json"
  style={{ height: '300px', width: '300px',marginBottom:'2rem' }}
>
</Player>

          <a href="#" className="button">
            Download CV
          </a>
       </div>
    </section>
  );
}

export default ServicesSection;
