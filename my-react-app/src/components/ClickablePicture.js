import './ClickablePicture.css'

const ClickablePicture = props => {

    return (
        <section class="clickablePicture">
            <img src={props.img}></img>
        </section>
    )
}

export default ClickablePicture