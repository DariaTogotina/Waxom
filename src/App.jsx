import React, { Component } from 'react';
import './App.css';
import Header from './header/header.js';
import Services from './services/services.js';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        <Services />
      </div>
    );
  }
}

export default App;
