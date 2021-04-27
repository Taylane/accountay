import React from 'react'

import 'bulma/css/bulma.min.css'
import './TransactionPart.css'
import { toMoney } from '../utils/money'

function TransactionPart({ part, style }) {
    return (
        <div className="TransactionPart" style={style}>
            <span className="Amount">
                {toMoney(part.amount)}
            </span>
            <span>{part.name}</span>
        </div>
    )
}

export default TransactionPart
