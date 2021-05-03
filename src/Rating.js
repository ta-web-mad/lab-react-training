import './Rating.css'

const Rating = props => {

    let starDisplay = ''

    const starNumber = Math.round(props.rating)

    switch(starNumber) {
        case 0:
            starDisplay = '☆☆☆☆☆'
            break;
        case 1: 
            starDisplay = '★☆☆☆☆'
            break;
        case 2: 
            starDisplay = '★★☆☆☆'
            break;
        case 3: 
            starDisplay = '★★★☆☆'
            break;
        case 4: 
            starDisplay = '★★★★☆'
            break;
        case 5: 
            starDisplay = '★★★★★'
            break;
        default:
            starDisplay = '☆☆☆☆☆'
            break;   
    }

    return(
        <div class="rating">
            <p>{starDisplay}</p>
        </div>
    )
}

export default Rating