import React, { useEffect, useState, Fragment } from 'react'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import Transaction from '../components/Transaction';


import './TransactionsTable.scss'


function TransactionsTable({ transactions }) {
    function renderTransactions() {
        if (transactions == null || transactions.length == 0) return (<h2>Não há transações neste periodo!</h2>)

        return (
            transactions.map((transaction, index) => <Transaction key={index} transaction={transaction} />)
        )
    }

    return (
        <Fragment>
            <div id="Div-Table-Header">
                <div id="Div-Filter-Transaction">
                    <div className="Filter" style={{ width: "10%" }}>
                        <p  >Dia</p>
                        <ExpandMoreIcon fontSize="small" />
                    </div>
                    <div className="Filter" style={{ width: "20%" }}>
                        <p  >Tipo</p>
                        <ExpandMoreIcon fontSize="small" />
                    </div>
                    <div className="Filter" style={{ width: "20%" }}>
                        <p  >Valor Total</p>
                        <ExpandMoreIcon fontSize="small" />
                    </div>
                    <div className="Filter" style={{ width: "50%" }}>
                        <p  >Nome</p>
                        <ExpandMoreIcon fontSize="small" />
                    </div>
                </div>
                <div id="Div-Filter-Transaction-Part" >
                    <div className="Filter" style={{ width: "30%" }}>
                        <p  >Valor</p>
                        <ExpandMoreIcon fontSize="small" />
                    </div>
                    <div className="Filter" style={{ width: "70%" }}>
                        <p  >Pessoa</p>
                        <ExpandMoreIcon fontSize="small" />
                    </div>
                </div>
            </div>
            <div id="Div-Table-Body">
                {renderTransactions()}
            </div>

        </Fragment>
    )
}

export default TransactionsTable
