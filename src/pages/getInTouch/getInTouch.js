import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MdLocationOn } from 'react-icons/md';
import { FiMail } from 'react-icons/fi';
import { BsTelephone, BsLinkedin, BsFacebook } from 'react-icons/bs';
import { AiOutlineWhatsApp } from 'react-icons/ai';
import { FaGithub, FaWhatsappSquare, FaAngellist } from 'react-icons/fa';
import { setPageInView } from '../../redux/componetInView';
import useIsInViewport from '../../reusables/checkInViewwPort/checkInViewPort';
import contactEnglish from '../../data/english/pages/contact';
import contactFrench from '../../data/french/pages/contact';
import './getInTouch.css';

const GetInTouch = () => {
  const dispatch = useDispatch();
  const pageInView = useSelector((state) => state.pageInViewReducer);
  const language = useSelector((state) => state.languageReducer);
  let pageData = contactEnglish();
  if (language.languageKey === 0) {
    pageData = contactEnglish();
  } else if (language.languageKey === 1) {
    pageData = contactFrench();
  }

  const ref1 = useRef(null);
  const isInViewport1 = useIsInViewport(ref1);

  const {
    contact,
  } = pageInView;

  if (isInViewport1 && !contact) {
    dispatch(setPageInView({
      state: true,
      page: 'contact',
    }));
  } else if (!isInViewport1 && contact) {
    dispatch(setPageInView({
      state: false,
      page: 'contact',
    }));
  }

  const {
    title,
    formText,
    fromInput,
  } = pageData;

  return (
    <div className="get-in-touch-container" id="get_in_touch" ref={ref1}>
      <div className="get-in-touch-form-container">
        <h4 className="get-in-touch-title">{title}</h4>
        <p>{formText}</p>
        <form className="get-in-touch-form">
          <input type="text" name="username" placeholder={fromInput.name} />
          <input type="text" name="email" placeholder={fromInput.mail} />
          <textarea name="message" placeholder={fromInput.message}></textarea>
        </form>
      </div>
      <div className="get-in-touch-contact-container">
        <h4 className="get-in-touch-contact-title">Contact</h4>
        <div className="contact-wrapper">
          <a href="#localistion">
            <div className="contact-icon">
              <MdLocationOn />
            </div>
            Rwanda - Kigali - Kk Av8 109St
          </a>
          <a href="mailto:camilevahviraki@gmail.com" target="_blanck" rel="noreferrer">
            <div className="contact-icon">
              <FiMail />
            </div>
            camilevahviraki@gmail.com
          </a>
          <a href="tel:+250786388103" target="_blanck" rel="noreferrer">
            <div className="contact-icon">
              <BsTelephone />
            </div>
            +250(0)-786-388-103
          </a>
          <a href="https://wa.me/243975246375" target="_blanck" rel="noreferrer">
            <div className="contact-icon">
              <AiOutlineWhatsApp />
            </div>
            +243(0)-975-246-375
          </a>
        </div>
        <div className="social-network-container">
          <a href="https://github.com/camilevahviraki" target="_blanck" rel="noreferrer">
            <FaGithub />
          </a>
          <a href="https://wellfound.com/u/camile-vahviraki" target="_blanck" rel="noreferrer">
            <FaAngellist />
          </a>
          <a href="https://wa.me/243975246375" target="_blanck" rel="noreferrer">
            <FaWhatsappSquare />
          </a>
          <a href="https://www.linkedin.com/in/camile-vahviraki/" target="_blanck" rel="noreferrer">
            <BsLinkedin />
          </a>
          <a href="https://www.facebook.com/camile.vahviraki/" target="_blanck" rel="noreferrer">
            <BsFacebook />
          </a>

        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
