import React, { useState } from 'react';
// import { useDispatch} from 'react-redux';
import projectsList from './projectsList';
import '../styles/getProjects.css';
import codeIcon from '../images/GithubPopUp.png';
import liveIcon from '../images/IconLivePopUp.png';

function GetProjects() {
  const [projectData] = useState(projectsList);
  const [indexImg, setIndexImg] = useState(0);
  const [popUpData, setPopUpData] = useState({});
  const [showed, setShowed] = useState(true);

  const PopUp = (index) => {
    const { title } = projectData[index];
    const { pictureUrl } = projectData[index];
    const { urlScreenSht } = projectData[index];
    const { shortDescription } = projectData[index];
    const { urlPic2 } = projectData[index];
    const { releasesDate } = projectData[index];
    const { longDescription } = projectData[index];
    const { liveLink } = projectData[index];
    const { codeLink } = projectData[index];
    const imagesArray = [pictureUrl, urlPic2, urlScreenSht];

    const popUpDataR = {
      title,
      imagesArrayR: imagesArray,
      longDescription,
      liveLink,
      codeLink,
      releasesDate,
    };
    setPopUpData(popUpDataR);
    setShowed(!showed);
  };

  const assignPopUpImg = (side) => {
    if (side === 'right') {
      if (indexImg < 2 && popUpData.imagesArrayR[indexImg + 1]) {
        setIndexImg(indexImg + 1);
      } else {
        setIndexImg(0);
      }
    } if (side === 'left') {
      if (indexImg > 0 && popUpData.imagesArrayR[indexImg - 1]) {
        setIndexImg(indexImg - 1);
      } else if (popUpData.imagesArrayR[2].length > 0) {
        setIndexImg(2);
      } else {
        (
          setIndexImg(1)
        );
      }
    }
  };

  const hidePopUp = () => {
    setIndexImg(0);
    setShowed(!showed);
  };

  const popUpImage = () => {
    if (popUpData.imagesArrayR === undefined) {
      return '';
    }
    return popUpData.imagesArrayR[indexImg];
  };

  const style1 = {
    filter: 'blur(8px)',
    pointerEvents: 'none',
  };
  const style2 = {
    filter: 'none',
  };
  return (
    <section className="mainProjectList" id="projects">
      <div style={showed ? style2 : style1}>
        <h2 className="my_works_title">My Recents Works</h2>
        <div className="getProjects">
          {
        projectData.map((project, key) => {
          const assignColor = () => {
            if (key % 2 === 0) {
              return 'blue';
            } if (key % 3 === 0 || key % 3 === 2) {
              return 'green';
            } if (key % 5 === 0 || key % 7 === 0) {
              return 'purple';
            }
            return 'pink';
          };
          return (
            <div className="project" id={assignColor()}>
              <h3 className="title_card">{project.title}</h3>
              <div className="img_container">
                <img src={project.pictureUrl} alt="" className="imgProject" />
              </div>
              <p className="short_description">{project.shortDescription}</p>
              <a href={project.liveLink} className="button_link">See live</a>
              <a href={project.codeLink} className="button_link">See project</a>
              <button
                onClick={() => { PopUp(key); }}
                id={`buttonPop${key}`}
                className="button_details"
              >
                See details
              </button>
            </div>
          );
        })
        }
        </div>
      </div>

      <div id="popUp" style={{ display: showed ? 'none' : 'flex' }}>

        <div className="ImageContainer">
          <div className="titleAndButton">
            <button onClick={hidePopUp} className="hidePopUp">X</button>
            <h2 className="popUpTitle">
              {popUpData.title}
            </h2>
          </div>

          <div className="imgPopUpContainer">
            <img src={popUpImage()} className="imgPopUp" />
          </div>
          <button className="imgBtn" onClick={() => assignPopUpImg('left')}>Prev</button>
          <button className="imgBtn" onClick={() => assignPopUpImg('right')}>Next</button>
        </div>
        <div className="divDescription">
          <p className="description">
            {popUpData.longDescription}
          </p>
          <a href={popUpData.liveLink} className="codeLinks">
            See live
            <img src={codeIcon} alt="" />
          </a>
          <a href={popUpData.codeLink} className="codeLinks">
            See project
            <img src={liveIcon} alt="" />
          </a>
          <span id="date">
            posted on:
            {popUpData.releasesDate}
          </span>
        </div>

      </div>

    </section>
  );
}

export default GetProjects;
