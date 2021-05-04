import './starRating.css'

const starRating = props => {
    let ratingNum = Math.round(props.children)

    let arrSpan = Array.from({ length: 5 }, (_, i) => {
        if (i < ratingNum) {
            return (<span className="checked"> &#9733; </span>)
        }

        return (<span> &#9733; </span>)

    })

    return (
        <div className="rating">
            {arrSpan}
        </div>
    )

}

export default starRating