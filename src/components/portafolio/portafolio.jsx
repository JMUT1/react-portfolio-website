import React from "react";
import "./portafolio.css";
import IMG1 from "../../assets/assets/portfolio1.jpg";
import IMG2 from "../../assets/assets/portfolio2.jpg";
import IMG3 from "../../assets/assets/portfolio3.jpg";
import IMG4 from "../../assets/assets/portfolio4.jpg";
import IMG5 from "../../assets/assets/portfolio5.png";
import IMG6 from "../../assets/assets/portfolio6.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Modal popup",
    github: "https://github.com/JMUT1/Modal--Popup",
    demo: "https://jmut1.github.io/Modal--Popup/",
  },
  {
    id: 2,
    image: IMG2,
    title: "Gym Website (React)",
    github: "https://github.com/JMUT1/website-gym",
    demo: "http://www.jmut.online/",
  },
  {
    id: 3,
    image: IMG3,
    title: "Rick & Morty API (React)",
    github: "https://github.com/JMUT1/rick-and-morty-react",
    demo: "https://jmut1.github.io/rick-and-morty-react/",
  },
  {
    id: 4,
    image: IMG4,
    title: "TODO-list (REACT)" ,
    github: "https://github.com/JMUT1/todo-list-react/settings/pages",
    demo: "https://jmut1.github.io/todo-list-react/",
  },
  {
    id: 5,
    image: IMG5,
    title: "Weather API (React)",
    github: "https://github.com/JMUT1/Weather-API-react",
    demo: "https://github.com/JMUT1/Weather-API-react",
  },
  {
    id: 6,
    image: IMG6,
    title: "demo 6",
    github: "https://github.com/JMUT1/PokeApi-Form-Reactive-Angular-",
    demo: "https://dribbble.com/Alien__pixels",
  },
];

function Portafolio() {
  return (
    <section id="portafolio">
      <h5>My Recent Work</h5>
      <h2> Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt="" />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Gitbub
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Portafolio;
