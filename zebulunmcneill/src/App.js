import logo from './logo.svg';
import './App.css';
import Navi from './Navi';
import Blurb from './Blurb';
import Contact from './Contact';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navi />
      </header>
      <Blurb />
      <Contact />
    </div>
  );
}

export default App;
