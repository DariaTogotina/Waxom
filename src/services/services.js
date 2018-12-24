import React, { Component } from 'react';
import './services.css';
import pen from "../img/pen.svg";
import buter from "../img/buter.svg";
import settings from "../img/settings.svg";
import marketing from "../img/marketing.svg";

class Services extends Component {

  render() {
    return (
      <div className="services">
        <div className="container">
        	<div className="row">
        		<div className="col-md-3">
        			<a href="#"><div className="icon"><img src={pen} /></div>
        			<p className="text">Web & App Design</p>
        			<p className="description">Lorem ipsum dolor sit amet, adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.</p>
        			<div className="border"></div></a>
        		</div>
        		<div className="col-md-3">
        			<a href="#"><div className="icon"><img src={buter} /></div>
        			<p className="text">Development</p>
        			<p className="description">Lorem ipsum dolor sit amet, adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.</p>
        			<div className="border"></div></a>
        		</div>
        		<div className="col-md-3">
        			<a href="#"><div className="icon"><img src={settings} /></div>
        			<p className="text">Web & App Design</p>
        			<p className="description">Lorem ipsum dolor sit amet, adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.</p>
        			<div className="border"></div></a>
        		</div>
        		<div className="col-md-3">
        			<a href="#"><div className="icon"><img src={marketing} /></div>
        			<p className="text">Web & App Design</p>
        			<p className="description">Lorem ipsum dolor sit amet, adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.</p>
        			<div className="border"></div></a>
        		</div>
        	</div>
        </div>
      </div>
    );
  }
}

export default Services;