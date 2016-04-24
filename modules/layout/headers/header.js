import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import classnames from 'classname';

import './_header.scss';

export default class Header extends Component{
  render(){
    return (
      <div>
        <h1 className="myProject--card-title">{this.props.title}</h1>
      </div>
    );
  }
}

ReactDOM.render(<Header />, document.getElementById('header'));
