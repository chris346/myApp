import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Card extends Component{
  render(){
    return <h1>Card</h1>
  }
}

ReactDOM.render(<Card/>, document.getElementById('card'));
