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
                <span className="body-1" style={{ width:"10%", textAlign:"start" }}>{new Date(transaction.date).getDay().toString().padStart(2, '0')}</span>
                <span className="body-1" style={{ width:"20%", textAlign:"start" }}>{getRecurrencyName(transaction.recurrency)}</span>
                <span className="body-1" style={{ width:"20%", textAlign:"start" }}>{toMoney(transaction.total)}</span>
                <span className="body-1" style={{ width:"50%", textAlign:"start" }}>{transaction.name}</span>
            </div>
            <div className="Transaction-Parts">
                {transaction && transaction.parts.map((part, index) => <TransactionPart key={index} part={part} className={getTransactionClassName()} />)}
            </div>
        </div>
    )
}

export default Transaction