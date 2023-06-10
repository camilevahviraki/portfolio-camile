import React from 'react';
import './RecentProject.css';

const RecentProject = () => {

    const data = {
        id: 1,
        project_name: 'Oasis App',
        imgArray: [scandiImg5, scandiImg1, scandiImg3, scandiImg6],
        description: 'An online store with all the tools you need to build, manage, n\
              and grow your business. Ecwid store in minutes with shipping, tax, payment, n\
              advertising options ready. Always Free Plan. Lightning Fast. Seamless Upgrades.n\
              Existing Site Integration.',
        languages: [
          'REACT',
          'REDUX',
          'GRAPH QL',
        ],
        technologies: [
          'Backend',
          'Frontend',
          'Apolo server',
        ],
        live_link: 'https://scandi-e-store.netlify.app/',
        project_link: 'https://github.com/camilevahviraki/scandi-e-store',
      };
  return (
    <div className="recent_project" id="recent_project">
        <h2 className="my-projects-title">Recent Project</h2>
        <div>

        </div>

    </div>
  )
}

export default RecentProject