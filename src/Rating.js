import './Rating.css'

const Rating = (props) => {
    const flooring = (num) => {
        return Math.floor(num)
    }

    const howManyStars = (num) => {
        switch (num) {
            case 1:
                return '★☆☆☆☆'
            case 2:
                return '★★☆☆☆'
            case 3:
                return '★★★☆☆'
            case 4:
                return '★★★★☆'
            case 5:
                return '★★★★★'
            default:
                return '☆☆☆☆☆'
        }
    }

    return (
      <p>{howManyStars(flooring(props.children))}</p>
    )
}

export default Rating