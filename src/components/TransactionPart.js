import React from 'react'

import 'bulma/css/bulma.min.css'
import './TransactionPart.css'

function TransactionPart({ part, style }) {
    return (
        <div className="TransactionPart" style={style}>
            <span className="Amount">
                {part.amount.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
            </span>
            <span>{part.name}</span>
        </div>
    )
}

export default TransactionPart
