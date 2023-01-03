import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/assets/ME_JMUT.png";
import HeaderSocials from "./HeaderSocials";


function Header() {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I´m</h5>
        <h1>José María Ureña Torres</h1>
        <h5 className="text-light">Front-End Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="image pending to upload... working on it" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
}

export default Header;
