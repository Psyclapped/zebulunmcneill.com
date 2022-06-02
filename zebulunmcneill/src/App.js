import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>GREETINGS, TRAVELLER</h1>
        <div className="two-columns">
          <div className="left">
            <p>
              <span className="big-letter">A</span>bout me
            </p>
            <h2>I'm a full-stack software engineer.</h2>
            <p>I'm a web developer that's currently based out in Texas.
              I have a passion for development, and love creating
              content for the web.</p>
            <p>
            </p>
          </div>
          <div className="right">
            <img src="headshot.jpg" alt="headshot" className="headshot" />
          </div>
        </div>
        <div className="portfolio-grid">
          <div className="portfolio-grid-item">
            <h3>App Academy Times</h3>
            <a href="https://appacademytimes.com/" target="_blank"><img src="aatimes.png"></img></a>
          </div>
          <div className="portfolio-grid-item">
            <h3>Bionic Reading</h3>
            <a href="https://github.com/Psyclapped/bionicReading" target="_blank"><img src="bionicreading.png"></img></a>
          </div>
          <div className="portfolio-grid-item">
            <h3>Coding Foundation</h3>
            <a href="https://codingfoundation.org/" target="_blank"><img src="codingfoundation.png"></img></a>
          </div>
          <div className="portfolio-grid-item">
            <h3>Indeed Auto Apply</h3>
            <a href="https://github.com/Psyclapped/indeedAutoApply" target="_blank"><img src="indeedautoapply.png"></img></a>
          </div>
          <div className="portfolio-grid-item">
            <h3>OtterQuest</h3>
            <a href="https://store.steampowered.com/app/1857220/OtterQuest/" target="_blank"><img src="otterquest.png"></img></a>
          </div>
          <div className="portfolio-grid-item">
            <h3>Skryblr</h3>
            <a href="https://skryblr.com/" target="_blank"><img src="skryblr.png"></img></a>
          </div>
          <div className="portfolio-grid-item">
            <h3>SolScape</h3>
            <a href="https://solscape.vercel.app/" target="_blank"><img src="solscape.png"></img></a>
          </div>
          <div className="portfolio-grid-item">
            <h3>Sphynx Ink</h3>
            <a href="https://sphynxink.com/" target="_blank"><img src="sphynxink.png"></img></a>
          </div>
        </div>
        <div className="contactGrid">
          <div className="contact-grid-item">
            <a href="https://www.linkedin.com/in/zebulun-mcneill/" target="_blank"><img src="linkedin.png"></img></a>
          </div>
          <div className="contact-grid-item">
            <a href="https://twitter.com/psyclapped" target="_blank"><img src="twitter.png"></img></a>
          </div>
          <div className="contact-grid-item">
            <a href="mailto:zeb.mcn@gmail.com?subject=I want to hire you&body=You're literally a unicorn developer with full-stack engineering skills, some experience in Web3.0, and a decent sense of humor, and I think you'd make an excellent addition to my team. Let's do an $80,000/yr base salary plus benefits with a 100% remote position. Can you start next Monday?" target="_blank" rel="noopener noreferrer"><img src="gmail.png"></img></a>
          </div>
          <div className="contact-grid-item">
            <a href="https://github.com/Psyclapped" target="_blank"><img src="github.png"></img></a>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
