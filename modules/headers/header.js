import React, { Component } from 'react';
import ReactDOM from 'react-dom';


export default class Header extends Component{
  render(){
    return (
      <div>
        <h1>{this.props.title}</h1>
      </div>
    );
  }
}

ReactDOM.render(<Header />, document.getElementById('header'));
