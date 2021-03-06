// Libraries
import React from 'react';

// Styles
import CustomSectionContainer, {
  SectionHeader,
  SectionDescription,
  Grid,
  Left,
  Right
} from './heroSection.style';
import { CustomHighlight } from '../../../style';
import Button from '../../../layout/components/Button';
import heroIMG from '../../../assets/heroIMG_v2.jpg';

const HeroSection = () => {
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
          <SectionDescription bottomSpacing>
            ¿Cómo quieres ingresar?
          </SectionDescription>
          <Button to='/login/volunteer' noMargin hasInternalLink>
            Voluntario
          </Button>
          <Button to='/login/organization' hasInternalLink inverted>
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
