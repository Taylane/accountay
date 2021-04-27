import React from 'react'
import TransactionPart from './TransactionPart'

import './Transaction.css';
import { getRecurrencyName } from '../utils/enums'
import { toMoney } from '../utils/money'

import { theme } from '../theme'


function Transaction({ transaction }) {
    function getTransactionTypeStye() {
        return transaction.type === 1 ? { borderLeft: `5px solid ${theme.colors.red}` } : { borderLeft: `5px solid ${theme.colors.green}` }
    }
    return (
        <div className="Transaction" style={getTransactionTypeStye()} >
            <div className="Transaction-Body">
                <span>{getRecurrencyName(transaction.recurrency)}</span>
                <span>{transaction.recurrency !== 1 ? new Date(transaction.date).toLocaleDateString() : ''}</span>
                <span>{toMoney(transaction.total)}</span>
                <span>{transaction.name}</span>
            </div>
            <div>
                {transaction && transaction.parts.map((part, index) => <TransactionPart key={index} part={part} style={getTransactionTypeStye()} />)}
            </div>
        </div>
    )
}

export default Transaction