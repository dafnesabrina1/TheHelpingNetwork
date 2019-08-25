// Libraries
import React from 'react';

// Styles
import SectionContainer from '../../../style';
import Circle, {
  CircleContainer,
  VolunteersText
} from './volunteersListSection.style';

// Images
import face1 from '../../../assets/faces/face1.jpg';
import face2 from '../../../assets/faces/face2.jpg';
import face3 from '../../../assets/faces/face3.jpg';
import face4 from '../../../assets/faces/face4.jpg';
import face5 from '../../../assets/faces/face5.jpg';

const VolunteersListSection = () => {
  return (
    <SectionContainer style={{ padding: '2rem 0 0 0' }}>
      <p>Join</p>
      <CircleContainer>
        <Circle img={face1} marginRight />
        <Circle img={face2} style={{ left: '2rem' }} />
        <Circle img={face3} style={{ left: '4rem' }} />
        <Circle img={face4} style={{ left: '6rem' }} />
        <Circle img={face5} style={{ left: '8rem' }} />

        <VolunteersText>+ 195 Volunteers</VolunteersText>
      </CircleContainer>
    </SectionContainer>
  );
};

export default VolunteersListSection;
