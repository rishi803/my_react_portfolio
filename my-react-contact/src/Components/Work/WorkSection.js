import React from "react";
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import "./WorkSection.css";

// import BrandImage from "../../img/clients_group.svg";

function WorkSection() {
  return (
    <section className="work section" id="work">
      <div className="circle work_circleOne"></div>
      <div className="circle work_circleThree"></div>
  
      <h2 className="section_title">My Tech Stack</h2>

      <div className="work_container bd_grid">
        <div className="work_image">
        <Player
  autoplay
  loop
  src="https://assets2.lottiefiles.com/packages/lf20_aptscmnx.json"
  style={{ height: '300px', width: '300px' }}
>
</Player>
          {/* <img src={BrandImage} alt="" /> */}
        </div>

        <div className="work_text_section " style={{textAlign:"center"}}>
          <h2 className="work_subtitle " >
            I work on all this <br />
            <span>Awesome Technologies</span>
          </h2>
          <p>
            Lorem ipsum is a placeholder text commonly used to demonstrate.Lorem
            ipsum may be final copy is available.Lorem ipsum is a placeholder
            text commonly used to demonstrate.Lorem ipsum may be final copy is
            available.
          </p>

          <a href="#" className="button">
            Details
          </a>
        </div>
      </div>
    </section>
  );
}

export default WorkSection;
