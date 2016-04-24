import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Card extends Component{
  render(){
    return (
      <div>
        <h1>{this.props.title}</h1>
      </div>
    )
  }
}

ReactDOM.render(<Card/>, document.getElementById('card'));
