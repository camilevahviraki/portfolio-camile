import React, { Component } from 'react';
import angelList from '../images/angelList.png';
import github from '../images/github.png';
import Linkedin from '../images/LinkedinIcon.png';
import twitter from '../images/twitter.png';
import Medium from '../images/medium.png';
import '../styles/intro.css';

export default class Intro extends Component {
  render() {
    return (
      <section className="intro" id="intro">
        <div className="content">
          <h2>Hey there.</h2>
          <h2 className="main_title">I&apos;m Camile</h2>
          <h3>I’am a Software Developer</h3>
          <p>
            I can help you build a product , feature or website. Look through some
            of my work and experience! If you like what you see and have a project
            you need coded, don’t hesitate to contact me.
          </p>
        </div>
        <ul className="contact_png">
          <li><a href="https://angel.co/u/camile-vahviraki"><img src={angelList} alt="" className="logo_link" /></a></li>
          <li><a href="https://github.com/camilevahviraki/"><img src={github} alt="" className="logo_link" /></a></li>
          <li><a href="https://www.linkedin.com/in/camile-vahviraki/"><img src={Linkedin} alt="" className="logo_link" /></a></li>
          <li><a href="https://medium.com/@camilevahviraki"><img src={Medium} alt="" className="logo_link" /></a></li>
          <li><a href="https://twitter.com/CamileVahviraki"><img src={twitter} alt="" className="logo_link" /></a></li>
        </ul>
      </section>
    );
  }
}
