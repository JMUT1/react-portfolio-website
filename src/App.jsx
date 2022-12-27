import React from "react";
import Header from "./components/header/header";
import About from "./components/about/about";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
import Nav from "./components/nav/nav";
import Portafolio from "./components/portafolio/portafolio";
import Services from "./components/servic/services";
import Testimonials from "./components/testimonials/testimonials";
import Experience from "./components/experience/Experience";

const App = () => {
  return (
    <>
      <Header />
      <About />
      <Contact />
      <Footer />
      <Nav />
      <Portafolio />
      <Services />
      <Testimonials />
    </>
  );
};

export default App;
