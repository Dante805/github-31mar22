import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
	<img src="../reactapp/image" className="img" alt="img"/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         INCOMING MESSAGE
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
