import logo from './logo.svg';
import './App.css';
import Navi from './Navi';
import Blurb from './Blurb';
import Contact from './Contact';
import Portfolio from './Portfolio';
import BannerImage from './BannerImage';
import BlurbImage from './BlurbImage';
import FolioImage from './FolioImage';
import MoonImage from './MoonImage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navi />
      </header>
      <BannerImage />
      <Blurb />
      <BlurbImage />
      <Contact />
      <FolioImage />
      <Portfolio />
      <MoonImage />
    </div>
  );
}

export default App;
