import './Rating.css';

const Rating = (props) => {

    const rating = Math.round(props.children);

    let stars = '';
    for (let i = 0; i < 5; i++) {
        i < rating ? stars += '★' : stars += '☆';
    }

    return (
        <article className='rating-article'>
            <p>{stars}</p>
        </article>
    )
}

export default Rating;