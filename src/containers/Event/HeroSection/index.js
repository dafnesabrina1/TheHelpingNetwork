// Libraries
import React, { useEffect, Component } from 'react';
import axios from 'axios';

// Styles
import SectionContainer, { SectionHeader } from '../../../style';
import Button from '../../../layout/components/Button';
import { Grid, Left, Right, EventImage } from './heroSection.style';
import VolunteersListSection from '../VolunteersListSection';
import heroIMG from '../../../assets/heroIMG_v2.jpg';

const HeroSection = ({ data }) => {
  return (
    <SectionContainer>
      <Grid>
        <Left>
          <SectionHeader isFancy shorterWidth withMarginBottom>
            {data.payload.properties.name}
          </SectionHeader>
          <Button noMargin>I'M IN</Button>
          <VolunteersListSection />
        </Left>
        <Right>
          <EventImage img={data.payload.properties.image}></EventImage>
        </Right>
      </Grid>
    </SectionContainer>
  );
};

export default HeroSection;
