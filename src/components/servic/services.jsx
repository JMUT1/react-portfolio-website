import React from "react";
import { BsCheck2 } from "react-icons/bs";
import "./services.css";

function Services() {
  return (
    <section id="services">
      <h5>What I offer</h5>
      <h2>Services</h2>

      <div className=" container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <BsCheck2 className="service__list-icon" />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit</p>
            </li>
            <li>
              <BsCheck2 className="service__list-icon" />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit</p>
            </li>
            <li>
              <BsCheck2 className="service__list-icon" />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit</p>
            </li>
          </ul>
        </article>
        {/* END OF THE UX / UI */}

        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BsCheck2 className="service__list-icon" />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit</p>
            </li>
            <li>
              <BsCheck2 className="service__list-icon" />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit</p>
            </li>
            <li>
              <BsCheck2 className="service__list-icon" />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit</p>
            </li>
          </ul>
        </article>
        {/* END OF THE WEB DEVELOPMENT */}

        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>
          <ul className="service__list">
            <li>
              <BsCheck2 className="service__list-icon" />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit</p>
            </li>
            <li>
              <BsCheck2 className="service__list-icon" />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit</p>
            </li>
            <li>
              <BsCheck2 className="service__list-icon" />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit</p>
            </li>
          </ul>
        </article>
        {/* END OF THE CONTENT */}
      </div>
    </section>
  );
}

export default Services;
