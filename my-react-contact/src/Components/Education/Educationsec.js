import React from "react";
import "./education.css";
import ServiceBox  from "../Services/ServiceBox";
import { Player } from '@lottiefiles/react-lottie-player';
import Smiley1 from "../../img/smiley_1.svg";
import Smiley2 from "../../img/smiley_2.svg";
import Smiley3 from "../../img/smiley_3.svg";

function Educationsec() {
  return (
    <section className="services section" id="services">
      <div className="circle service_circleOne"></div>
      <div className="circle service_circleThree"></div>

      <h2 className="section_title">Education</h2>

      
        <div className="serviceImage">
          {/* <ServiceBox  box_name={"B.Tech in Information Technology"} />
          <ServiceBox  box_name={"Developer"} />
          <ServiceBox  box_name={"Ui/Ux"} />
          <ServiceBox  box_name={"Mobile App"} /> */}
          <div className="service_box1">
           
          <ServiceBox imageName={
               <Player
               autoplay
               loop
               src="https://assets6.lottiefiles.com/packages/lf20_dT1E1P.json"
               style={{ height: '5rem', width: '5rem' }}
             >
             </Player>
          } 
          box_name={"B.Tech in Information Technology"}
           College={"K.I.E.T Group Of Institutions"}
           Location={"Ghaziabad , U.P"}
           duration={"2020-Present"}/>
          </div>

          <div className="service_box1">
          <ServiceBox imageName={
              <Player
              autoplay
              loop
              src="https://assets6.lottiefiles.com/private_files/lf30_G9r0Hr.json"
              style={{ height: '7rem', width: '20rem' }}
            >
            </Player>
          } 
          box_name={"Senior Secondary (XII)"}
          College={"Saraswati Vidya Mandir"}
          Location={"Sultanpur , U.P"} 
          duration={"2018-2019"}/>
</div>

<div className="service_box1">
          <ServiceBox imageName={
                <Player
                autoplay
                loop
                src="https://assets10.lottiefiles.com/private_files/lf30_CrFtpW.json"
                style={{ height: '7rem', width: '20rem' }}
              >
              </Player>
          } box_name={"High School (X)"} 
          College={"Shakuntala Central Academy"}
          Location={"Jaunpur , U.P"}
          duration={"2016-2017"}/>
        </div>
        </div>
    </section>
  );
}

export default Educationsec;
