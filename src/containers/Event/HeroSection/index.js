// Libraries
import React from 'react';

// Styles
import SectionContainer, { HeroContainer, SectionHeader } from '../../../style';
import { Grid, Left, Right, EventInformation } from './heroSection.style';
import heroIMG from '../../../assets/heroIMG_v2_masked.jpg';

const HeroSection = () => {
  return (
    <HeroContainer img={heroIMG}>
      <SectionContainer>
        <Grid>
          <Left>
            <SectionHeader isFancy isWhite withMarginTop>
              Help recolect trash for North East Beach
            </SectionHeader>
          </Left>
          <Right>
            <EventInformation>
              <p>This is the event info</p>
            </EventInformation>
          </Right>
        </Grid>
      </SectionContainer>
    </HeroContainer>
  );
};

export default HeroSection;
