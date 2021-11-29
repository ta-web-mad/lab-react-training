import React from 'react'

function Rating(props) {

  return (
    <div style={{ padding: "0.3rem" }}>
      {getStars(props.children)}




    </div>
  )
}

export default Rating
//helper :
function getStars(num) {
  let stars = []
  let starNum = Math.floor(num);
  for (let i = 1; i < 6; i++) {
    if (i < starNum) stars.push('★')
    else stars.push('☆')
  }
  return stars;

}