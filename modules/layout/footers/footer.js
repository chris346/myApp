import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Footer extends Component{
  render(){
    return (
      <div>
        <h1>{this.props.title}</h1>
      </div>
    )
  }
}

ReactDOM.render(<Footer/>, document.getElementById('footer'));
