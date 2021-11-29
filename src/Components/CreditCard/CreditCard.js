import React from 'react'

function CreditCard({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) {
  let cssArray = []
  cssArray.push('creditcard')
  cssArray.push(getCardTypeClass(type))
  const classes = cssArray.join(" ")
  return (
    <div className={classes} style={{ backgroundColor: bgColor, color }}>
      <h2>{number}</h2>
      <p>Expires {expirationMonth}/{expirationYear} {bank}</p>
      <p>{owner}</p>
    </div>
  )
}

export default CreditCard
//Helpers :
//OverKill for just 2 type, but we can addd more  easily:
function getCardTypeClass(type) {
  switch (type) {
    case 'Master Card':
      return "master"
    case 'Visa':
      return 'visa'
  }
}