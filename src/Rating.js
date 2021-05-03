import './Rating.css'

const Rating = props => {
    //console.log(props)

    const totalRating = Math.round(props.children)

    let stars = ''
    for (let i = 0; i <= totalRating - 1; i++){
        stars += '★'
    }
    for (let i = 0; i < (5 - totalRating); i++){
        stars += '☆'
    }

    return (
        <div className="Rating">{stars}</div>
    )
}

export default Rating

//★☆