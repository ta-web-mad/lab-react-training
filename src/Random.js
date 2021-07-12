const Random = props => {

    function randomNumber(min, max) {

        return Math.floor(Math.random() * (max - min)) + min;
    }

    return (
        < div className="container justify-content-center" >
            <div className="row idCard">
                <p>Random value between {props.min} and {props.max} =&gt; {randomNumber(props.min, props.max)} </p>
            </div>
            <br />

        </div>
    )


}
export default Random