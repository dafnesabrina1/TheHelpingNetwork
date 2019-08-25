import React from 'react';
import { 
    CategoryTitle, Separator } from './eventCategory.style';
import EventCarousel from '../EventCarousel/index';

const EventCategory = () => {
  return (
    <div>
      <CategoryTitle>Community</CategoryTitle>
      <EventCarousel/>
    </div>
  );
};

export default EventCategory;