import React, { Component } from 'react';
import '../styles/contact.css';
import angelList from '../images/angelList.png';
import github from '../images/github.png';
import Linkedin from '../images/LinkedinIcon.png';
import twitter from '../images/twitter.png';
import Medium from '../images/medium.png';

export default class Contact extends Component {
  render() {
    return (
      <div className="contact_container">
        <div id="contact">
          <p>
            I&apos;m always interested in hearing about new projects, so if you&apos;d like
            to chat please get in touch.
          </p>
          <form id="form" action="https://formspree.io/f/xgedzqjv" method="POST">
            <input type="text" name="name" placeholder="Full Name" />
            <input type="mail" name="mail" placeholder="Email Adress" />
            <textarea placeholder="Enter text here" name="text_message">

            </textarea>
            <div class="wrap">
                   <button class="button">Get in touch</button>
            </div>
          </form>

        </div>
        <ul className="contact_png_links">
          <li><a href="https://angel.co/u/camile-vahviraki"><img src={angelList} alt="" className="logo_link" /></a></li>
          <li><a href="https://github.com/camilevahviraki/"><img src={github} alt="" className="logo_link" /></a></li>
          <li><a href="https://www.linkedin.com/in/camile-vahviraki/"><img src={Linkedin} alt="" className="logo_link" /></a></li>
          <li><a href="https://medium.com/@camilevahviraki"><img src={Medium} alt="" className="logo_link" /></a></li>
          <li><a href="https://twitter.com/CamileVahviraki"><img src={twitter} alt="" className="logo_link" /></a></li>
        </ul>
      </div>
    );
  }
}
