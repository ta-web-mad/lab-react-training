import React from 'react';
import "./Clickable.css" 
import ReactDOM from 'react-dom'






function Clickable(props) {
  
    function activateLasers(){
       const element =  <img className = 'Hello' src={props.imgClicked} alt='img'></img>  
        ReactDOM.render(element, document.getElementById('image-div'));
    }
  
        return (
            <div id = "image-div" onClick={activateLasers}>
                <img src={props.img} alt="img"></img>
            </div>

        )

   
}



export default Clickable;