import React from 'react'
import './Greetings.css'

const Title = (props) => {
  return <h1 className="greeter">{props.titleText}</h1>
}

export default Title