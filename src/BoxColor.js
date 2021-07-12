import './BoxColor.css'
const BoxColor = props => {

    const r = props.r
    const g = props.g
    const b = props.b
        const color = 'rgb('+r+','+g+','+b+')'

    return (
        <div className='boxColor' style={{backgroundColor: color}} >
            <h3>color</h3>
        </div>
        
    )
}

export default BoxColor