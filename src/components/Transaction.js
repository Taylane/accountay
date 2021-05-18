import React from 'react'
import TransactionPart from './TransactionPart'

import './Transaction.scss';
import { getRecurrencyName } from '../utils/enums'
import { toMoney } from '../utils/money'

function Transaction({ transaction }) {
    function getTransactionClassName() {
        return transaction.type === 1 ? 'Outcome' : 'Income'
    }
    return (
        <tr className="Transaction">
            <td className={getTransactionClassName()}>
                <p >{new Date(transaction.date).getDay().toString().padStart(2, '0')}</p>
            </td>
            <td><p >{getRecurrencyName(transaction.recurrency)}</p></td>
            <td><p >{toMoney(transaction.total)}</p></td>
            <td><p >{transaction.name}</p></td>
            <td>
                {transaction && transaction.parts.map((part, index) =>
                    <p key={index} className={getTransactionClassName() + "-Part"}>{toMoney(part.amount)}</p>
                )}
            </td>
            <td>
                {transaction && transaction.parts.map((part, index) =>
                    <p key={index}>{part.name}</p>
                )}
            </td>
        </tr>
    )
}

export default Transaction