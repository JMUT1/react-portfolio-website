import React from "react";
import "./testimonials.css";
import AVT1 from "../../assets/assets/avatar1.jpg";

function Testimonials() {
  return (
    <section id="testimonials">
      <h5>Review from client</h5>
      <h2>Testimonials</h2>

      <div className="container testimonials__container">
        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVT1} alt="avatar 1" />
          </div>
          <h5 className="client__name">Ernest Achiver</h5>
          <small className="client__review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, .
          </small>
        </article>
        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVT1} alt="avatar 1" />
          </div>
          <h5 className="client__name">Ernest Achiver</h5>
          <small className="client__review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, .
          </small>
        </article>
        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVT1} alt="avatar 1" />
          </div>
          <h5 className="client__name">Ernest Achiver</h5>
          <small className="client__review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, .
          </small>
        </article>
        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVT1} alt="avatar 1" />
          </div>
          <h5 className="client__name">Ernest Achiver</h5>
          <small className="client__review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, .
          </small>
        </article>
      </div>
    </section>
  );
}

export default Testimonials;
