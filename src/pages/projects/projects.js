import React, { useState, useRef } from 'react';
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import Project from './project';
import { setPageInView } from '../../redux/componetInView';
import useIsInViewport from '../../reusables/checkInViewwPort/checkInViewPort';
import projectsList from '../../data/projects_list';
import './projects.css';

const Projects = () => {
  const dispatch = useDispatch();
  const projectsLis = projectsList();
  const [projectKey, setProjectKey] = useState(0);
  const language = useSelector((state) => state.languageReducer);
  const nextProject = () => {
    if (projectKey + 1 < projectsLis.length) {
      setProjectKey(projectKey + 1);
    }
  };

  const previousProject = () => {
    if (projectKey - 1 >= 0) {
      setProjectKey(projectKey - 1);
    }
  };

  document.onkeydown = (e) => {
    e = e || window.event;
    if (e.keyCode === 39 || e.keyCode === '39') {
      nextProject();
    } else if (e.keyCode === 37 || e.keyCode === '37') {
      previousProject();
    }
  };
  const pageInView = useSelector((state) => state.pageInViewReducer);
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const isInViewport1 = useIsInViewport(ref1);
  // const isDotsInViewPort = useIsInViewport(ref2);

  const {
    projects,
  } = pageInView;

  if (isInViewport1 && !projects) {
    dispatch(setPageInView({
      state: true,
      page: 'projects',
    }));
  } else if (!isInViewport1 && projects) {
    dispatch(setPageInView({
      state: false,
      page: 'projects',
    }));
  }

  return (
    <div className="projects_container" id="projects" ref={ref1}>
      <div className="project-back-blur" />
      <h2 className="my-projects-title">
        {
        language.languageKey === 0 ? 'My Projects' : 'Mes Projets'
      }
      </h2>
      <Project project={projectsLis[projectKey]} />
      <div className="image-slider-buttons-wrapper">
        <div>
          <button className="project-next-button previous-project" onClick={previousProject}>
            <FaAngleLeft />
          </button>
          <button className="project-next-button next-project" onClick={nextProject}>
            <FaAngleRight />
          </button>
        </div>
      </div>

      <div className="image-sliders-dots-wrap" ref={ref2}>
        {projectsLis.map((image, id) => (
          <div
            className={
              id === projectKey
                ? 'image-slider-dots current-dot'
                : 'image-slider-dots'
            }
            onClick={() => setProjectKey(id)}
            key={image}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
