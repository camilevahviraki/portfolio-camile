import React from 'react';
import ImageSilder from '../../reusables/images_slider/ImageSilder';
import githubImg from '../../images/GithubPopUp.png';
import liveImg from '../../images/IconLivePopUp.png';
import './projects.css';

const Project = (props) => {
  const {
    project,
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
    <div className="project-wrapper">
      <div className="project-dark-backround" />
      <div className="project-image-container">
        <ImageSilder imagesArray={imgArray}/>
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
            <a href={live_link} target="_blanck" rel="noreferrer">
              See project
              <img
                src={githubImg}
                alt=""
                className="project-buttons-live-icon"
              />
            </a>
            <a href={project_link} target="_blanck" rel="noreferrer">
              See live
              <img
                src={liveImg}
                alt=""
                className="project-buttons-live-icon"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
