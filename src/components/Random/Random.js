import React from 'react';
import { ContainerRandom } from './Random.styled';

export default function Random({ min, max }) {
  const randomizer = () => {
    return min + Math.floor(max * Math.random());
  };

  return (
    <ContainerRandom>
      <p>
        Random value between{' ' + min + ' and '}
        {max + ' => '}
        {randomizer()}
      </p>
    </ContainerRandom>
  );
}
