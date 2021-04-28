import React, { useEffect, useState, Fragment } from 'react'
import Modal from 'react-modal';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

import NewTransaction from '../components/NewTransaction';
import Transaction from '../components/Transaction';
import Balance from '../components/Balance'
import ButtonVanilla from '../components/elements/ButtonVanilla';
import Button from '../components/elements/Button'

import './Overview.scss'

import { apiUrl } from '../env';

const customStyles = {
    content: {
        padding: '0',
        borderRadius: '6px',
        boxShadow: "0 0.5em 1em -0.125em rgb(10 10 10 / 10%),0 0 0 1px rgb(10 10 10 / 2%)",
    }
};

const months = [
    { name: 'Jan' },
    { name: 'Fev' },
    { name: 'Mar' },
    { name: 'Abr' },
    { name: 'Mai' },
    { name: 'Jun' },
    { name: 'Jul' },
    { name: 'Ago' },
    { name: 'Set' },
    { name: 'Out' },
    { name: 'Nov' },
    { name: 'Dez' },
]

function Overview() {
    const [transactions, setTransactions] = useState(null)
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [monthSelected, setMonthSelected] = useState(new Date().getMonth() + 1);

    useEffect(() => {
        fetchData(monthSelected)
    }, [monthSelected])

    async function fetchData() {
        let res = await fetch(apiUrl + "/transactions?date_like=2021-" + monthSelected.toString().padStart(2, '0') + '&recurrency_ne=1');
        let resJson = await res.json();

        res = await fetch(apiUrl + "/transactions?recurrency=1");
        resJson = [...resJson, ...await res.json()]
        setTransactions(resJson)

    }

    //Modal//
    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
    }

    function closeModal() {
        fetchData();
        setIsOpen(false);
    }

    //Render//
    function renderTransactions() {
        if (transactions == null || transactions.length == 0) return (<h2>Não há transações neste periodo!</h2>)

        return (
            transactions.map((transaction, index) => <Transaction key={index} transaction={transaction} />)
        )
    }

    return (
        <div className="Overview">
            <div id="Div-Body">
                <div id="Div-Buttons">
                    {months.map((month, index) => {
                        index = index + 1;
                        return (
                            <ButtonVanilla
                                key={index}
                                title={month.name}
                                onClick={() => setMonthSelected(index)}
                                className={index === monthSelected ? 'Selected-Button' : ''}
                            />)
                    })}
                </div>
                <div id="Div-Transactions">
                    {renderTransactions()}
                </div>
            </div>
            <div id="Div-Fab">
                {!modalIsOpen &&
                    <Fab className="Fab" color="#00DCC2" aria-label="add" onClick={openModal} title="Novo Lancamento">
                        <AddIcon />
                    </Fab>
                }
                <Fragment>
                    <Modal
                        isOpen={modalIsOpen}
                        onAfterOpen={afterOpenModal}
                        onRequestClose={closeModal}
                        contentLabel="Example Modal"
                        style={customStyles}
                        ariaHideApp={false}
                    >
                        <NewTransaction closeModal={closeModal} />
                    </Modal>
                </Fragment>
            </div>

            <Balance transactions={transactions}></Balance>
        </div>
    )
}

export default Overview
