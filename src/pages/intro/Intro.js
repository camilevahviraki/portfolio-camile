import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BsLinkedin, BsFacebook } from 'react-icons/bs';
import { FaGithub, FaWhatsappSquare } from 'react-icons/fa';
import downloadIcon from '../../images/download.svg';
import useIsInViewport from '../../reusables/checkInViewwPort/checkInViewPort';
import introEnglish from '../../data/english/pages/intro';
import introFrench from '../../data/french/pages/intro';
import { setPageInView } from '../../redux/componetInView';
import './Intro.css';

const Intro = () => {
  const dispatch = useDispatch();
  const ref1 = useRef(null);
  const isInViewport1 = useIsInViewport(ref1);
  const pageInView = useSelector((state) => state.pageInViewReducer);
  const language = useSelector((state) => state.languageReducer);
  let pageData = introEnglish();
  if (language.languageKey === 0) {
    pageData = introEnglish();
  } else if (language.languageKey === 1) {
    pageData = introFrench();
  }
  const {
    intro,
  } = pageInView;
  if (isInViewport1 && !intro) {
    dispatch(setPageInView({
      state: true,
      page: 'intro',
    }));
  } else if (!isInViewport1 && intro) {
    dispatch(setPageInView({
      state: false,
      page: 'intro',
    }));
  }

  const {
    title,
    presentation,
    description,
    resume,
    connect,
    links,
  } = pageData;

  return (
    <div className="Intro-container" id="intro" ref={ref1}>
      <div className="intro-section1">
        <div>
          <h1 className="intro-main-title title-top">{title.part1}</h1>
          <h1 className="intro-main-title">{title.part2}</h1>
          <h2 className="intro-title2">{presentation}</h2>
        </div>
        <div>
          <p className="intro-paragraph">
            {description}
          </p>
        </div>

        <div className="intro-buttons-wrapper">
          <a href="#get_in_touch" className="intro-get-in-touch">{connect}</a>
          <a
            href="./documents/CamileResume.pdf"
            className="get_my_resume_link"
            download
          >
            {resume}
            <img src={downloadIcon} alt="" className="download-icon" />
          </a>

        </div>

        <div className="social-network-container intro-social">
          <a href="https://github.com/camilevahviraki" target="_blanck" rel="noreferrer">
            <FaGithub />
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
      <div className="intro-section2"></div>
      <div className="intro-section3">
        <div className="rotating-square-container">
          <div className="rotating-square" />
        </div>
        <div className="white-square-container">
          <div className="rotating-square border-white" />
        </div>
        <ul className="intro-table-of-content">
          <li>
            <a href="#services" className="intro-link">
              <span>{'> '}</span>
              {links.link1}
            </a>
          </li>
          <li>
            <a href="#projects" className="intro-link">
              <span>{'> '}</span>
              {links.link2}
            </a>
          </li>
          <li>
            <a href="#libraries" className="intro-link">
              <span>{'> '}</span>
              {links.link3}
            </a>
          </li>
          <li>
            <a href="#about-me" className="intro-link">
              <span>{'> '}</span>
              {links.link4}
            </a>
          </li>
          <li>
            <a href="#get_in_touch" className="intro-link">
              <span>{'> '}</span>
              {links.link5}
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Intro;
