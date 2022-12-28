import React from "react";
import "./portafolio.css";
import IMG1 from "../../assets/assets/portfolio1.jpg";
import IMG2 from "../../assets/assets/portfolio2.jpg";
import IMG3 from "../../assets/assets/portfolio3.jpg";
import IMG4 from "../../assets/assets/portfolio4.jpg";
import IMG5 from "../../assets/assets/portfolio5.png";
import IMG6 from "../../assets/assets/portfolio6.jpg";

function Portafolio() {
  return (
    <section id="portafolio">
      <h5>My Recent Work</h5>
      <h2> Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className="btn">
              Gitbub
            </a>
            <a
              href="https://dribbble.com/Alien__pixels"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className="btn">
              Gitbub
            </a>
            <a
              href="https://dribbble.com/Alien__pixels"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className="btn">
              Gitbub
            </a>
            <a
              href="https://dribbble.com/Alien__pixels"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className="btn">
              Gitbub
            </a>
            <a
              href="https://dribbble.com/Alien__pixels"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className="btn">
              Gitbub
            </a>
            <a
              href="https://dribbble.com/Alien__pixels"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className="btn">
              Gitbub
            </a>
            <a
              href="https://dribbble.com/Alien__pixels"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Portafolio;
