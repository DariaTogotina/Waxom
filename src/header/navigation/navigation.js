import React, { Component } from 'react';
import './navigation.css';
import logo from "../../img/logo.png"
import calendar from "../../img/calendar.png"
import search from "../../img/search.png"

class Navigation extends Component {

  render() {
    return (
      <div className="navigation">
        <div className="container">
        	<div className="row">
        		<div className="col-md-2"><img className="triangle" src={logo} /></div>
        		<div className="col-md-1"></div>
        		<ul className="nav">
		        	<li className="col-md-1"><a href="#">Home</a></li>
		        	<li className="col-md-1"><a href="#">About us</a></li>
		        	<li className="col-md-1"><a href="#">Portfolio</a></li>
		        	<li className="col-md-1"><a href="#">Features</a></li>
		        	<li className="col-md-1"><a href="#">Blog</a></li>
		        	<li className="col-md-1"><a href="#">Pricing</a></li>
		        	<li className="col-md-1"><a href="#">Shortcodes</a></li>
		        	<li className="col-md-1"><a href="#">Contacts</a></li>
		        </ul>
        		<div className="col-md-1" className="icons">
        			<a href="#"><img className="calendar" src={calendar} /></a>
        			<a href="#"><img className="search" src={search} /></a>
        		</div>
        	</div>
        </div>
      </div>
    );
  }
}

export default Navigation;
