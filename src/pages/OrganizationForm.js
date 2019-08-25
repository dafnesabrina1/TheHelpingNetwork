import React, { useState } from 'react';
import styled from 'styled-components';
import useInputState from '../hooks/useInputState';
import axios from 'axios';

import { CustomHighlight } from '../style.js';

const OrganizationForm = () => {
  const [name, onNameChange, resetName] = useInputState('');
  const [volunteers, onVolunteerChange, resetVolunteer] = useInputState('');
  const [about, onAboutChange, resetAbout] = useInputState('');
  const [expect, onExpectChange, resetExpect] = useInputState('');
  const [help, onHelpChange, resetHelp] = useInputState('');
  const [img, onImgChange, resetImg] = useInputState('');

  const handleClick = () => {
    axios
      .post('http://localhost:4000/event/', {
        name,
        capacity: volunteers,
        p1: about,
        p2: expect,
        p3: help,
        imageUrl: img,
        ngo_id: '0'
      })
      .then(result => {});

    // Reset Values
    resetName();
    resetVolunteer();
    resetAbout();
    resetExpect();
    resetHelp();
    resetImg();
  };

  return (
    <div>
      <SectionTitle style={{ marginTop: '5rem', marginBottom: '3rem' }}>
        <CustomHighlight>Create</CustomHighlight> social event
      </SectionTitle>
      <SectionForm>
        <div style={{ marginBottom: '0.8rem' }}>
          <h3 style={{ marginBottom: '0.5rem' }}>Event name</h3>
          <CustomInput type='text' value={name} onChange={onNameChange} />
        </div>

        <div style={{ marginBottom: '0.8rem' }}>
          <h3 style={{ marginBottom: '0.5rem' }}># of volunteers needed</h3>
          <CustomInput
            type='text'
            value={volunteers}
            onChange={onVolunteerChange}
          />
        </div>

        <div style={{ marginBottom: '0.8rem' }}>
          <h3 style={{ marginBottom: '0.5rem' }}>What is the event about?</h3>
          <CustomInput type='text' value={about} onChange={onAboutChange} />
        </div>

        <div style={{ marginBottom: '0.8rem' }}>
          <h3 style={{ marginBottom: '0.5rem' }}>
            What can volunteers expect?
          </h3>
          <CustomInput type='text' value={expect} onChange={onExpectChange} />
        </div>

        <div style={{ marginBottom: '0.8rem' }}>
          <h3 style={{ marginBottom: '0.5rem' }}>How can volunteers help?</h3>
          <CustomInput type='text' value={help} onChange={onHelpChange} />
        </div>

        <div style={{ marginBottom: '0.8rem' }}>
          <h3 style={{ marginBottom: '0.5rem' }}>Event Image Link</h3>
          <CustomInput type='text' value={img} onChange={onImgChange} />
        </div>

        <CustomButton onClick={() => handleClick()}>SUBMIT</CustomButton>
      </SectionForm>
    </div>
  );
};

export default OrganizationForm;

const CustomButton = styled.div`
  max-width: 15rem;

  padding: 1rem 1.3rem;
  text-align: center;
  color: white;

  border-radius: 5px;

  cursor: pointer;

  background-color: var(--color-main);
  font-size: 1rem;
`;

const SectionTitle = styled.h1`
  font-family: 'DM Serif Text', serif;
  font-size: 4rem;

  width: 100%;
  text-align: center;
`;

const CustomInput = styled.input`
  background-color: var(--color-white);
  border: 1px solid gray;
  border-radius: 5px;

  font-size: 1rem;

  padding: 1rem 0.5rem;
  width: 20rem;

  outline: none;
`;

const SectionForm = styled.div`
  background-color: var(--color-white);
  height: 45rem;

  margin-bottom: 10rem;

  border-radius: 5px;

  padding: 2rem;

  max-width: 50rem;
  margin: 0 auto;

  -webkit-box-shadow: 0 5px 25px -5px rgba(209, 212, 227, 1);
  -moz-box-shadow: 0 5px 25p -5px rgba(209, 212, 227, 1);
  box-shadow: 0 5px 25px -5px rgba(209, 212, 227, 1);
`;
