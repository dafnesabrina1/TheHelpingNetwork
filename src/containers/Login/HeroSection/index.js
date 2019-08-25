// Libraries
import React from 'react';

// Styles
import {
  SectionHeader,
  SectionDescription,
  Grid,
  Left,
  Right
} from './heroSection.style';
import SectionContainer from '../../../style';
import Button from '../../../layout/components/Button';

const HeroSection = () => {
  return (
    <div>
      <Grid>
        <Left>
          <SectionContainer extraPadding>
            <SectionHeader>The Helping Network</SectionHeader>
            <SectionDescription bottomSpacing>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum.
            </SectionDescription>
            <Button to='/facebook' noMargin>
              Voluntario
            </Button>
            <Button to='/organization' inverted>
              Organizador
            </Button>
          </SectionContainer>
        </Left>
        <Right>
          <p>right</p>
        </Right>
      </Grid>
    </div>
  );
};

export default HeroSection;
