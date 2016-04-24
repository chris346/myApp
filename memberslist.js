import React from 'react';
import Member from './member';

export default class MembersList extends React.Component {

  constructor() {
    super();
    this.state = {
      search: ''
    };
  }
updateSearch(event) {
  this.setState({search: event.target.value.substr(0,20)});
}

render() {
  let filteredMembers = this.props.members.filter(
    (member) => {
      return member.name.toLowerCase().indexOf(this.state.search) !==  -1;
    }
  );
  return (
    <div>
      <input type="type"
        value={this.state.search}
        onChange={this.updateSearch.bind(this)}/>
      <ul>
        {filteredMembers.map((member)=> {
          return <Member member={member} key={member.id}/>
        })}
      </ul>
    </div>
  )
}
}
