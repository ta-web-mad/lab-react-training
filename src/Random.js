import './Random.css'

function randomBetween(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

function Random(props) {

	const {min, max} = props;
	return (
		<div className="random">
			<h2>{`Random value between ${min} and ${max} => ${randomBetween(min, max)}`}</h2>
		</div>
	);
}

export default Random;