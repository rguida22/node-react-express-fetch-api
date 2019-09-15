import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Customers from './components/customers/customers';

function App() {
  return (
    <div className="App">
      <header className="">
        <p>Edit <code>src/App.js</code> and save to reload.</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Customers />
    </div>
  );
}

export default App;
