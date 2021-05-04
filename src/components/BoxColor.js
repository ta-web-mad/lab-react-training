import './BoxColor.css'

const BoxColor = props => {


    const hero = `rgb(${props.r}, ${props.g}, ${props.b})`

    return (
        <article>

            <button className='btn-box' style={{ background: hero }}>
                rgb({props.r}, {props.g}, {props.b})
        </button>

        </article >
    )
}

export default BoxColor