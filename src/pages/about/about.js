import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useIsInViewport from '../../reusables/checkInViewwPort/checkInViewPort';
import { setPageInView } from '../../redux/componetInView';
import aboutEnglish from '../../data/english/pages/about';
import aboutFrench from '../../data/french/pages/about';
import skills_list from '../../data/skills_list';
import downloadIcon from '../../images/download.svg';
import './about.css';

const About = () => {
  const dispatch = useDispatch();
  const { languages, libraries, tools } = skills_list();
  const iconStyle = {
    color: '#ff77009a',
    fontSize: '30px',
    textAlign: 'center',
    paddind: '10px',
  };
  const pageInView = useSelector((state) => state.pageInViewReducer);
  const language = useSelector((state) => state.languageReducer);
  let pageData = aboutEnglish();
  if (language.languageKey === 0) {
    pageData = aboutEnglish();
  } else if (language.languageKey === 1) {
    pageData = aboutFrench();
  }

  const ref1 = useRef(null);
  const isInViewport1 = useIsInViewport(ref1);

  const {
    about,
  } = pageInView;

  if (isInViewport1 && !about) {
    dispatch(setPageInView({
      state: true,
      page: 'about',
    }));
  } else if (!isInViewport1 && about) {
    dispatch(setPageInView({
      state: false,
      page: 'about',
    }));
  }

  const {
    servicesTitle,
    title,
    description,
    resume,
    skills,
  } = pageData;

  return (
    <div className="about-container" id="about-me" ref={ref1}>
      <div className="services-left-wrapp">
        <h5 className="my-services">{servicesTitle}</h5>
        <h2 className="services-title">
          {title.part1}
          {' '}
          <span className="title-highlight">
            {title.part2}
          </span>
          {' '}
          {title.part3}
        </h2>

        <p className="about-me-paragraph">
          {description}
        </p>
        <a
          href="./documents/CamileResume.pdf"
          className="get_my_resume_link"
          download
        >
          {resume}
          <img src={downloadIcon} alt="" className="download-icon" />
        </a>
      </div>
      <div className="about-me-skills-container">
        <div className="about-languages-container">
          <h5 className="about-skills-title">{skills.language}</h5>
          <div className="about-languages-wrapp">
            {languages.map((lang) => (
              <div className="skill-wrapp" key={lang.name}>
                <div className="skills-icon-wrapp">
                  <div className="skills-icon-border">
                    {lang.icon(iconStyle)}
                  </div>
                </div>
                <p>{lang.name}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="about-languages-container">
          <h5 className="about-skills-title">{skills.framework}</h5>
          <div className="about-languages-wrapp">
            {libraries.map((lang) => (
              <div className="skill-wrapp" key={lang.name}>
                <div className="skills-icon-wrapp">
                  <div className="skills-icon-border">
                    {lang.icon(iconStyle)}
                  </div>
                </div>
                <p>{lang.name}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="about-languages-container">
          <h5 className="about-skills-title">{skills.tools}</h5>
          <div className="about-languages-wrapp">
            {tools.map((lang) => (
              <div className="skill-wrapp" key={lang.name}>
                <div className="skills-icon-wrapp">
                  <div className="skills-icon-border">
                    {lang.icon(iconStyle)}
                  </div>
                </div>
                <p>{lang.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
