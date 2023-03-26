import React from 'react';
import { useSelector } from 'react-redux';
import { IoMdClose } from 'react-icons/io';
import { FaGithub, FaWhatsappSquare } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';
import { FiMail } from 'react-icons/fi';
import { BsTelephone, BsLinkedin, BsFacebook } from 'react-icons/bs';
import './menu.css';

const Menu = (props) => {
  const { showMenu } = props;

  const pageInView = useSelector((state) => state.pageInViewReducer);
  const {
    services,
    projects,
    about,
    contact,
  } = pageInView;

  return (
    <div className="menu-container">
      <div
        className="hamburger-button-wrap icon-close"
        onClick={() => showMenu()}
      >
        <IoMdClose />
      </div>
      <div className="menu-links-wrapp">
        <ul className="intro-table-of-content table-of-content-menu">
          <li>
            <a href="#services" className={services ? 'intro-link active-link' : 'intro-link'}>
              <span>{'> '}</span>
              Services
            </a>
          </li>
          <li>
            <a href="#projects" className={projects ? 'intro-link active-link' : 'intro-link'}>
              <span>{'> '}</span>
              Recent projects
            </a>
          </li>
          <li>
            <a href="#about-me" className={about ? 'intro-link active-link' : 'intro-link'}>
              <span>{'> '}</span>
              About me
            </a>
          </li>
          <li>
            <a href="#get_in_touch" className={contact ? 'intro-link active-link' : 'intro-link'}>
              <span>{'> '}</span>
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div className="social-network-container intro-social social-network-menu">
        <a
          href="https://github.com/camilevahviraki"
          target="_blanck"
          rel="noreferrer"
        >
          <FaGithub />
        </a>
        <a href="https://wa.me/243975246375" target="_blanck" rel="noreferrer">
          <FaWhatsappSquare />
        </a>
        <a
          href="https://www.linkedin.com/in/camile-vahviraki/"
          target="_blanck"
          rel="noreferrer"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://www.facebook.com/camile.vahviraki/"
          target="_blanck"
          rel="noreferrer"
        >
          <BsFacebook />
        </a>
      </div>
      <div className="contact-wrapper menu-contact-wrapper">
        <a href="mailto:camilevahviraki@gmail.com" target="_blanck" rel="noreferrer">
          <div className="contact-icon menu-icon">
            <FiMail />
          </div>
          camilevahviraki@gmail.com
        </a>
        <a href="tel:+250786388103" target="_blanck" rel="noreferrer">
          <div className="contact-icon menu-icon">
            <BsTelephone />
          </div>
          +250(0)-786-388-103
        </a>
        <a href="#localistion">
          <div className="contact-icon menu-icon">
            <MdLocationOn />
          </div>
          Rwanda - Kigali - Kk Av8 109St
        </a>
      </div>
    </div>
  );
};

export default Menu;
