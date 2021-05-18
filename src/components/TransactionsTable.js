import React, { useEffect, useState, Fragment } from 'react'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import Transaction from '../components/Transaction';


import './TransactionsTable.scss'
import { traverseTwoPhase } from 'react-dom/cjs/react-dom-test-utils.development';

const headers = ['Dia',
    'Tipo',
    'Valor Total',
    'Nome',
    ['Valor', 'Pessoa']];

function TransactionsTable({ transactions }) {
    if (transactions == null || transactions.length === 0) return (<p className="headline-5">Não há transações neste periodo!</p>)

    function renderTransactions() {
        return (
            transactions.map((transaction, index) => <Transaction key={index} transaction={transaction} />)
        )
    }

    return (
        <table className="Transaction-Table">
            <thead rowp="2">
                <tr>
                    <th>
                        <p>&nbsp;Dia<ExpandMoreIcon fontSize="small" /></p>
                    </th>
                    <th>
                        <p>Tipo<ExpandMoreIcon fontSize="small" /></p>
                    </th>
                    <th>
                        <p>Valor Total<ExpandMoreIcon fontSize="small" /></p>
                    </th>
                    <th>
                        <p>Nome<ExpandMoreIcon fontSize="small" /></p>
                    </th>
                    <th>
                        <p>Valor<ExpandMoreIcon fontSize="small" /></p>
                    </th>
                    <th>
                        <p>Pessoa<ExpandMoreIcon fontSize="small" /></p>
                    </th>
                </tr>
            </thead>
            <tbody id="Transactions">
                {renderTransactions()}
            </tbody>
        </table>
    )
}

export default TransactionsTable
