import React from 'react'

function IdCard({ personInfo }) {
  const { lastName, firstName, gender, height, birth, img: picture } = personInfo;

  return (
    <div className="person withborder">
      <img src={picture} />
      <div className="details">

        <p><strong>First Name:</strong>{firstName}</p>
        <p><strong>Last Name:</strong>{lastName}</p>
        <p><strong>Gender:</strong>{gender}</p>
        <p><strong>Height:</strong>{height}</p>
        <p><strong>Birth:</strong>{birth.toString()}</p>
      </div>
    </div>
  )
}

export default IdCard
