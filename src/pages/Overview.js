import React, { useEffect, useState, Fragment } from 'react'
import Modal from 'react-modal';
import Fab from '@material-ui/core/Fab';

import AddIcon from '@material-ui/icons/Add';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import NewTransaction from '../components/NewTransaction';
import Transaction from '../components/Transaction';
import Balance from '../components/Balance'
import ButtonVanilla from '../components/elements/ButtonVanilla';
import Button from '../components/elements/Button'
import TransactionsTable from '../components/TransactionsTable'

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
    const [dateSelected, setdateSelected] = useState(new Date());

    useEffect(() => {
        fetchData(dateSelected)
    }, [dateSelected])

    async function fetchData() {
        let res = await fetch(apiUrl + "/transactions?date_like=2021-" + dateSelected.getMonth().toString().padStart(2, '0') + '&recurrency_ne=1');
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


    return (
        <Fragment>
            <div className="Overview">
                <div id="Div-Page-Header">
                    <span className="Page-Header-Item">{dateSelected.toLocaleDateString('default', { month: 'long' })}</span>
                    <span className="Page-Header-Item">, {dateSelected.getFullYear()}</span>
                    <ExpandMoreIcon className="Page-Header-Item" style={{ width: "2.2188rem", height: "2.125rem" }} />
                </div>
                <div id="Div-Page-Content">
                    <TransactionsTable transactions={transactions} />
                </div>
                <div id="Div-Page-Footer">
                    <Balance transactions={transactions} />
                </div>
            </div>
            {/* <div id="Div-Fab">
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
            </div> */}
        </Fragment >
    )
}

export default Overview
