import './BoxColor.css'

const BoxColor = props => {
    const rectColor = 'rgb(' + props.r + ',' + props.g + ',' + props.b + ')'
    const hexColor = '#' + props.r.toString(16) + props.g.toString(16) + props.b.toString(16)


    return (
        <div
            className='rect'
            style={{ backgroundColor: rectColor }}
        >{rectColor} <br /> {hexColor}</div>

    )

}

export default BoxColor