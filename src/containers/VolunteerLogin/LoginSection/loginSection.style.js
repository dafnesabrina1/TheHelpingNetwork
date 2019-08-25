import styled from 'styled-components';

const CustomSectionContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;

  width: 30rem;
  height: 14rem;

  margin: -7rem 0 0 -15rem;
  padding: 3rem;

  background-color: var(--color-white);

  -webkit-box-shadow: 0 20px 25px -5px rgba(209, 212, 227, 1);
  -moz-box-shadow: 0 20px 25p -5px rgba(209, 212, 227, 1);
  box-shadow: 0 20px 25px -5px rgba(209, 212, 227, 1);
`;

export const SectionHeader = styled.h1`
  font-family: 'DM Serif Text', serif;
  font-size: 2.5rem;

  width: 100%;
  text-align: center;
`;

export const FacebookButton = styled.button`
  font-family: 'Lato', sans-serif;
  background-color: #3b5998;

  border-radius: 5px;

  text-transform: uppercase;
  font-size: 0.9rem;
  font-weight: 800;
  letter-spacing: 1.5px;
  line-height: 4rem;

  padding: 0 1.3rem;

  color: var(--color-white);
`;

export default CustomSectionContainer;
