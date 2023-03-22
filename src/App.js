import './App.css';
import Intro from './pages/about/Intro';
import Projects from './pages/projects/projects';
// import video1 from './video/background loop.mp4';
// import TryAsync from './modules/TryAsync';
// import GetProjects from './modules/getProjects';
// import AboutPage from './modules/AboutPage';
// import Contact from './modules/Contact';
// import Header from './modules/Header';
// import Intro from './modules/Intro';

function App() {
  return (
    <div className="App">
      <Intro/>
      <Projects/>
      {/* <Header />
      <Intro />
      <div className="video-container">
        <TryAsync />
        <video autoPlay loop muted>
          <source src={video1} type="video/mp4" />
        </video>
      </div>
      <GetProjects />
      <AboutPage />
      <Contact /> */}
    </div>
  );
}

export default App;
