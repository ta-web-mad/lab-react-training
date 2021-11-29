import './BoxColor.css';

function rgbToHex(r, g, b) {
	return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

function BoxColor(props) {

	const {r,g,b} = props;
	const hex = rgbToHex(r,g,b);

	return (
		<div className="box-color" style={{backgroundColor: hex}}>
			<p>{`rgb(${r},${g},${b})`}</p>
			<p>{hex}</p>
		</div>
	);
}

export default BoxColor;