import './Greetings.css'

const Greetings = props => {
  
    return (
        <>
            <h1>Greetings</h1>
            <article>
                <div className='greetings'>
                    <p>{props.lang} {props.children}</p>
                </div>

            </article>
        </>
    )
}
export default Greetings