import React from "react";
import About from "./About";
import Contact from "./Contact";
import FlashDeals from "../discount/FlashDeals";
import Wave from "../section/wave";
import Front from "../section/Front";
import './home.css';

const Home = () => {
  return (
    <div className="hero">
      <Front />
      <div id="about">
    
      </div>
      <Wave />
      <About />
      <div id="services">
        BLues
      </div>
      <FlashDeals />
      <div id="contact">
        Contact
      </div>
      <Contact />
    </div>
  );
};

export default Home;
