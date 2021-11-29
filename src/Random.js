import React from 'react'
import './Random.css'

const Random = (props) => {
    const random = Math.floor(Math.random() * (props.max - props.min + 1) + props.min)

    return <p className='random'>Random value between {props.min} and {props.max} => {random}</p>
}

export default Random