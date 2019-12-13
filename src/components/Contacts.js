import React, {Component} from 'react';
import SingleContact from './SingleContact';
import AddContacts from './AddContacts';

export default class Contacts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
    }
  }

  // fetch Data from server before component renders
  componentDidMount() {
    fetch('http://localhost:8080/api/contacts')
    .then(response => response.json())
    .then(data => this.setState({contacts: data}))
  }

  render() {
    return (
      <div>
        <div className="row">
          <AddContacts />
        </div>
        <div className="row">
          {/* iterate through contacts-array */}
          { this.state.contacts.map((item, index) => (
            <SingleContact key={index} item={item}/>
          ))}
        </div>
      </div>
    )
  }
}