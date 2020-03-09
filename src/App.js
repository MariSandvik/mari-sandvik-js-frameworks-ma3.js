import React from 'react';
import logo from './logo.svg';
import Heading from "./components/layout/Heading";
import './App.css';

function App() {
  return (
    <div className="App">
      <Heading title="Title from prop" subtitle="Subtitle from prop" />
      <header className="App-header">
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
