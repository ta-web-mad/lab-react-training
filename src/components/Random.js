import React from 'react';
import './Random.css'

const Random = props => {
    let number = Math.round(Math.random() * (props.max - props.min))

return (
        <div className='random'>
            <p>Random value between {props.max} and {props.min} => {number}</p>
        </div>
    )
} 

export default Random