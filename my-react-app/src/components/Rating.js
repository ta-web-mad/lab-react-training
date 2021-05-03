import './Rating.css'

const Rating = props => {

    return (
        <section class="ratings">
            <img class="stars" src={props.children === 0 ? "./emptystar.png" : "./filled-star.png"} alt={`${props.children}`} />
            <img class="stars" src={props.children >= 1.5 ? "./filled-star.png" : "./emptystar.png"} alt={`${props.children}`} />
            <img class="stars" src={props.children >= 2.5 ? "./filled-star.png" : "./emptystar.png"} alt={`${props.children}`} />
            <img class="stars" src={props.children >= 3.5 ? "./filled-star.png" : "./emptystar.png"} alt={`${props.children}`} />
            <img class="stars" src={props.children >= 4.5 ? "./filled-star.png" : "./emptystar.png"} alt={`${props.children}`} />
        </section>
    )
}

export default Rating