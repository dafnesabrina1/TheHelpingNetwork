// Libraries
import React from 'react';

// Styles
import SectionContainer, { SectionHeader } from '../../../style';
import Button from '../../../layout/components/Button';
import { Grid, Left, Right, EventImage } from './heroSection.style';
import VolunteersListSection from '../VolunteersListSection';
import heroIMG from '../../../assets/heroIMG_v2.jpg';

const HeroSection = () => {
  return (
    <SectionContainer>
      <Grid>
        <Left>
          <SectionHeader isFancy shorterWidth withMarginBottom>
            Help recolect trash for North East Beach
          </SectionHeader>
          <Button noMargin>I'M IN</Button>
          <VolunteersListSection />
        </Left>
        <Right>
          <EventImage img={heroIMG}></EventImage>
        </Right>
      </Grid>
    </SectionContainer>
  );
};

export default HeroSection;
