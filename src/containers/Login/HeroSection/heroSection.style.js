import styled from 'styled-components';

export const SectionHeader = styled.h1`
  font-family: 'DM Serif Text', serif;
  font-size: 4.3rem;

  line-height: 1.3;
`;

export const SectionDescription = styled.p`
  font-size: 1.2rem;

  margin-bottom: ${props => (props.bottomSpacing ? '1rem' : '0rem')};
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 55% 45%;
`;

export const Left = styled.div``;

export const Right = styled.div``;
