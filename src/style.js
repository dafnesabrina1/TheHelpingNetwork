import styled from 'styled-components';

const SectionContainer = styled.div`
  padding: ${props => (props.extraPadding ? '5rem 4rem' : '3rem')};
  max-width: 33rem;

  margin: 0 auto;
`;

export default SectionContainer;
