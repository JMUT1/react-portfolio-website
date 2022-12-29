import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

function HeaderSocials() {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/jose-maria-urena-torres/"
        target="_blank"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/JMUT1" target="_blank">
        <BsGithub />
      </a>
      <a href="https://www.instagram.com/chematorres_/" target="_blank">
        <BsInstagram />
      </a>
    </div>
  );
}

export default HeaderSocials;
