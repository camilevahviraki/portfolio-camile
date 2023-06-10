import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Intro from './pages/intro/Intro';
import Projects from './pages/projects/projects';
import Services from './pages/services/services';
import About from './pages/about/about';
import GetInTouch from './pages/getInTouch/getInTouch';
import Footer from './pages/footer/footer';
import Header from './pages/header/header';
import { showFooter } from './redux/showFooter';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const appPage = useRef(null);
  const showFooterState = useSelector((state) => state.footerReducer);
  const pageInView = useSelector((state) => state.pageInViewReducer);
  const {
    intro,
    services,
    projects,
    about,
    contact,
  } = pageInView;

  if (intro && services && showFooterState.state) {
    dispatch(showFooter({ state: false }));
  } else if (projects && services && showFooterState.state) {
    dispatch(showFooter({ state: false }));
  } else if (about && projects && showFooterState.state) {
    dispatch(showFooter({ state: false }));
  } else if (about && contact && !projects && !showFooterState.state) {
    dispatch(showFooter({ state: true }));
  }

  // if (appPage.current) {
  //   appPage.current.scrollTo({
  //     top: 0,
  //     left: (activekey - 1) * containerWidth * 1.03,
  //     behavior: 'smooth',
  //   });
  //   setScrollTo(activekey);
  // }

  return (
    <div className="App" ref={appPage}>
      <Intro />
      <Services />
      <Projects />
      <About />
      <GetInTouch />
      <Footer />
      <Header />
    </div>
  );
}

export default App;
