import React from "react";
import "./footer.css";
import { FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer id="footer">
      <a href="#" className="footer__logo">
        JMUT
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contacts">Contacts</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/chemaaa94/">
          <FaFacebookF />
        </a>
        <a href="https://www.instagram.com/chematorres_/">
          <BsInstagram />
        </a>
        <a href="https://twitter.com/">
          <FaTwitter />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Chema Torres. All rights reserved</small>
      </div>
    </footer>
  );
}

export default Footer;
