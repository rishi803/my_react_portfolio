import React from "react";
import "./Footer.css";
import HomeSocial from "./Home/HomeSocial.js";

function Footer() {
  return (
    <footer>
      <p className="footer_title">Rishi Singh</p>

      <div className="footerSocial">
        {HomeSocial &&
          HomeSocial.map((social) => (
            <a href={social.iconLink} key={social.id}>
              {social.iconName}
            </a>
          ))}
      </div>

      <p className="copy_right">&#169; 2022 copyright all right reserved</p>
    </footer>
  );
}

export default Footer;
