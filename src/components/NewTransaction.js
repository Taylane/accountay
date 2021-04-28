import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom';

import Input from '../components/elements/Input'
import Button from '../components/elements/Button'

import { apiUrl } from '../env';

// import 'bulma/css/bulma.min.css'
import './NewTransaction.css'
import TextField from './elements/TextField';
import RadioButton from './elements/RadioButton';
import Select from './elements/Select';
import DatePicker from './elements/DatePicker';

const formFields = {
    transactionTypes: [
        { value: 1, label: "Saída" },
        { value: 2, label: "Entrada" }
    ],
    recurrencesTypes: [
        { value: 1, label: "Mensal" },
        { value: 2, label: "Único" },
        // { value: 3, label: "Parcela" }
    ]
}

function NewTransaction({ closeModal }) {
    const [persons, setPersons] = useState(null)
    const [formData, setFormData] = useState({
        name: "",
        total: "",
        type: 1,
        recurrency: 1,
        date: ''
    });
    const [personData, setPersonData] = useState([]);

    useEffect(() => {
        fetchData()
    }, [])

    async function fetchData() {
        const res = await fetch(apiUrl + "/persons");
        setPersons(await res.json())
    }

    async function postData(body) {
        const res = await fetch(apiUrl + "/transactions", {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }, body: JSON.stringify(body)
        });
        return res
    }

    async function submitForm(event) {
        event.preventDefault();
        if (!document.getElementById('NewTransactionForm').reportValidity()) return

        const body = { ...formData, parts: personData.filter((person) => person.amount !== 0) }
        console.log(body);
        const res = await postData(body)
        // if (res.status === 201) {
        //     closeModal();
        // }
    }

    function handleFormChange(key, value) {
        setFormData({ ...formData, [key]: value })
    }

    function handlePersonFormChange(person, value) {
        personData[person.id] = { ...person, amount: Number(value) }
        setPersonData(personData)
    }

    return (
        <form id="NewTransactionForm" className="NewTransaction">
            <header className="Transaction-Header">
                <p>Novo Lançamento</p>
            </header>
            <div className="Transaction-Form">
                <p>Informações</p>
                <div className="Transaction-TextField">
                    <TextField
                        label="Identificador"
                        value={formData.name}
                        onChange={(value) => handleFormChange('name', value)}
                        required />
                    <TextField
                        label="Valor Total"
                        value={formData.total}
                        onChange={(value) => handleFormChange('total', Number(value))}
                        type="number"
                        style={{ width: '15vw' }}
                        required />

                </div>
                <div className="Selects">
                    <DatePicker
                        label="Data"
                        value={formData.date}
                        onChange={(value) => handleFormChange('date', value)}>
                    </DatePicker>
                    <Select
                        options={formFields.recurrencesTypes}
                        label="Recorrencia:"
                        value={formData.recurrency}
                        onChange={(value) => handleFormChange('recurrency', value)}
                        required />
                    <RadioButton
                        options={formFields.transactionTypes}
                        label="Tipo de movimento:"
                        value={formData.type}
                        onChange={(value) => handleFormChange('type', value)}
                        required />


                </div>
                <div >
                    <p>Pessoas</p>
                    <div className="Persons">
                        {persons && personData && persons.map((person, index) =>
                            (
                                <label
                                    className="Person-Label"
                                    key={index}
                                    htmlFor={person.name}>
                                    {person.name}
                                    <TextField
                                        label={'Valor por pessoa'}
                                        // value={personData[person.id].name}
                                        onChange={(value) => handlePersonFormChange(person, value)}
                                        // type="number"
                                        pattern="^\d*(\.\d{0,2})?$" />
                                </label>
                            )
                        )}
                    </div>
                </div>
            </div>
            <div className="Action-Buttons">
                <Button title="Cancelar" onClick={(event) => {
                    event.preventDefault()
                    closeModal()
                }} />
                <Button title="Gravar" onClick={submitForm} />
            </div>
        </form>
    )
}

export default NewTransaction
