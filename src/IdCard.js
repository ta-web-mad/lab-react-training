import React from 'react';
import "./idCard.css";




function IdCard(props) {
    const { lastName, gender, height, picture, birth } = props;
    // console.log(birth.getDate());
    let days = ["Mon", "Tue", "Wednesday", "Thursday"];  
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'Jule', 'August', 'September', 'October', 'November', 'Deciember']; 
  
    return (
        <div className="container">
            <div className="card-elements">
                <img src={picture} alt="img" />
                <p>Lastname: {lastName}</p>
                <p>Gender: {gender}</p>
                <p>Height: {height}</p>
                {/* <p>Birth: {birth.toLocaleDateString()}</p> */}
                <p>Birth: {days[birth.getDay()].toString() + birth.getFullYear() + months[birth.getDate()]}</p>
            </div>
        </div>
    )
}




export default IdCard;