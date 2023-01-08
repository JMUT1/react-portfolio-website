import React from "react";
import "./Experience.css";
import { BsPatchCheckFill } from "react-icons/bs";

function Experience() {
  return (
    <section id="experience">
      <h5>What skills I have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        {/* FRONTEND CONTAINER */}
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__detail-icons" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__detail-icons" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__detail-icons" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Skillful</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__detail-icons" />
              <div>
                <h4>React</h4>
                <small className="text-light">Skillful</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__detail-icons" />
              <div>
                <h4>Angular</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__detail-icons" />
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Skillful</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__detail-icons" />
              <div>
                <h4>Typescript</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__backend">
          {/* BACKEND CONTAINER */}
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__detail-icons" />
              <div>
                <h4>Node JS</h4>
                <small className="text-light">Skillful</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__detail-icons" />
              <div>
                <h4>Python</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
            {/* <article className="experience__details">
              <BsPatchCheckFill className="experience__detail-icons" />
              <div>
                <h4>PHP</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__detail-icons" />
              <div>
                <h4>MySQL</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__detail-icons" />
              <div>
                <h4>Python</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
