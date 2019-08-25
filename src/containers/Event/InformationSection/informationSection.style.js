import styled from 'styled-components';

export const QuestionDiv = styled.div`
  padding-bottom: 3rem;
`;

export const QuestionTitle = styled.h1`
  font-family: 'DM Serif Text', serif;
  font-size: 1.8rem;

  margin-bottom: 0.5rem;
`;

export const QuestionDesc = styled.p`
  font-size: 1.05rem;

  word-wrap: break-word;
  max-width: 35rem;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 65% 35%;
`;

export const Left = styled.div``;

export const Right = styled.div``;

export const CompanyInfo = styled.div`
  width: 100%;
  height: 13rem;

  border-radius: 5px;

  padding: 2rem;

  -webkit-box-shadow: 0 5px 25px -5px rgba(209, 212, 227, 1);
  -moz-box-shadow: 0 5px 25p -5px rgba(209, 212, 227, 1);
  box-shadow: 0 5px 25px -5px rgba(209, 212, 227, 1);
`;

export const Top = styled.div`
  display: flex;
`;

export const Bottom = styled.div``;

export const CompanyImg = styled.div`
  width: 3.5rem;
  height: 3.5rem;

  border-radius: 50%;

  background: black url(${props => props.img}) center / cover;

  margin-right: 1rem;
`;

export const FlexSpaceBetweenTop = styled.div`
  display: flex;
  justify-content: space-between;
  color: #3e495b;
  font-size: 15px;
  font-weight: bold;
`;

export const FlexSpaceBetweenBottom = styled.div`
  display: flex;
  justify-content: space-between;
  color: #5b6272;
  font-size: 15px;
`;
