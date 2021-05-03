import './Rating.css'

const Rating = props => {
    const { children } = props

    let stars = Math.floor(Math.round(children))

    const fullStar = '\u2605'
    const emptyStar = '\u2606'
    let element = []

    for (let i = 0; i <= stars - 1; i++) {
        element.push(fullStar)
    }
    for (let j = stars + 1; j <= 5; j++) {
        element.push(emptyStar)
    }

    const fullComponent = (
        <div>
            {element}
        </div>
    )

    return fullComponent
}

export default Rating