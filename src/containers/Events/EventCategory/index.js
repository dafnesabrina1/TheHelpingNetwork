import React from 'react';
import { CategoryTitle } from './eventCategory.style';
import EventCarousel from '../EventCarousel/index';
import EventCard from '../EventCard';

const EventCategory = ({ events }) => {
  return (
    <div>
      <CategoryTitle>Near you</CategoryTitle>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, auto)' }}>
        {events.map(event => {
          return <EventCard event={event} />;
        })}
      </div>
    </div>
  );
};

export default EventCategory;
