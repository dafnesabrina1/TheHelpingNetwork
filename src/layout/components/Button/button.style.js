import styled from 'styled-components';
import { Link } from 'react-router-dom';

const CustomButton = styled.button`
  outline: none;
  border: none;

  border-radius: 5px;
  border: 1px solid var(--color-main);
  background-color: ${props =>
    props.inverted ? 'var(--color-white)' : 'var(--color-main)'};

  transition: background-color 0.2s ease;

  text-transform: uppercase;
  font-size: 0.9rem;
  font-weight: 800;
  letter-spacing: 1.5px;
  line-height: 4rem;
  display: inline-block;

  color: ${props =>
    props.inverted ? 'var(--color-main)' : 'var(--color-white)'};

  margin-left: ${props => (props.noMargin ? '0rem' : '1rem')};

  padding: 0 6rem;
  cursor: pointer;

  &:hover {
    background-color: ${props =>
      props.inverted ? 'var(--color-white)' : 'var(--color-hover)'};
    border: 1px solid
      ${props => (props.inverted ? 'var(--color-hover)' : 'var(--color-main)')};
  }
`;

export const ExternalButton = styled.a`
  outline: none;
  border: none;

  border-radius: 5px;
  border: 1px solid var(--color-main);
  background-color: ${props =>
    props.inverted ? 'var(--color-white)' : 'var(--color-main)'};

  transition: background-color 0.2s ease;

  text-transform: uppercase;
  font-size: 0.9rem;
  font-weight: 800;
  letter-spacing: 1.5px;
  line-height: 4rem;
  display: inline-block;

  color: ${props =>
    props.inverted ? 'var(--color-main)' : 'var(--color-white)'};

  margin-left: ${props => (props.noMargin ? '0rem' : '1rem')};

  padding: 0 1.3rem;

  cursor: pointer;

  &:hover {
    background-color: ${props =>
      props.inverted ? 'var(--color-white)' : 'var(--color-hover)'};
    border: 1px solid
      ${props => (props.inverted ? 'var(--color-hover)' : 'var(--color-main)')};
  }
`;

export const InternalButton = styled.button`
  outline: none;
  border: none;

  border-radius: 5px;
  border: 1px solid var(--color-main);

  background-color: ${props =>
    props.inverted ? 'var(--color-white)' : 'var(--color-main)'};
  transition: background-color 0.2s ease;

  text-transform: uppercase;
  font-size: 0.9rem;
  font-weight: 700;
  letter-spacing: 1.5px;

  margin-left: ${props => (props.noMargin ? '0rem' : '1rem')};

  padding: 1rem;

  cursor: pointer;

  &:hover {
    background-color: ${props =>
      props.inverted ? 'var(--color-white)' : 'var(--color-hover)'};
    border: 1px solid
      ${props => (props.inverted ? 'var(--color-hover)' : 'var(--color-main)')};
  }
`;

export const InternalLink = styled(Link)`
  color: ${props =>
    props.inverted ? 'var(--color-main) !important' : 'var(--color-white)'};

  width: 100%;
  height: 100%;

  padding: 0 1.3rem 0 1.3rem;
`;

export default CustomButton;
