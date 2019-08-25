// Libraries
import React from 'react';

// Styles
import { CustomHighlight } from '../../../style';
import CustomSectionContainer, {
  SectionHeader,
  FacebookButton
} from './loginSection.style';

const VolunteerLogin = () => {
  return (
    <CustomSectionContainer>
      <SectionHeader>
        Enter as a <CustomHighlight>Volunteer</CustomHighlight>
        <FacebookButton>Ingresar con Facebook</FacebookButton>
      </SectionHeader>
    </CustomSectionContainer>
  );
};

export default VolunteerLogin;
