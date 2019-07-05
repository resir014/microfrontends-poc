import * as React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    //
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={`http://localhost:3001${logo}`} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
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
}

export default App;
