import React, { useEffect, useState, Fragment } from 'react'
import Modal from 'react-modal';
import NewTransaction from '../components/NewTransaction';
import Transaction from '../components/Transaction';
import Button from '../components/elements/Button'

import { apiUrl } from '../env';
import './Overview.css'
import ButtonVanilla from '../components/elements/ButtonVanilla';
import Input from '../components/elements/Input';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const customStyles = {
    content: {
        padding: '0',
        // margin: 'auto',

        borderRadius: '6px',
        boxShadow: "0 0.5em 1em -0.125em rgb(10 10 10 / 10%),0 0 0 1px rgb(10 10 10 / 2%)",
    }
};

const months = [
    { name: 'Jan', value: 1 },
    { name: 'Fev', value: 2 },
    { name: 'Mar', value: 3 },
    { name: 'Abr', value: 4 },
    { name: 'Mai', value: 5 },
    { name: 'Jun', value: 6 },
    { name: 'Jul', value: 7 },
    { name: 'Ago', value: 8 },
    { name: 'Set', value: 9 },
    { name: 'Out', value: 10 },
    { name: 'Nov', value: 11 },
    { name: 'Dez', value: 12 },
]

function Overview() {
    const [transactions, setTransactions] = useState(null)
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [monthSelected, setMonthSelected] = React.useState(new Date().getMonth() + 1);

    useEffect(() => {
        fetchData(monthSelected)
        console.log('mudou mes ', monthSelected);

    }, [monthSelected])

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
    }

    function closeModal() {
        fetchData();
        setIsOpen(false);
    }

    async function fetchData(month = '') {
        // ?date_like=2021-04"
        const res = await fetch(apiUrl + "/transactions?date_like=2021-" + monthSelected.toString().padStart(2, '0'));
        setTransactions(await res.json())
    }

    function renderTransactions() {
        if (transactions == null) return
        return (
            <div className="Transactions">
                {transactions.map((transaction, index) => <Transaction key={index} transaction={transaction} />)}
            </div>
        )
    }

    return (
        <div className="Overview">
            <div className="Fab-Div">
                <Fab className="Fab" color="#00DCC2" aria-label="add" onClick={openModal} title="Novo Lancamento">
                    <AddIcon />
                </Fab>
            </div>
            <div>
                {months.map((month, index) => {
                    index = index + 1;
                    return <ButtonVanilla
                        key={index}
                        title={month.name}
                        onClick={() => setMonthSelected(index)}
                        className={index === monthSelected ? 'Selected-Button' : ''}
                    />
                })}
            </div>
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

            {renderTransactions()}
        </div>

    )
}

export default Overview
