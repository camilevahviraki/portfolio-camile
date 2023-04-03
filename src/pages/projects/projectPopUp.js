import React from 'react';
import { useSelector } from 'react-redux';
import { FaGithub } from 'react-icons/fa';
import { VscLiveShare } from 'react-icons/vsc';
import ImageSilder from '../../reusables/images_slider/ImageSilder';
import './projectPopUp.css';

const ProjectPopUp = () => {
  const project = useSelector((state) => state.currentProjectReducer);
  const language = useSelector((state) => state.languageReducer);
  const {
    description,
    imgArray,
    languages,
    live_link,
    project_link,
    project_name,
    technologies,
  } = project;

  return (
    <div className="project-pop-up-container">
      <div className="popup-image-container">
        <ImageSilder imagesArray={imgArray} popUp />
      </div>
      <div className="popup-description">
        <h2 className="project-title popup-title">
          {'> '}
          {project_name}
        </h2>
        <p className="project-description-paragraph popup-description-text">
          {description}
        </p>
        <div className="project-languages-container">
          {languages.map((lang) => (
            <h4 className="project-language" key={lang}>
              {lang}
            </h4>
          ))}
        </div>
        <ul className="project-technologies-technologies">
          {technologies.map((tech) => (
            <li className="project-technology popup-tech" key={tech}>
              <div className="dot" />
              {tech}
            </li>
          ))}
        </ul>
        <div className="project-buttons-live popup-button">
          <a href={project_link} target="_blanck" rel="noreferrer">
            {language.languageKey === 0 ? 'See project' : 'Voir project'}
            <span className="see-live-icon">
              <FaGithub />
            </span>
          </a>
          <a href={live_link} target="_blanck" rel="noreferrer">
            {language.languageKey === 0 ? 'See live' : 'Voir Live'}
            <span className="see-live-icon">
              <VscLiveShare />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectPopUp;
