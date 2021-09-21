import React from 'react'
import { ContainerBox } from './BoxColor.styled'


export default function BoxColor({ r, g, b }) {
    return (
        <ContainerBox r={r} g={g} b={b}>
            <h5>rgb({r},{g},{b})</h5>
            <p>#{r.toString(16)},{g.toString()},{b.toString()}</p>
        </ContainerBox>
    )
}
