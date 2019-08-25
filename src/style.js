import styled from 'styled-components';

const SectionContainer = styled.div`
  padding: ${props => (props.extraPadding ? '5rem 4rem' : '3rem')};

  margin: 0 auto;
`;

export const HeroContainer = styled.div`
  width: 100%;
  height: 25rem;

  background: white url(${props => props.img}) center/cover;
`;

export const CustomHighlight = styled.span`
  -webkit-border-radius: 6px;
  -moz-border-radius: 6px;
  border-radius: 8x;
  padding-left: 6px;
  background: #ffffcc;
`;

export const SectionHeader = styled.h1`
  font-family: ${props =>
    props.isFancy ? `'DM Serif Text', serif` : `'Lato', sans-serif`};
  font-size: 4.7rem;

  line-height: 1.2;

  margin-bottom: ${props => (props.withMarginBottom ? '1.5rem' : '0')};

  color: ${props => (props.isWhite ? 'var(--color-white)' : 'black')};

  max-width: ${props => (props.shorterWidth ? '35rem' : '')};
`;

export default SectionContainer;
