import React, { useEffect } from "react";
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import "./HomeSection.css";

// Social Links
import HomeSocial from "./HomeSocial.js";
import {TimelineLite} from "gsap";
// Image
import LadyImage from "../../img/lady_img.png";
import Smiley from "../../img/smiley_1.svg";
import LadyBgPath from "../../img/lady_bgpath.svg";
import Star1 from "../../img/star.svg";
import Star2 from "../../img/star_2.svg";
import Star3 from "../../img/star_3.svg";
import medal from "../../img/medal.svg";


function HomeSection() {
  useEffect(()=>{
    const t1=new TimelineLite({delay:0.2});
    t1.from('.home_title',{duration:0.4,opacity:0,y:15,delay:0.2})
      .from('.profileBg',{opacity:.5,scale:0},{opacity:1,scale:1,ease:"elastic.out(1,0.3)"})
      .from('.button',{duration:0.4,opacity:0,y:20,ease:"bounce.out"})
      .from('.homeSocial a',{y:160,opacity:0,stagger:0.1,duration:0.8,ease:"back.out(1.7)"},'Start')
  },[]);
  return (
    <section className="section bd_grid" id="home">
      <div className="circle circleOne"></div>
      <div className="circle circleTwo"></div>
      <div className="circle circleThree"></div>
    
    <div className="home">
      <div className="left">
      
      <div className="home_data">
        <h1 className="home_title">
          Hi, I'am <br /> <span>Rishi Singh</span><br /> Web Designer & Programmer
        </h1>

        <a href="https://drive.google.com/file/d/1NkrBwjuxHTUhEzhlhJprB2qyvVtOmib9/view?usp=sharing" className="button">
          Download Resume
        </a>
    
</div>
      <div className="homeSocial">
        {HomeSocial &&
          HomeSocial.map((social) => (
            <a href={social.iconLink} target="_blank" key={social.id}>
              {social.iconName}
            </a>
          ))}
      </div>
      </div>
      <div className="right">
      <div className="home_img">
        <img src={LadyImage} alt="" className="profileImg" />
        <img src={LadyBgPath} alt="" className="profileBg" />

        <img src={Smiley} alt="" className="smiley" />
        <img src={Star1} alt="" className="Star1" />
        <img src={Star2} alt="" className="Star2" />
        <img src={Star3} alt="" className="Star3" />

        <div className="box box1">
          <div className="imageBox">
            <img src={Smiley} alt="" />
          </div>
          <div className="ContentBox">
            <h2>Ui/Ux</h2>
            <p>Type some content over here</p>
          </div>
        </div>

        <div className="box box2">
          <div className="imageBox">
            <img src={medal} alt="" />
          </div>
          <div className="ContentBox">
            <h2>Awards</h2>
            <p>Type some content over here</p>
          </div>
        </div>
      </div>
      </div>
      </div>
    </section>
  );
}

export default HomeSection;
