import './Creditcard.css'


const CreditCard = (props) => {


    let bg =`${props.bgColor}`
    let col= `${props.color}`

    return (
        <article className='creditcard'>
            
                <div style = {{backgroundColor : bg, color: col}}>
                    <img src='' />
                    <p>{props.value}</p>
                    <p>{props.number}</p>
                    <p>{props.expirationMonth}</p>
                    <p>{props.expirationYear}</p>
                    <p>{props.bank}</p>
                    <p>{props.owner}</p>
                </div>
           
        </article>
    )}

export default CreditCard