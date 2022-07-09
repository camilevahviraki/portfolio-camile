import React, { Component } from 'react';
import '../styles/contact.css';
import angelList from '../images/angelList.png';
import github from '../images/github.png';
import Linkedin from '../images/LinkedinIcon.png';
import twitter from '../images/twitter.png';
import Medium from '../images/medium.png';

export default class Contact extends Component {
  state = {
    userName: '',
    email: '',
    text: '',
    message: '',
    disabled: false,
  }

  writeText = (e) => {
    switch (e.target.name) {
      case 'name':
      {
        return this.setState({ userName: e.target.value });
      }
      case 'mail':
      {
        return this.setState({ email: e.target.value });
      }
      case 'text_message':
      {
        return this.setState({ text: e.target.value });
      }
      default: return '';
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.email.length === 0
      || this.state.text.length === 0
      || this.state.userName.length === 0) {
      this.setState({ message: 'Please complete all field!' });
      this.setState({ disabled: true });
    } if (!/\S+@\S+\.\S+/.test(this.state.email)) {
      this.setState({ message: 'Please enter a valid mail!' });
      this.setState({ disabled: false });
    }
    this.setState({ message: 'Well done!' });
    this.setState({ disabled: false });
  }

  render() {
    return (
      <div className="contact_container">
        <div id="contact">
          <p>
            I&apos;m always interested in hearing about new projects, so if you&apos;d like
            to chat please get in touch.
          </p>
          <form
            id="form"
            action="https://formspree.io/f/xgedzqjv"
            method="POST"
          >
            <input type="text" name="name" placeholder="Full Name" onChange={this.writeText} />
            <input type="mail" name="mail" placeholder="Email Adress" onChange={this.writeText} />
            <textarea placeholder="Enter text here" name="text_message" onChange={this.writeText}>

            </textarea>
            <div className="wrap">
              <button
                className="button"
                type="button"
                onClick={this.handleSubmit}
                disabled={this.state.disabled}
              >
                Get in touch
              </button>
            </div>
            <p>{this.state.message}</p>
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
