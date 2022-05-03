import logo from './logo.svg';
import './App.css';
import Navi from './Navi';
import Blurb from './Blurb';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navi />
      </header>
      <Blurb />
    </div>
  );
}

export default App;
