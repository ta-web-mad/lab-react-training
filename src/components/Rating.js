import "./Rating.css"

const Rating = props => {
    let result = ""
    let number = Math.round(props.children)

    for (let i = 0; i < number; i++) {
        result += "★"
    }

    for (let i = number; i < 5; i++) {
        result += "☆"
    }

    return <p>{result}</p>
}

export default Rating