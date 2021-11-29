import './IdCard.css';

function IdCard(props){

	const slicedDate = `${props.birth}`.slice(0,15);

	return(
		<div className="IdCard">
			<div className="img-wrapper">
				<img src={props.picture} alt="" />
			</div>
			<div>
				<ul>
					<li><span>First Name:</span> {props.firstName}</li>
					<li><span>Last Name:</span> {props.lastName}</li>
					<li><span>Gender:</span> {props.gender}</li>
					<li><span>Height:</span> {`${props.height}`}</li>
					<li><span>Birth:</span> {slicedDate}</li>
				</ul>
			</div>
		</div>
	);
}


export default IdCard;