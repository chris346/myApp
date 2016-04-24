import Header from './modules/headers/header.js';
import Card from './modules/cards/card.js';
import Footer from './modules/footers/footer.js';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import { Header, Card, Footer } from './modules';

export default class Main extends Component {
  render(){
    return (
      <div>
        <Header title={'Abunai MMA'} />

      </div>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById('main'));
