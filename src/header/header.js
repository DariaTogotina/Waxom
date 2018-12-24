import React, { Component } from 'react';
import './header.css';
import Navigation from './navigation/navigation.js'
import Slider from './slider/slider.js'

class Header extends Component {

  render() {
    return (
      <div className="header">
        <Navigation />
        <Slider />
      </div>
    );
  }
}

export default Header;
