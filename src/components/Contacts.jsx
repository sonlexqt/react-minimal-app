import React, { Component } from 'react';
import LoaderHOC from '../HOC/LoaderHOC.jsx';

@LoaderHOC('contacts')
class Contacts extends Component {
  render() {
    const { contacts } = this.props;
    return (
      <ul>
        {
          contacts.map((contact) => (
            <li key={contact.email}>
              <p>Name: {contact.name.first} {contact.name.last}</p>
              <img src={contact.picture.thumbnail} alt=""/>
            </li>
          ))
        }
      </ul>
    );
  }
}

export default Contacts;