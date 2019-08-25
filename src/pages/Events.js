// Libraries
import React, { Component } from 'react';
import axios from 'axios';

// Styles
import EventCategory from '../containers/Events/EventCategory';

class Events extends Component {
  state = {
    events: ''
  };

  componentDidMount() {
    axios.get('http://localhost:4000/event').then(res => {
      this.setState({ events: res.data.payload });
    });
  }

  render() {
    return (
      <div>
        {this.state.events && <EventCategory events={this.state.events} />}
      </div>
    );
  }
}

export default Events;
