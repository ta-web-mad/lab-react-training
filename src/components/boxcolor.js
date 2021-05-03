import './boxcolor.css'

const Boxcolor = props => {
    const { r, g, b } = props
    const color = (r, g, b)
    console.log(`rgb(${r},${g},${b})`);

    let divStyle = {
        backgroundColor: `rgb(${r},${g},${b})`,
        textAlign: 'center',

    };

    return (<div style={divStyle} className="boxcolor">rgb({r},{g},{b})</div>)
}

export default Boxcolor