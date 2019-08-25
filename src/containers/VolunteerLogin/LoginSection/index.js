// Libraries
import React from 'react';
import { Link } from 'react-router-dom';

// Styles
import { CustomHighlight } from '../../../style';
import CustomSectionContainer, {
  SectionHeader,
  FacebookButton
} from './loginSection.style';

// TODO: Mejorar el UI de este componente
const VolunteerLogin = () => {
  return (
    <CustomSectionContainer>
      <SectionHeader>
        Enter as a <CustomHighlight>Volunteer</CustomHighlight>
        <FacebookButton>
          <Link to='/fbLogin' style={{ color: 'white' }}>
            Ingresar con Facebook
          </Link>
        </FacebookButton>
      </SectionHeader>
    </CustomSectionContainer>
  );
};

export default VolunteerLogin;
