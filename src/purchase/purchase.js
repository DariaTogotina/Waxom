import React, { Component } from 'react';
import './purchase.css';


class Purchase extends Component {

  render() {
    return (
      <div className="purchase">
        <div className="container">
        	<div className="row">
        		<div className="col-md-6">
        			<div className="name"><span>Waxom</span> Multipurpose WordPress Theme</div>
        			<div className="text">Don't Forget to Rate the Template. Thanks so much!</div>
        		</div>
        		<div className="col-md-4"></div>
        		<div className="col-md-2">
        			<button>PURCHASE NOW</button>
        		</div>
        	</div>
        </div>
      </div>
    );
  }
}

export default Purchase;