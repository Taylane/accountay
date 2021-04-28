import React, { useEffect, useState } from 'react'
import './Balance.scss'
import { toMoney } from '../utils/money'
import { theme } from '../theme'
import Loader from './elements/Loader'
import { setTimeout } from 'timers';

function Balance({ transactions }) {
    const [income, setIncome] = useState(0)
    const [outcome, setOutcome] = useState(0)
    const [total, setTotal] = useState(0)

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (transactions == null) {
            setLoading(true)
            return
        }
        setLoading(true)

        let income = 0;
        let outcome = 0;
        transactions.map((transaction) => {
            if (transaction.type === 1) outcome += transaction.total
            if (transaction.type === 2) income += transaction.total
        })

        setIncome(income)
        setOutcome(outcome)
        setTotal(income - outcome)
        setTimeout(() => setLoading(false), 100)

    }, [transactions])

    function getColorStyle(value) {
        return { color: value >= 0 ? theme.colors.darkGreen : theme.colors.red };
    }

    function renderValue(value) {
        if (loading) {
            return <Loader />;
        }
        return toMoney(Math.abs(value));
    }

    return (
        <div className="Balance">
            <div>
                <h3>Entrada: </h3>
                <h3 style={getColorStyle(income)}>{renderValue(income)}</h3>

            </div>
            <div>
                <h3>Saída: </h3>
                <h3 style={getColorStyle(outcome)}>{renderValue(outcome)}</h3>
            </div>
            <div>
                <h3>Balanço: </h3>
                <h3 style={getColorStyle(total)}>{renderValue(total)}</h3>
            </div>
        </div>
    )
}

export default Balance
