import React from "react";
import Header from "./component/Head/Header";
import Footer from "./component/Footer";
import Contact from "./component/Contact/Contact";
import Blog from "./component/Blog/Blog";
import Testimonial from "./component/Testimonial/Testimonial";
import Resume from "./component/Resume/Resume";
import Portfolio from "./component/Portfolio/Portfolio";
import Features from "./component/Features/Features";
import Home from "./component/Hero/Home";

import "./App.css";

const App = () => {
  return (
    <>
      <Header />
      <Home />
      <Features />
      <Portfolio />
      <Resume />
      <Testimonial />
      <Blog />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
