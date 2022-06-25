import './App.css';
import video1 from './video/background loop.mp4';
import WrapChat from './modules/wrapChat';
import TryAsync from './modules/TryAsync';
import GetProjects from './modules/getProjects';

function App() {
  return (
    <div className="App">

      <TryAsync />
      <video autoPlay loop muted>
        <source src={video1} type="video/mp4" />
      </video>
      <GetProjects />
    </div>
  );
}

export default App;
