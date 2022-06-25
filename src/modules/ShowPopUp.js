import { useEffect, useState } from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom/client';

function ShowPopUp(index) {
  const [projectData, setProjectsData] = useState([]);
  const [indexImg, setIndexImg] = useState(0);

  useEffect(() => {
    axios.get('https://camilux-portfolio-server.herokuapp.com/getAllProjects')
      .then((res) => {
        const { projects } = res.data;
        console.log(projects);
        setProjectsData(projects);
      });
  }, []);

  const { title } = projectData[index];
  const pictureUrl = projectData[index].picture;
  const { urlScreenSht } = projectData[index];
  const { shortDescription } = projectData[index];
  const { urlPic2 } = projectData[index];
  const { releasesDate } = projectData[index];
  const { longDescription } = projectData[index];
  const { liveLink } = projectData[index];
  const { codeLink } = projectData[index];

  const imagesArray = [pictureUrl, urlPic2, urlScreenSht];

  const root = ReactDOM.createRoot(document.getElementById('root'));

  //     root.append(
  //     <div className='popUp'>
  //     <h2>${title}</h2>
  //     <img src={imagesArray[indexImg]} alt='' className='imgPopUp'/>
  //     <button onClick={() => {setIndexImg(indexImg + 1)}}>See next</button>
  //     <div className='divDescription'>
  //         <div className='description'>
  //             ${longDescription}
  //         </div>
  //     </div>
  //     <a href={liveLink}>See live</a>
  //     <a href={codeLink}>See project</a>
  //     <span>posted on:{releasesDate}</span>

  //    </div>
  //    )
  return (
    <></>
  );
}

export default ShowPopUp;
