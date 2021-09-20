import './FaceBook.css'
const Button = (props) => {

    const {text} = props

    return(
        <div className="facebook-button">
            <button className="button facebook-button">{text}</button>
        </div>
    )

}

export default Button
