import React, { useEffect, useState } from 'react'
import Modal from 'react-modal';
import NewTransaction from '../components/NewTransaction';
import Transaction from '../components/Transaction';
import Button from '../components/elements/Button'

import { apiUrl } from '../env';
import './Overview.css'
import ButtonVanilla from '../components/elements/ButtonVanilla';
import Input from '../components/elements/Input';

const customStyles = {
    content: {
        padding: 'auto',
        margin: 'auto',

        borderRadius: '6px',
        boxShadow: "0 0.5em 1em -0.125em rgb(10 10 10 / 10%),0 0 0 1px rgb(10 10 10 / 2%)",

        width: "fit-content"
    }
};

function Overview() {
    const [transactions, setTransactions] = useState(null)
    const [modalIsOpen, setIsOpen] = React.useState(false);

    useEffect(() => {
        fetchData()
    }, [])

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
    }

    function closeModal() {
        fetchData();
        setIsOpen(false);
    }

    async function fetchData() {
        const res = await fetch(apiUrl + "/transactions");
        setTransactions(await res.json())
    }

    function renderTransactions() {
        if (transactions == null) return
        return (
            transactions.map((transaction,index) => <Transaction key={index} transaction={transaction} />)
        )
    }

    return (
        <div className="Overview">
            <div className="Header">
                <div className="Filters">
                    <Input type="checkbox" label="Mensais"></Input>
                    <Input type="checkbox" label="Unicos"></Input>
                    <Input type="checkbox" label="Parcelas"></Input>
                    <></>
                    <Input type="checkbox" label="Entradas"></Input>
                    <Input type="checkbox" label="Saídas"></Input>
                </div>
                <div className="NewTransaction">
                    <Button onClick={openModal} title="Novo Lancamento"></Button>
                </div>
            </div>

            <div className="Month-Buttons">
                <ButtonVanilla title="Jan"></ButtonVanilla>
                <ButtonVanilla title="Fev"></ButtonVanilla>
                <ButtonVanilla title="Mar"></ButtonVanilla>
                <ButtonVanilla title="Abr"></ButtonVanilla>
                <ButtonVanilla title="Mai"></ButtonVanilla>
                <ButtonVanilla title="Jun"></ButtonVanilla>
                <ButtonVanilla title="Jul"></ButtonVanilla>
                <ButtonVanilla title="Ago"></ButtonVanilla>
                <ButtonVanilla title="Set"></ButtonVanilla>
                <ButtonVanilla title="Out"></ButtonVanilla>
                <ButtonVanilla title="Nov"></ButtonVanilla>
                <ButtonVanilla title="Dez"></ButtonVanilla>
            </div>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
                style={customStyles}
                ariaHideApp={false}
            >
                <NewTransaction />
            </Modal>
            {renderTransactions()}
        </div>
    )
}

export default Overview
