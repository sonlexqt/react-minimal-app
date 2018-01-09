import React, { Component } from 'react';
import Contacts from './Contacts.jsx';
import SlideShow from './SlideShow.jsx';

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
        <SlideShow>
          <img src="http://placekitten.com/300/200" alt="Cat Pic" />
          <img src="http://placekitten.com/300/201" alt="Cat Pic" />
          <img src="http://placekitten.com/300/202" alt="Cat Pic" />
        </SlideShow>
        <Contacts contacts={contacts} />
      </div>
    );
  }
}

export default App;