import React from 'react'

// import 'bulma/css/bulma.min.css'
import './TransactionPart.css'
import { toMoney } from '../utils/money'

function TransactionPart({ part, className }) {
    return (
        <div className={"TransactionPart " + className}>
            <span className="Amount" style={{width:"30%"}}>
                {toMoney(part.amount)}
            </span>
            <span style={{width:"70%"}}>{part.name}</span>
        </div>
    )
}

export default TransactionPart
