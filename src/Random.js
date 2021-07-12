const Random = props => {

        // random 1 to 10
        const random = Math.floor(Math.random() * props.max) + 1;

        return (
                <div>

                        <p>Random Number between 1 and {props.max} {'=>'} {random}</p>

                </div>
        )

}

export default Random;