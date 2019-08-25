import styled from 'styled-components';

export const CardImage = styled.div`
  width: 21.4rem;
  height: 15rem;
  background: white url(${props => props.img}) center / cover;
`;

export const CardInfo = styled.div`
  width: 21.4rem;
  background-color: white;
  padding: 1rem;
`;

export const CardTitle = styled.h1`
  color: #3e495b;
  font-size: 1.5rem;

  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const Flex = styled.div`
  display: flex;
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

export const CardUserImage = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 1rem;
  background: white url(${props => props.img}) center / cover;
`;

export const CardUserName = styled.div`
  font-size: 12px;
  margin: 0.5rem 1rem;
  color: #5b6272;
`;

export const EventCardContainer = styled.div`
  border-radius: 0.5rem;
  overflow: hidden;
  width: fit-content;
  margin: 1rem;
`;

export const ProgressInfo = styled.div`
  width: 21.4rem;
  background-color: #f8fafb;
  padding: 1rem;
`;
