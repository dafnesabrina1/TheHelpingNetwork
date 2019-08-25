// Libraries
import React, { Component } from 'react';
import axios from 'axios';

// Styles
import HeroSection from '../containers/Event/HeroSection';
import InformationSection from '../containers/Event/InformationSection';

class Event extends Component {
  state = {
    data: '',
    companyData: '',
    participants: ''
  };

  componentDidMount() {
    axios
      .get(`http://localhost:4000/event/1`)
      .then(res => {
        this.setState({ data: res.data });
        console.log(this.state.data);

        axios
          .get(
            `http://localhost:4000/ngo/${this.state.data.payload.properties.organizer_id}`
          )
          .then(secondRes => {
            this.setState({ companyData: secondRes.data });

            console.log(this.state.companyData.properties);

            axios
          .get(`http://localhost:4000/event/1/participants`)
          .then(thirdRes => {
            this.setState({ participants: thirdRes.data });

            console.log(this.state.participants);
          });
      })
      .catch(e => {
        console.log(e);
      });
          });

        
  }

  render() {
    return (
      <>
        {this.state.data == undefined && <div>Loading...</div>}
        {this.state.companyData.properties && (
          <div>
            <HeroSection data={this.state.data} />
            <InformationSection
              data={this.state.data}
              companyData={this.state.companyData}
              participants={this.state.participants}
            />
          </div>
        )}
      </>
    );
  }
}

export default Event;
