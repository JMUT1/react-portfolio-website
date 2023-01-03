import React from "react";
import "./contact.css";
import { MdOutlineMailOutline } from "react-icons/md";
import { ImWhatsapp } from "react-icons/im";
import { useRef } from "react";
import emailjs from "emailjs-com";
import { BsLinkedin } from "react-icons/bs";


function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_49nv88f",
        "template_x9ar78y",
        form.current,
        "9naj2beNNK5EX2Fpk"
      )
      .then(
        (result) => {
          // console.log(result.text);
          alert("Message send!");
          e.target.reset();
        },
        (error) => {
          // console.log(error.text);
          alert("Something went wrong!!! Try later!");
        }
      );
  };

  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMailOutline className="contact__option-icon" />
            <h4>Email</h4>
            <h5>josemariaurenatorres@gmail.com</h5>
            <a href="mailto:josemariaurenatorres@gmail.com">Send a message</a>
          </article>
          <article className="contact__option">
            <BsLinkedin className="contact__option-icon" />
            <h4>Instagram</h4>
            <h5>chemaTorres_</h5>
            <a
              href="https://www.linkedin.com/in/jose-maria-urena-torres/"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <ImWhatsapp className="contact__option-icon" />
            <h4>Whatsapp</h4>
            <h5>+52 8112550227</h5>
            <a
              href="https://wa.me/+528112550227"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
        </div>
        {/* END OF THE CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
