import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <NavBar />  
      <h1>No tengo aun la idea de la App</h1>
        <h2>mi nombre es Alexis Pastore</h2>
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
      </header>
    </div>
  );
}

export default App;
