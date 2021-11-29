import { React, useState } from 'react'

function LikeButton() {
  const [likes, setlikes] = useState(0)
  const [color, setColor] = useState('purple')
  const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];

  const handleClick = () => {
    console.log(colors)
    setColor(getRandomColor(colors))
    setlikes((prevState) => ++prevState)

  }
  return (
    <div onClick={handleClick} className="likeBtn" style={{ backgroundColor: color }}>
      {likes} Likes
    </div>
  )
}

export default LikeButton
//helper
function getRandomColor(colors) {
  return colors[Math.floor(Math.random() * colors.length)]

}