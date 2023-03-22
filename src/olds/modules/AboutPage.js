import React from 'react';
import '../styles/about.css';

function AboutPage() {
  return (
    <section className="about" id="about">
      <h2 className="about_title">About me</h2>
      <p>
        Hello I’am a software developer! I can help you build a product ,
        feature or website Look through some of my work and experience! If you
        like what you see and have a project you need coded, don’t hestiate to
        contact me.
      </p>
      <a
        href="./documents/CamileResume.pdf"
        download="camile's Resume.pdf"
      >
        Get My Resume
      </a>
      <div className="skills">
        <ul>
          <li><h3 className="skills_h3">Languages</h3></li>
          <li>Javascript</li>
          <li>Ruby</li>
          <li>React</li>
          <li>Redux</li>
          <li>MySQL</li>
          <li>Html</li>
          <li>CSS</li>
          <li>Postgress</li>
          <li>Css</li>
        </ul>
        <ul>
          <li><h3 className="skills_h3">Frameworks</h3></li>
          <li>Bootstrap</li>
          <li>Ruby on Rails</li>
          <li>Rspec</li>
          <li>Capybara</li>
          <li>Selenium</li>
        </ul>
        <ul>
          <li><h3 className="skills_h3">Skills</h3></li>
          <li>CodeKit</li>
          <li>Github</li>
          <li>Codepen</li>
          <li>GitLab</li>
          <li>Terminal</li>
        </ul>
      </div>
    </section>
  );
}

export default AboutPage;
