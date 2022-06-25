import React, { useState } from 'react';
import projectsList from './projectsList';
import '../styles/getProjects.css';

function GetProjects() {
  const [projectData] = useState(projectsList);
  const [indexImg, setIndexImg] = useState(0);
  const [popUpData, setPopUpData] = useState({});
  const [showed, setShowed] = useState(true);

  //   useEffect(() => {
  //     axios.get(`https://camilux-portfolio-server.herokuapp.com/getAllProjects`)
  //     .then(res => {
  //       const projects = res.data.projects;
  //       console.log(projects)
  //       setAllProjects(projects);
  //       setProjectsData(projects);
  //     });
  //   },[])

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
  return (
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
              <img src={project.pictureUrl} alt="" className="imgProject" />
              <p className="short_description">{project.shortDescription}</p>
              <a href={project.liveLink}>See live</a>
              <a href={project.codeLink}>See project</a>
              <button onClick={() => { PopUp(key); }} id={`buttonPop${key}`}>
                See details
              </button>
            </div>
          );
        })
        }
      <div id="popUp" style={{ display: showed ? 'none' : 'block' }}>

        <h2>
          $
          {popUpData.title}
        </h2>
        <button onClick={hidePopUp}>hidePopUp</button>
        <img src={popUpImage()} className="imgPopUp" />
        <button onClick={() => assignPopUpImg('left')}>See preview</button>
        <button onClick={() => assignPopUpImg('right')}>See next</button>
        <div className="divDescription">
          <div className="description">
            $
            {popUpData.longDescription}
          </div>
        </div>
        <a href={popUpData.liveLink}>See live</a>
        <a href={popUpData.codeLink}>See project</a>
        <span>
          posted on:
          {popUpData.releasesDate}
        </span>

      </div>
    </div>
  );
}

export default GetProjects;
