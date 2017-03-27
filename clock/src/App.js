import React, { Component } from 'react';
import NavBar from './NavBar.js';
import Counter from './Counter.js';
import Clock from './Clock.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar title={'my header test'} />
        <Counter />
        <Clock />
      </div>
      
    );
  }
}

export default App;
