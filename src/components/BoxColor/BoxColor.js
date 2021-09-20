import React from 'react';
import { ContainerBoxColor } from './BoxColor.styled';

export default function BoxColor({ r, g, b }) {
  return (
    <ContainerBoxColor r={r} g={g} b={b}>
      <p>
        RGB({r},{g},{b})
      </p>
      <p>
        #{r.toString(16)}
        {g.toString(16)}
        {b.toString(16)}
      </p>
    </ContainerBoxColor>
  );
}
