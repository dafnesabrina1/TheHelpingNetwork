// Libraries
import React, { useState } from 'react';

// Styles
import {
  SectionHeader,
  SectionDescription,
  Grid,
  Left,
  Right
} from './heroSection.style';
import SectionContainer, { CustomHighlight } from '../../../style';
import Button from '../../../layout/components/Button';

const HeroSection = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div>
      <Grid>
        <Left>
          <SectionContainer extraPadding>
            <SectionHeader withBottomMargin>
              The <CustomHighlight>Helping</CustomHighlight> Network
            </SectionHeader>
            <SectionDescription bottomSpacing>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum.
            </SectionDescription>
            <Button to='/login/volunteer' noMargin>
              Voluntario
            </Button>
            <Button to='/login/organization' inverted>
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
