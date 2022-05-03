import logo from './logo.svg';
import './App.css';
import Navi from './Navi';
import Blurb from './Blurb';
import Contact from './Contact';
import Portfolio from './Portfolio';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navi />
      </header>
      <Blurb />
      <Contact />
      <Portfolio />
    </div>
  );
}

export default App;
