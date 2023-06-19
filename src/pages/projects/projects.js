import React, { useState, useEffect, useRef } from 'react';
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import Project from './project';
import { setPageInView } from '../../redux/componetInView';
import useIsInViewport from '../../reusables/checkInViewwPort/checkInViewPort';
import projectsList from '../../data/projects_list';
import RecentProject from '../recent_projects/RecentProject';
import './projects.css';

const Projects = () => {
  const dispatch = useDispatch();
  const projectsLis = projectsList();

  const imagesContainerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(null);
  const [scrollTo, setScrollTo] = useState(1);

  const [activekey, setActiveKey] = useState(1);
  const [startX, setStartX] = useState(0);
  const [endX, setEndX] = useState(0);

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
  };

  const handlePreviousCard = () => {
    if (activekey > 1) {
      setActiveKey(activekey - 1);
    }
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

  const handleDragStart = (event) => {
    setStartX(event.clientX);
  };

  const handleDrag = () => { };
  //   // const dragged = event.clientX - startX;
  //   // const absDragged = Math.sqrt(dragged * dragged);
  //   // if (dragged < 1 && dragged >= -50) {
  //   //   setSize2L(80 + (40 * (absDragged / 50)));
  //   //   setSize3L(60 + (40 * (absDragged / 50)));
  //   //   setSize2R(80 - (40 * (absDragged / 50)));
  //   //   setSize3R(60 - (40 * (absDragged / 100)));
  //   // } else if (dragged > 1 && dragged <= 50) {
  //   //   setSize2L(80 - (40 * (absDragged / 50)));
  //   //   setSize3L(60 - (40 * (absDragged / 50)));
  //   //   setSize2R(80 + (40 * (absDragged / 50)));
  //   //   setSize3R(60 + (40 * (absDragged / 50)));
  //   // }
  //   // setPosition(`calc(10% + ${dragged}px)`);
  // };

  const handleDragEnd = (event) => {
    setEndX(event.clientX);
    // setPosition('10%');
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

  useEffect(() => {
    setContainerWidth(imagesContainerRef.current.offsetWidth);
  }, []);

  if (scrollTo !== activekey) {
    if (imagesContainerRef.current) {
      imagesContainerRef.current.scrollTo({
        top: 0,
        left: (activekey - 1) * containerWidth * 1.03,
        behavior: 'smooth',
      });
      setScrollTo(activekey);
    }
  }

  return (
    <div className="projects_container" id="projects" ref={ref1}>
      <RecentProject />
      <div className="last-projects-container">
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

          <div className="projects-lister" ref={imagesContainerRef}>
            {
              projectsLis.map((project, key) => (
                <Project
                  project={project}
                  classComponent={assignClass(key + 1)}
                  key={project.name}
                  style={{
                    height: '100%',
                    // left: `${position}`,
                  }}
                  languageKey={language.languageKey}
                />
              ))
            }
          </div>

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
      <div className="projects-wrapper-mobile">
        {
          projectsLis.map((project) => (
            <Project
              project={project}
              classComponent=""
              style={{}}
              languageKey={language.languageKey}
              key={project.project_name}
            />
          ))
        }
      </div>

    </div>
  );
};

export default Projects;
