import React from "react";
import whasappIcon from '../../images/whatsapp.png';
import "./Intro.css";

const Intro = () => {
  return (
    <div className="Intro-container" id="intro">
      <div className="intro-section1">
        <div>
          <h1 className="intro-main-title title-top">Hey there.</h1>
          <h1 className="intro-main-title">I'm Camile</h1>
          <h2 className="intro-title2">I’am a Software Developer</h2>
        </div>
        <div>
          <p className="intro-paragraph">
            I can help you build a product , feature or website. Look through
            some of my work and experience! If you like what you see and have a
            project you need coded, don’t hesitate to contact me.
          </p>
        </div>
        <a href="connect-on-whatsapp" className="intro-reach-me-whatsapp">
            <img src={whasappIcon} alt="" className="icon"/>
            <span>Connect on whatsapp</span>
        </a>
      </div>
      <div className="intro-section2"></div>
      <div className="intro-section3">
        <ul className="intro-table-of-content">
            <li><a href="#recent_projects" className="intro-link"><span>{"> "}</span>Recent projects</a></li>
            <li><a href="#libraries"  className="intro-link"><span>{"> "}</span>Libraries</a></li>
            <li><a href="#get_in_touch"  className="intro-link"><span>{"> "}</span>Get in touch</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Intro;
