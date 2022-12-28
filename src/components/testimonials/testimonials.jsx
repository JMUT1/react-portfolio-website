import React from "react";
import "./testimonials.css";
import AVT1 from "../../assets/assets/avatar1.jpg";
import AVT2 from "../../assets/assets/avatar2.jpg";
import AVT3 from "../../assets/assets/avatar3.jpg";
import AVT4 from "../../assets/assets/avatar4.jpg";

const data = [
  {
    avatar: AVT1,
    name: "Tina Snow",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste possimus nemo animi aperiam itaque similique ullam provident ut voluptatibus voluptate",
  },
  {
    avatar: AVT2,
    name: "Michel Jordan",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste possimus nemo animi aperiam itaque similique ullam provident ut voluptatibus voluptate",
  },
  {
    avatar: AVT3,
    name: "Snow Man",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste possimus nemo animi aperiam itaque similique ullam provident ut voluptatibus voluptate",
  },
  {
    avatar: AVT4,
    name: "Javier Hernandez",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste possimus nemo animi aperiam itaque similique ullam provident ut voluptatibus voluptate",
  },
];

function Testimonials() {
  return (
    <section id="testimonials">
      <h5>Review from client</h5>
      <h2>Testimonials</h2>

      <div className="container testimonials__container">
        {data.map(({ avatar, name, review }, index) => {
          return (
            <article key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="avatar 1" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Testimonials;
