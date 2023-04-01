import React, { useState, useRef } from 'react';
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import Project from './project';
import { setPageInView } from '../../redux/componetInView';
import useIsInViewport from '../../reusables/checkInViewwPort/checkInViewPort';
import projectsList from '../../data/projects_list';
import { resetImageShown } from '../../redux/imageReducer';
import './projects.css';

const Projects = () => {
  const dispatch = useDispatch();
  const projectsLis = projectsList();

  const [activekey, setActiveKey] = useState(1);
  const [startX, setStartX] = useState(0);
  const [endX, setEndX] = useState(0);
  const [size2L, setSize2L] = useState(80);
  const [size3L, setSize3L] = useState(60);
  const [size2R, setSize2R] = useState(80);
  const [size3R, setSize3R] = useState(60);
  const [position, setPosition] = useState('10%');

  const language = useSelector((state) => state.languageReducer);
  const ref1 = useRef(null);
  const ref2 = useRef(null);

  const pageInView = useSelector((state) => state.pageInViewReducer);
  const isInViewport1 = useIsInViewport(ref1);
  const isDotsInViewPort = useIsInViewport(ref2);

  const { projects } = pageInView;

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

  const handleNextCard = () => {
    if (activekey < projectsLis.length) {
      setActiveKey(activekey + 1);
    }
    dispatch(resetImageShown(0));
  };

  const handlePreviousCard = () => {
    if (activekey > 1) {
      setActiveKey(activekey - 1);
    }
    dispatch(resetImageShown(0));
  };

  const assignClass = (key) => {
    if (key === activekey) {
      return 'activeCard';
    } if (key === activekey + 1) {
      return 'secondActive right-card';
    } if (key === activekey - 1) {
      return 'secondActive left-card';
    } if (key === activekey + 2) {
      return 'thirdActive right-card2';
    } if (key === activekey - 2) {
      return 'thirdActive left-card2';
    }
    return 'hidden-card';
  };

  const assignSize = (key) => {
    if (key === activekey) {
      return 300;
    } if (key === activekey + 1) {
      return size2L;
    } if (key === activekey - 1) {
      return size2R;
    } if (key === activekey + 2) {
      return size3L;
    } if (key === activekey - 2) {
      return size3R;
    }
    return 0;
  };

  const handleDragStart = (event) => {
    setStartX(event.clientX);
  };

  const handleDrag = (event) => {
    const dragged = event.clientX - startX;
    const absDragged = Math.sqrt(dragged * dragged);
    if (dragged < 1 && dragged >= -50) {
      setSize2L(80 + (40 * (absDragged / 50)));
      setSize3L(60 + (40 * (absDragged / 50)));
      setSize2R(80 - (40 * (absDragged / 50)));
      setSize3R(60 - (40 * (absDragged / 100)));
    } else if (dragged > 1 && dragged <= 50) {
      setSize2L(80 - (40 * (absDragged / 50)));
      setSize3L(60 - (40 * (absDragged / 50)));
      setSize2R(80 + (40 * (absDragged / 50)));
      setSize3R(60 + (40 * (absDragged / 50)));
    }
    setPosition(`calc(10% + ${dragged}px)`);
  };

  const handleDragEnd = (event) => {
    setSize2L(80);
    setSize3L(60);
    setSize2R(80);
    setSize3R(60);
    setEndX(event.clientX);
    setPosition('10%');
    const distance = endX - startX;
    if (distance > 100) {
      handlePreviousCard();
    } else if (distance < -100) {
      handleNextCard();
    }
  };

  document.onkeydown = (e) => {
    e = e || window.event;
    if (e.keyCode === 39 || e.keyCode === '39') {
      if (isDotsInViewPort) {
        handleNextCard();
      }
    } else if (e.keyCode === 37 || e.keyCode === '37') {
      if (isDotsInViewPort) {
        handlePreviousCard();
      }
    }
  };

  return (
    <div className="projects_container" id="projects" ref={ref1}>
      <div className="project-back-blur" />
      <h2 className="my-projects-title">
        {
        language.languageKey === 0 ? 'My Projects' : 'Mes Projets'
      }
      </h2>
      <div
        onDragStart={handleDragStart}
        onDrag={handleDrag}
        onDragEnd={handleDragEnd}
        className="project-wrapp-slider"
      >
        {
          projectsLis.map((project, key) => (
            <Project
              project={project}
              classComponent={assignClass(key + 1)}
              style={activekey === key + 1
                ? {
                  height: `${assignSize(key + 1)}%`,
                  left: `${position}`,
                }
                : { height: `${assignSize(key + 1)}%` }}
              key={project.name}
              languageKey={language.languageKey}
            />
          ))
        }
      </div>
      <div className="projects-wrapper-mobile">
        {
          projectsLis.map((project, key) => (
            <Project
              project={project}
              classComponent=""
              style={{}}
              languageKey={language.languageKey}
            />
          ))
        }
      </div>

      <div className="image-slider-buttons-wrapper">
        <div>
          <button
            className={activekey === 1
              ? 'project-next-button previous-project locked'
              : 'project-next-button previous-project'}
            onClick={handlePreviousCard}
          >
            <FaAngleLeft />
          </button>
          <button
            className={activekey === projectsLis.length
              ? 'project-next-button next-project locked'
              : 'project-next-button next-project'}
            onClick={handleNextCard}
          >
            <FaAngleRight />
          </button>
        </div>
      </div>

      <div className="image-sliders-dots-wrap" ref={ref2}>
        {projectsLis.map((image, id) => (
          <div
            className={
              id + 1 === activekey
                ? 'image-slider-dots current-dot'
                : 'image-slider-dots'
            }
            onClick={() => setActiveKey(id + 1)}
            key={image}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
