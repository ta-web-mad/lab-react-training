import './Rating.css'

const Rating = props => {

    let stars = ""
    if (props.children >= 0 && props.children < 0.5) {
        stars = '☆☆☆☆☆'
    }
    if (props.children >= 0.5 && props.children < 1.5) {
        stars = '★☆☆☆☆'
    }
    if (props.children >= 1.5 && props.children < 2.5) {
        stars = '★★☆☆☆'
    }
    if (props.children >= 2.5 && props.children < 3.5) {
        stars = '★★★☆☆'
    }
    if (props.children >= 3.5 && props.children < 4.5) {
        stars = '★★★★☆'
    }
    if (props.children >= 4.5 && props.children <= 5) {
        stars = '★★★★★'
    }

    return (

        <div className='star-ratings'>
            <p>{stars}</p>
        </div>

    )
}

export default Rating