import './Rating.css';

function formatRating(rating) {

	let roundedRating = Math.round(rating);
	let emptyStars = 5 - roundedRating;
	let stars = [];

	for (let i = 0; i < roundedRating; i++) {
		stars.push('★');
	}
	for (emptyStars; emptyStars--;) {
		stars.push('☆');
	}
	return stars.join('');
}


function Rating(props) {
	return (
		<div>
			<p>{formatRating((Number(props.children)))}</p>
		</div>
	);
}

export default Rating;