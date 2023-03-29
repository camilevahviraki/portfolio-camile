import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { VscLiveShare } from 'react-icons/vsc';
import ImageSilder from '../../reusables/images_slider/ImageSilder';
import './projects.css';

const Project = (props) => {
  const {
    project,
    classComponent,
    style,
    languageKey,
  } = props;

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
    <div draggable className={`card-project ${classComponent}`} style={style}>
      {
        classComponent !== 'activeCard'
          ? <div className="gray-shadow" />
          : <></>
      }
      <div className="project-wrapper">
        <div className="project-dark-backround" />
        <div className="project-image-container">
          <ImageSilder imagesArray={imgArray} />
        </div>
        <div className="project-description">
          <h2 className="project-title">
            {'> '}
            {project_name}
          </h2>
          <p className="project-description-paragraph">{description}</p>
          <div className="project-gray-corner">
            <div className="project-languages-container">
              {languages.map((lang) => (
                <h4 className="project-language" key={lang}>{lang}</h4>
              ))}
            </div>
            <ul className="project-technologies-technologies">
              {technologies.map((tech) => (
                <li className="project-technology" key={tech}>
                  <div className="dot" />
                  {tech}
                </li>
              ))}
            </ul>
            <div className="project-buttons-live">
              <a href={project_link} target="_blanck" rel="noreferrer">
                {languageKey === 0 ? 'See project' : 'Voir project'}
                <span className="see-live-icon">
                  <FaGithub />
                </span>
              </a>
              <a href={live_link} target="_blanck" rel="noreferrer">
                {languageKey === 0 ? 'See live' : 'Voir Live'}
                <span className="see-live-icon">
                  <VscLiveShare />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
