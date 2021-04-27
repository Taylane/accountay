import React, { useEffect, useState, Fragment } from 'react'
import './Balance.css'
import { toMoney } from '../utils/money'
import { theme } from '../theme'


function Balance({ transactions }) {
    // const [transactions, setTransactions] = useState([])

    const [income, setIncome] = useState(0)
    const [outcome, setOutcome] = useState(0)
    const [total, setTotal] = useState(0)

    useEffect(() => {
        if (transactions == null || transactions.length == 0) return

        let income = 0;
        let outcome = 0;

        transactions.map((transaction) => {
            if (transaction.type === 1) outcome += transaction.total
            if (transaction.type === 2) income += transaction.total
        })

        setIncome(income)
        setOutcome(outcome)
        setTotal(income - outcome)
    }, [transactions])

    function formatValue(value) {
        return toMoney(Math.abs(value));
    }

    function getColorStyle(value) {
        return { color: value >= 0 ? theme.colors.darkGreen : theme.colors.red };
    }

    return (
        <div className="Balance">
            <div>
                <h2>Entrada: </h2>
                <h2 style={getColorStyle(income)}> {formatValue(income)}</h2>
            </div>
            <div>
                <h2>Saída: </h2>
                <h2 style={getColorStyle(outcome)}> {formatValue(outcome)}</h2>
            </div>
            <div>
                <h2>Balanço: </h2>
                <h2 style={getColorStyle(total)}> {formatValue(total)}</h2>
            </div>
        </div>
    )
}

export default Balance
