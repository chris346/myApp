import Header from './modules/layout/headers/header.js';
import Card from './modules/layout/cards/card.js';
import Footer from './modules/layout/footers/footer.js';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import { Header, Card, Footer } from './modules';

export default class Main extends Component {
  render(){
    return (
      <div>
        <Header title={'Abunai MMA header'} />
        <Card title={'Students Card'} />
        <Footer title={'Abuanai MMA footer'} />
      </div>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById('main'));
