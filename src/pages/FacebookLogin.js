import React from 'react';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom';
import fbAuth from '../assets/fb.jpg';

const CoverDiv = styled.div`
  width: 100%;
  height: 100vh;

  background-color: tomato;
  margin: 0;

  position: absolute;

  cursor: pointer;

  background: white url(${props => props.img}) center / cover;
`;

const FacebookLogin = ({ history }) => {
  return <CoverDiv img={fbAuth} onClick={() => history.push('/events')} />;
};

export default FacebookLogin;
