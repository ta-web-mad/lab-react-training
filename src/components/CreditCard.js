import './CreditCard.css'

function CreditCard(props){
    
    const divStyle = {
        bgColor: `${props.bgColor}`
    }
    let cardLogo = function(){
        if (props.type === "Visa"){
            return '/img/visa.png';
        }else return '/img/master-card.svg';
    }   
                
    
    return(
        <div className="card-container"
            style = {divStyle}>
            <div class="row">
                <div className="col-md-12">
                 <img src={cardLogo} alt= 'card id'/> 
                </div>
            </div>
            <div className="row">
                <div className="col-md-11">
                    {props.number}
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    Expires {props.expirationMonth}/{props.expirationYear}
                </div>
                <div className="col-md-3">
                    {props.bank}
                </div>
                <div className="col-md-3">
                </div>
            </div>
            <div className="row">
                <div className="col-md-10">
                    {props.owner}
                </div>
            </div>
        </div>

    )
}

export default CreditCard