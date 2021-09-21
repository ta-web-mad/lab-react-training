import './Rating.css'

const Rating = (props) => {

    const rating = Math.round(props.children);

    let ratings = '';
    for (let i = 0; i < 5; i++) {
        i < rating ? ratings += '★' : ratings += '☆';
    }

    return (
        <article className="rating">
            <p>{ratings}</p>
        </article>
    )
}

export default Rating