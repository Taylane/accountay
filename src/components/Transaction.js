import React from 'react'
import TransactionPart from './TransactionPart'

import './Transaction.scss';
import { getRecurrencyName } from '../utils/enums'
import { toMoney } from '../utils/money'

import { theme } from '../theme'


function Transaction({ transaction }) {
    function getTransactionClassName() {
        return transaction.type === 1 ? 'Outcome' : 'Income'
    }
    return (
        <div className={"Transaction " + getTransactionClassName()} >
            <div className="Transaction-Body">
                <span>{getRecurrencyName(transaction.recurrency)}</span>
                {/* <span>{transaction.recurrency !== 1 ? new Date(transaction.date).toLocaleDateString() : ''}</span> */}
                <span>{toMoney(transaction.total)}</span>
                <span>{transaction.name}</span>
            </div>
            <div className="Transaction-Parts">
                {transaction && transaction.parts.map((part, index) => <TransactionPart key={index} part={part} className={getTransactionClassName()} />)}
            </div>
        </div>
    )
}

export default Transaction