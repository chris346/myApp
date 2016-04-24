import Header from './modules/layout/headers/header.js';
import Card from './modules/layout/cards/card.js';
import Footer from './modules/layout/footers/footer.js';
import MembersList from './memberslist.js';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

let members = [{
  id: 1,
  name: 'Chris',
  phone: '555 555 5555',
  avatar: 'avatar'
}, {
  id: 2,
  name: 'Blair',
  phone: '555 555 5555',
  avatar: 'avatar'
}, {
  id: 3,
  name: 'Quincy',
  phone: '555 555 5555',
  avatar: 'avatar'
}, {
  id: 4,
  name: 'Denney',
  phone: '555 555 5555',
  avatar: 'avatar'
}, {
  id: 5,
  name: 'Isi',
  phone: '555 555 5555',
  avatar: 'avatar'
}, {
  id: 6,
  name: 'Leo',
  phone: '555 555 5555',
  avatar: 'avatar'
}]

export default class Main extends Component {
  render(){
    return (
      <div>
        <Header title={'Abunai MMA header'} />
        <Card title={'Students Card'} />
        <Footer title={'Abuanai MMA footer'} />
        <MembersList members={this.props.members} />
      </div>
    );
  }
}

ReactDOM.render(<Main members={members} />, document.getElementById('main'));
