import styled from 'styled-components';

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 65% 35%;
`;

export const Left = styled.div`
  padding: 0 3rem;
`;

export const Right = styled.div`
  padding: 1rem;
  justify-content: center;
  align-content: center;

  height: 26rem;
`;

export const EventImage = styled.div`
  background: black url(${props => props.img}) center/cover;

  width: 20rem;
  height: 100%;

  -webkit-box-shadow: 34px 34px 0px 2px rgba(252, 242, 44, 1);
  -moz-box-shadow: 34px 34px 0px 2px rgba(252, 242, 44, 1);
  box-shadow: 34px 34px 0px 2px rgba(252, 242, 44, 1);
`;
