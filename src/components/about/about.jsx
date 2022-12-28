import React from "react";
import "./about.css";
import ME from "../../assets/assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { MdOutlineFolderSpecial } from "react-icons/md";

function About() {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Me IMG" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>2 year working experience</small>
            </article>
          </div>

          <div className="about__cards">
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>200+ WorldWide</small>
            </article>
          </div>

          <div className="about__cards">
            <article className="about__card">
              <MdOutlineFolderSpecial className="about__icon" />
              <h5>Experience</h5>
              <small>80+ complite Projects</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati
            cumque possimus eius tempora ea, voluptatem eum velit? Totam
            aliquid, eius id consectetur quasi illo deserunt odit voluptatum
            sed, omnis dolor.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let´s Talk
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
