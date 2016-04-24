import React from 'react';

class Member extends React.Component {
  render() {
    return (
      <li>
        {this.props.member.avatar} {this.props.member.name} {this.props.member.phone}
      </li>
    )
  }
}

export default Member;
