import React from "react";
import ImageSilder from "../../reusables/images_slider/ImageSilder";
import "./projects.css";
import splashImg from "../../images/splash-img.png";
import img1 from "../../images/pngwing.com(11).png";
import img2 from "../../images/pngwing.com(12).png";
import img3 from "../../images/pngwing.com(13).png";
import img4 from "../../images/pngwing.com(14).png";

const Projects = () => {
  const imgArray = [splashImg, img1, img2, img3, img4];
  const sapmleLanguages = ['HTML', 'CSS', 'REACT', 'RUBY'];

  return (
    <div className="projects_container">
      <div className="project-wrapper">
        <div className="project-dark-backround" />
        <div className="project-image-container">
          {/* <img src={splashImg} alt="" className="project-image"/> */}
          <ImageSilder imagesArray={imgArray} />
        </div>
        <div className="project-description">
          <h2 className="project-title">{"> "}Project Name</h2>
          <p className="project-description-paragraph">
            Maven’s pioneering virtual care model is built around women and
            families, delivering better outcomes and lower costs for everyone.
            families, delivering better outcomes and lower costs for everyone.
          </p>
          <div>
            <div className="project-languages-container">
            {
                sapmleLanguages.map((lang) => (
                    <h4 className="project-language">{lang}</h4>
                ))
            }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
