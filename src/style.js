import styled from 'styled-components';

const SectionContainer = styled.div`
  padding: ${props => (props.extraPadding ? '5rem 4rem' : '3rem')};
  max-width: 33rem;

  margin: 0 auto;
`;

export const CustomHighlight = styled.span`
  -webkit-border-radius: 6px;
  -moz-border-radius: 6px;
  border-radius: 8x;
  padding-left: 6px;
  background: #ffffcc;
`;

export default SectionContainer;
