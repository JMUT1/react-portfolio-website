import React from "react";
import "./about.css";
import ME from "../../assets/assets/Me1.png";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { MdOutlineFolderSpecial } from "react-icons/md";

function About() {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About me</h2>

      {/* IMAGE OF THE RIGHT */}

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="image pending to upload... working on it" />
          </div>
        </div>

        {/* INFORMATION OF THE LEFT */}
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>2 year working</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>10+ WorldWide</small>
            </article>

            <article className="about__card">
              <MdOutlineFolderSpecial className="about__icon" />
              <h5>Experience</h5>
              <small>15+ completed</small>
            </article>
          </div>
          <p>
          I am a Front-End Developer with almost 2 years of React experience, I am a high energy person with substantial team playing skills who is looking for a team with exceptional communication skills to achieve an efficient working environment.
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
