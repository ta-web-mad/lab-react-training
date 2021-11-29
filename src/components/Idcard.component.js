import React from 'react'
import '../styles/styles.css'

function Idcard(props) {
    return (
     
      <div className="idCard">
        
        <img src={props.href} alt=""></img>
        <div className="content">
          <strong>First Name: </strong>
          {props.firstName} <br></br>
          <strong>Last Name :</strong>
          {props.lastName} <br></br>
          <strong>Gender: </strong>
          {props.gender}
          <br></br>
          <strong>Height</strong>
          {props.height}
          <br></br>
          <strong>Birth:</strong>
          {props.birth}
          <br></br>
        </div>
      </div>
   
    );
}

export default Idcard
