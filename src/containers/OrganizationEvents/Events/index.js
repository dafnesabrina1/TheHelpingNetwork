// Libraries
import React from 'react';

// Styles
import { Container } from './organizationEvents.style';
import EventCard from '../../Events/EventCard';
import AddEvent from '../addEvent';

const OrganizationEvents = () => {
  return (
    <Container>
        <AddEvent/>
        <EventCard/>
        <EventCard/>
        <EventCard/>
        <EventCard/>
        <EventCard/>
        <EventCard/>
    </Container>
  );
};

export default OrganizationEvents;