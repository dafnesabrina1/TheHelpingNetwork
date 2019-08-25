// Libraries
import React from 'react';
import './Events.css';
import './functionality';

// Styles
import EventCard from '../containers/Events/EventCard';

const Events = () => {
  return (
    <div>
      <div class="MultiCarousel" data-items="1,3,5,6" data-slide="1" id="MultiCarousel"  data-interval="1000">
            <div class="MultiCarousel-inner">
                <div class="item">
                  <EventCard/>
                </div>
                <div class="item">
                  <EventCard/>  
                </div>
                <div class="item">
                  <EventCard/>
                </div>
                <div class="item">
                  <EventCard/>
                </div>
                <div class="item">
                  <EventCard/>
                </div>
                <div class="item">
                  <EventCard/>
                </div>
                <div class="item">
                  <EventCard/>
                </div>
                <div class="item">
                  <EventCard/>
                </div>
                <div class="item">
                  <EventCard/>
                </div>
                <div class="item">
                  <EventCard/>
                </div>
                <div class="item">
                  <EventCard/>
                </div>
                <div class="item">
                  <EventCard/>
                </div>
                <div class="item">
                  <EventCard/>
                </div>
                <div class="item">
                  <EventCard/>
                </div>
                <div class="item">
                  <EventCard/>
                </div>
                <div class="item">
                  <EventCard/>
                </div>
            </div>
            <button class="btn btn-primary leftLst">.</button>
            <button class="btn btn-primary rightLst">.</button>
        </div>
        <link href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"/>
        <script src="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/js/bootstrap.min.js"></script>
        <script src="//code.jquery.com/jquery-1.11.1.min.js"></script>
    </div>
  );
};

export default Events;
