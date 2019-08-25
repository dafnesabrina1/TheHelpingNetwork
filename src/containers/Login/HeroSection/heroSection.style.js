import styled from 'styled-components';
import SectionContainer from '../../../style';

const CustomSectionContainer = styled(SectionContainer)`
  position: absolute;
  left: 5rem;

  max-width: 40rem;
  background-color: var(--color-white);

  margin: 7rem auto 5rem auto;
`;

export const SectionHeader = styled.h1`
  font-family: 'DM Serif Text', serif;
  font-size: 4.3rem;

  line-height: 1.3;

  margin-bottom: ${props => (props.withBottomMargin ? '1rem' : '0')};
`;

export const SectionDescription = styled.p`
  font-size: 1.2rem;

  margin-bottom: ${props => (props.bottomSpacing ? '1rem' : '0rem')};
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 25% 75%;

  height: 100vh;
`;

export const Left = styled.div``;

export const Right = styled.div`
  background: black url(${props => props.img}) center/cover;
`;

export default CustomSectionContainer;
