import React from 'react'
import './Random'


const Random = (props) => {

    function oneToSix (min,max){
          return  Math.floor(Math.random() * (max - min + 1)) + min
        }
    return <p> Random value between {props.min} and {props.max} ... {oneToSix(props.min,props.max)}</p>

}

export default Random