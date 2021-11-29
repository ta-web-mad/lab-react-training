import './Greetings.css';

function chooseLang(lang){
	switch(lang){
		case 'en': return 'Hello';
		case 'es': return 'Hola';
		case 'fr': return 'Bonjour';
		case 'de': return 'Hallo';
		default: return 'Hello';

	}
}

function Greetings(props){
 
	return(
	    <div className="greetings">
			<h2>{chooseLang(props.lang)} {props.children}</h2>
		</div>
	);
}


export default Greetings;