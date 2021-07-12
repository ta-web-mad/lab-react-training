import './BoxColor.css';

const BoxColor = (props) => {

    let r = props.r.toString(16);
    r.length < 2 && (r = '0' + r);

    let g = props.g.toString(16);
    g.length < 2 && (g = '0' + g);

    let b = props.b.toString(16);
    b.length < 2 && (b = '0' + b);

    return (
        <article className="box-color" style={{ backgroundColor: '#' + r+g+b }}>
            <p>
                rgb({props.r},{props.g},{props.b})
            </p>

            <p>
                #{r}{g}{b}
            </p>
        </article>
    )
}

export default BoxColor;