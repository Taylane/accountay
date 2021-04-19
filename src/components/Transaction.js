import React, { useEffect, useState } from 'react'
import TransactionPart from './TransactionPart'

import './Transaction.css'
import { apiUrl } from '../env';
import { getRecurrencyName, getTypeName } from '../utils/enums'

import { theme } from '../theme'


function Transaction({ transaction }) {
    function getTransactionTypeStye() {
        return transaction.type == 1 ? { borderLeft: `5px solid ${theme.colors.red}` } : { borderLeft: `5px solid ${theme.colors.green}` }
    }
    return (
        <div className="transaction" style={getTransactionTypeStye()} >
            <div>
                <span>{getRecurrencyName(transaction.recurrency)}</span>
                <span>{transaction.total.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</span>
                <span>{transaction.name}</span>
            </div>
            <div>
                {transaction && transaction.parts.map((part,index) => <TransactionPart key={index} part={part} style={getTransactionTypeStye()} />)}
            </div>
        </div>
    )
}

export default Transaction