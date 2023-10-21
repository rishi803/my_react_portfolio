import React from "react";

function ServiceBox({ imageName, box_name,College,Location,duration }) {
  return (
    <div className="service_box" style={{ backgroundColor: "lightblue"}}>
      
      <p>{imageName}</p>

      <h2>{box_name}</h2>

      <p  style={{backgroundColor:"lightgreen",borderRadius:"10px",padding:"10px"}}>
      {College}
      </p>
      <p  style={{}}>
       {Location}
      </p>
      <p  style={{}}>
      {duration}
      </p>

      <a href="#" className="service_button">
        Learn More
      </a>
      </div>
   
  );
}

export default ServiceBox;
