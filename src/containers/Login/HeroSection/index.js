// Libraries
import React, { useState } from 'react';

// Styles
import CustomSectionContainer, {
  SectionHeader,
  SectionDescription,
  Grid,
  Left,
  Right
} from './heroSection.style';
import SectionContainer, { CustomHighlight } from '../../../style';
import Button from '../../../layout/components/Button';
import heroIMG from '../../../assets/heroIMG_v2.jpg';

const HeroSection = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div>
      <Grid>
        <CustomSectionContainer extraPadding>
          <SectionHeader withBottomMargin>
            The <CustomHighlight>Helping</CustomHighlight> Network
          </SectionHeader>
          <SectionDescription bottomSpacing>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            asperiores neque, vel veritatis, nam aspernatur.
          </SectionDescription>
          <Button to='/login/volunteer' noMargin>
            Voluntario
          </Button>
          <Button to='/login/organization' inverted>
            Organizador
          </Button>
        </CustomSectionContainer>

        <Left></Left>
        <Right img={heroIMG} />
      </Grid>
    </div>
  );
};

export default HeroSection;
