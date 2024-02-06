import logo from './logo.svg';
import './App.css';
import Login from './components/login';
import Home from './components/home';
import Tracker from './components/tracker';
import Routing from './components/routing';
function App() {
  return (
    <div className='App'>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Routing/>
    </div>
  );
}

export default App;
