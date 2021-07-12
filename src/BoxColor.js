import { rgb } from "color"

const BoxColor = props => {

    return (

        <article className="random-box" style={{ backgroundColor: rgb(props.r,props.g,props.b) }}>
            <h5>rgb({props.r},{props.g},{props.b})</h5>
        </article>
    )
}

export default BoxColor