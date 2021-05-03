import React from 'react';
import './BoxColor.css'

const BoxColor = props => {

    const background = {
        backgroundColor: 'rgb {props.r}, {props.r}, {props.r}',
        height: 20,
    }

    return (
        <div class="boxColor" style = {background}>
            rgb {props.r}, {props.r}, {props.r}
        </div>
    )
}

export default BoxColor
