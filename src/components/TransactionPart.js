import React from 'react'

// import 'bulma/css/bulma.min.css'
import './TransactionPart.scss'
import { toMoney } from '../utils/money'
import { Fragment } from 'react'

function TransactionPart({ part, className }) {
    return (
        <Fragment className="Transaction-Part">
            <td
                className={className}>
                <span className="Amount">
                    {toMoney(part.amount)}
                </span>

            </td>
            <td>
                <span>{part.name}</span>
            </td>
        </Fragment>
    )
}

export default TransactionPart
