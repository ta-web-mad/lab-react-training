const Greetings = (props) => {

        const lang = props.lang;
        let string = '';

        lang === 'fr' ? string = 'Bonjour' : string = 'Hallo';

        return (

                <div className="greeting" style={{ border: "1px solid black", margin: "10px", padding: '5px' }}>
                        <p>{string} {props.children}</p>
                </div>

        )

}

export default Greetings;