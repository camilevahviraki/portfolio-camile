import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';
import { VscLiveShare } from 'react-icons/vsc';
import ImageSilder from '../../reusables/images_slider/ImageSilder';
import LimitText from '../../reusables/limit-text-length/limitText';
import { setCurrentProject } from '../../redux/currentProjectReducer';
import './projects.css';

const Project = (props) => {
  const dispatch = useDispatch();
  const {
    project, classComponent, languageKey,
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
  // <div draggable className={`card-project ${classComponent}`} style={style}>
    <div draggable className="card-project">
      {/* {classComponent !== 'activeCard' && classComponent !== '' ? (
        // <div className="gray-shadow" />
      ) : (
        <></>
      )} */}
      <div className="project-wrapper">
        <div className="project-dark-backround" />
        <div className="project-image-container">
          {
            classComponent === ''
              ? (<ImageSilder imagesArray={imgArray} freeze />)
              : (<ImageSilder imagesArray={imgArray} />)
          }
        </div>
        <div className="project-description">
          <h2 className="project-title">
            {'> '}
            {project_name}
          </h2>

          {classComponent === '' ? (
            <LimitText
              limit={80}
              text={description}
              className="project-description-paragraph"
            />
          ) : (
            <p className="project-description-paragraph">{description}</p>
          )}

          <div className="project-gray-corner">
            {classComponent === '' ? (
              <></>
            ) : (
              <div className="project-languages-container">
                {languages.map((lang) => (
                  <h4 className="project-language" key={lang}>
                    {lang}
                  </h4>
                ))}
              </div>
            )}

            {classComponent === '' ? (
              <></>
            ) : (
              <ul className="project-technologies-technologies">
                {technologies.map((tech) => (
                  <li className="project-technology" key={tech}>
                    <div className="dot" />
                    {tech}
                  </li>
                ))}
              </ul>
            )}

            {classComponent === '' ? (
              <></>
            ) : (
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
            )}
            {
              classComponent === '' ? (
                <div className="see-more-button-wrapp">
                  <Link
                    to="../project/popUp"
                    className="project-see-more-button"
                    onClick={() => dispatch(setCurrentProject(project))}
                  >
                    See more
                  </Link>
                </div>
              )
                : (<></>)
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
