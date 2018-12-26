import React, { Component } from 'react';
import './App.css';
import Header from './header/header.js';
import Services from './services/services.js';
import Purchase from './purchase/purchase.js';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        <Services />
        <Purchase />
      </div>
    );
  }
}

export default App;
