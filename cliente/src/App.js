import React, { Component } from 'react';
import './App.css';
import Forms from './components/Forms.js';
import Divs from './components/Divs.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="contenido">
          <Forms/>
          <Divs/>
        </div>
      </div>
    );
  }
}

export default App;
