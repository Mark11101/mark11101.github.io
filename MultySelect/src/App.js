import React from 'react';
import logo from './logo.svg';
import './App.css';
import MultySelect from './MultySelect';
import List from './List';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="App-Component">
          <MultySelect listOfItems={List}/>
        </div>
      </header>
    </div>
  );
}

export default App;
