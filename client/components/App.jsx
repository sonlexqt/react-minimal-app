import React, { Component } from 'react';
import Contacts from './Contacts.jsx';

class App extends Component {
  state = { contacts: [] }
  componentDidMount() {
    fetch('https://randomuser.me/api/?results=10')
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          contacts: data.results,
        });
      });
  }
  render() {
    const { contacts } = this.state;
    return (
      <div style={{textAlign: 'center'}}>
        <Contacts contacts={contacts} />
      </div>
    );
  }
}

export default App;