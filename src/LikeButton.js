import './LikeButton.css';
import {useState} from 'react';

function LikeButton(props){

	const colors = ['red', 'green', 'blue', 'yellow', 'orange', 'purple', 'pink', 'brown', 'black', 'white'];

	const [count, setCount] = useState(0);
	const [color, setColor] = useState(colors[0]);

	function incrementCount(){
		setCount(prevCount => prevCount + 1);
	}

	function changeColor(){
		const randomIndex = Math.floor(Math.random() * colors.length);
		setColor(colors[randomIndex]);
	}

	function countAndColor(){
		incrementCount();
		changeColor();
	}

	return (
		<div>
			<button onClick={countAndColor} style={{backgroundColor: color}}>{count} Likes</button>
		</div>
	);
}

export default LikeButton;