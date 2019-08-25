import styled from 'styled-components';

const Circle = styled.div`
  position: absolute;

  background: var(--color-main) url(${props => props.img}) center / cover;

  width: 3rem;
  height: 3rem;

  border-radius: 50%;

  margin-right: ${props => (props.marginRight ? '0.5rem' : '0')};
`;

export const CircleContainer = styled.div`
  display: flex;
  position: relative;
`;

export const VolunteersText = styled.p`
  margin-left: 12rem;
  margin-top: 0.8rem;
`;

export default Circle;
