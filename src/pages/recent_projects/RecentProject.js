import React from "react";
import oasis1 from "../../images/projects/oasis/oasis1.png";
import oasis2 from "../../images/projects/oasis/oasis2.png";
import oasis3 from "../../images/projects/oasis/oasis3.png";
import oasis4 from "../../images/projects/oasis/oasis4.png";
import oasis5 from "../../images/projects/oasis/oasis5.png";
import oasis6 from "../../images/projects/oasis/oasis6.png";
import ImageSilder from "../../reusables/images_slider/ImageSilder";
import "./RecentProject.css";

const RecentProject = () => {
  const data = {
    id: 1,
    project_name: "Oasis App",
    imgArray: [oasis1, oasis2, oasis3, oasis4, oasis5, oasis6],
    description:
      "An online store with all the tools you need to build, manage, n\
              and grow your business. Ecwid store in minutes with shipping, tax, payment, n\
              advertising options ready. Always Free Plan. Lightning Fast. Seamless Upgrades.n\
              Existing Site Integration.",
    languages: ["REACT", "REDUX", "RUBY on RAILS"],
    technologies: ["Docker", "UX Design", "Cloudinary", "Stripe"],
    live_link: "https://scandi-e-store.netlify.app/",
    project_link: "https://github.com/camilevahviraki/scandi-e-store",
  };

  return (
    <div className="recent_project" id="recent_project">
      <h2 className="my-projects-title">Recent Project</h2>
      <div className="recent_project_wrapp">
        <div className="recent_project_image_wrapp">
          <ImageSilder imagesArray={data.imgArray}/>
        </div>
        <div className="recent_project_description_wrapp">
            
        </div>
      </div>
    </div>
  );
};

export default RecentProject;
