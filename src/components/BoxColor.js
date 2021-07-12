import './BoxColor.css'

const BoxColor = props =>{
const red = props.r
const green = props.g
const blu = props.b
    const bgColor = 'rgb('+red+','+green+','+blu+')'
    const hexColor = '#' + props.r.toString(16) + props.g.toString(16) + props.b.toString(16)
return (
    <div className='boxcolor' style={{ backgroundColor: bgColor}}>
        <p>{bgColor}</p>
        <p>{hexColor}</p>
    </div>
)

}


export default BoxColor