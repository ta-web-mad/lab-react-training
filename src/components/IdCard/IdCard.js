// Create a IdCard component with 6 props:

// lastName: A string
// firstName: A string
// gender: A string, 'male' or 'female'
// height: A number
// birth: A date
// picture: A string

import React from 'react';
import { ContainerIdCard } from './IdCard.styled';

export default function IdCard({
  lastName,
  firstName,
  gender,
  height,
  birth,
  picture,
}) {
  return (
    <ContainerIdCard>
      <img src={picture} alt={firstName} />
      <div>
        <p>
          <b>First name:</b>
          {firstName}
        </p>
        <p>
          <b>Last name:</b>
          {lastName}
        </p>
        <p>
          <b>Gender:</b>
          {gender}
        </p>
        <p>
          <b>Height:</b>
          {height}
        </p>
        <p>
          <b>Birth:</b>
          {birth}
        </p>
      </div>
    </ContainerIdCard>
  );
}
