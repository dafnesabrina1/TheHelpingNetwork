import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import {
  CardImage,
  CardInfo,
  CardTitle,
  Flex,
  FlexSpaceBetweenTop,
  FlexSpaceBetweenBottom,
  CardUserImage,
  CardUserName,
  EventCardContainer,
  ProgressInfo
} from './eventCard.style';
import { Line } from 'rc-progress';

class EventCard extends Component {
  state = {
    participants: ''
  };

  componentDidMount() {
    axios
      .get(
        `http://localhost:4000/ngo/${this.props.event.properties.organizer_id}`
      )
      .then(secondRes => {
        this.setState({ companyData: secondRes.data });

        axios
          .get(
            `http://localhost:4000/event/${this.props.event.identity}/participants`
          )
          .then(thirdRes => {
            this.setState({ participants: thirdRes.data });
          });
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    return (
      <EventCardContainer>
        {console.log(this.props.event)}

        <CardImage img={this.props.event.properties.image} />
        <CardInfo>
          <CardTitle>{this.props.event.properties.name}</CardTitle>
        </CardInfo>
        <ProgressInfo>
          <FlexSpaceBetweenTop>
            <div>0 Volunteers</div>
          </FlexSpaceBetweenTop>
          <FlexSpaceBetweenBottom>
            <div>of {this.props.event.properties.capacity} Volunteers</div>
          </FlexSpaceBetweenBottom>
          <Line percent='0' strokeWidth='2' strokeColor='red' trailWidth='2' />
        </ProgressInfo>
      </EventCardContainer>
    );
  }
}

export default EventCard;
