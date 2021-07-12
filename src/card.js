import './card.css';

const CreditCard = (props) => {

    let expirationYear = props.expirationYear
    const arrYear = expirationYear.slice(2)

    let month = props.expirationMonth
    let monthAdapted = ''
    for (let i = 0; i < month.length; i++) {

        if (month.length <= 1) {
            monthAdapted = 0 + month
        }
    }

    let card = props.number
    let hideNum = []

    for (let i = 0; i < card.length; i++) {
       //me falta añadir un espacio cada 4 caracteres
        if (i < card.length - 4) {
            hideNum.push("*");
        } else {
            hideNum.push(card[i]);
        }
    }
    hideNum.join("")


    return (


        <article className="container ">
            <div class="row">
                <div class="col-6 cc">
                    <div class="row first">
                        <img className="logoBank" src={props.type} alt="logoBank" />
                    </div>
                    <br></br>
                    <div class="row second">
                        <p className="creditNum">{hideNum}</p>
                    </div>
                    <div class="row third">
                        <p>Expires: {monthAdapted}/{arrYear}{props.bank}</p>

                    </div>
                    <p>{props.owner}</p>
                </div>
            </div>
        </article>



    )

}


export default CreditCard