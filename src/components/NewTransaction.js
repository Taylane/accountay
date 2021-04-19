import React, { useEffect, useState } from 'react'
import Input from '../components/elements/Input'
import Button from '../components/elements/Button'

import { apiUrl } from '../env';

import 'bulma/css/bulma.min.css'
import './NewTransaction.css'
import TextField from './elements/TextField';
import RadioButton from './elements/RadioButton';
import Select from './elements/Select';

const formFields = {
    transactionTypes: [
        { value: 1, label: "Saída" },
        { value: 2, label: "Entrada" }
    ],
    recurrencesTypes: [
        { value: 1, label: "Mensal" },
        { value: 2, label: "Único" },
        { value: 3, label: "Parcela" }
    ]
}

function NewTransaction() {
    const [persons, setPersons] = useState(null)
    const [formData, setFormData] = useState({
        name: "",
        total: "",
        type: 1,
        recurrency: 1

    });
    const [personData, setPersonData] = useState([]);

    useEffect(() => {
        fetchData()
    }, [])

    async function fetchData() {
        const res = await fetch(apiUrl + "/persons");
        setPersons(await res.json())
    }

    async function postData(event) {
        event.preventDefault();
        await fetch(apiUrl + "/transactions", {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }, body: JSON.stringify({ ...formData, parts: personData })
        });
    }

    function handleFormChange(key, value) {
        setFormData({ ...formData, [key]: value })
    }

    function handlePersonFormChange(person, value) {
        personData[person.id] = { ...person, amount: Number(value) }
        setPersonData(personData)
    }

    return (
        <form className="NewTransaction">
            <header className="Transaction-Header">
                <p>Novo Lançamento</p>
            </header>
            <div className="Transaction-Form">
                <p>Informações</p>
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
                    required />

                <RadioButton
                    options={formFields.transactionTypes}
                    label="Tipo de movimento:"
                    value={formData.type}
                    onChange={(value) => handleFormChange('type', value)}
                    required />

                <Select
                    options={formFields.recurrencesTypes}
                    label="Recorrencia:"
                    value={formData.recurrency}
                    onChange={(value) => handleFormChange('recurrency', value)}
                    required />
                <div className="Person-Form">
                    <p>Pessoas</p>
                    {persons && personData && persons.map((person, index) =>
                        (
                            <label key={index} htmlFor={person.name}>{person.name}
                                <TextField
                                    label={'Valor por pessoa'}
                                    // value={personData[person.id].name}
                                    onChange={(value) => handlePersonFormChange(person, value)}
                                    type="number"
                                    required />
                            </label>
                        )
                    )}
                </div>
            </div>
            <div className="Action-Buttons">
                <Button title="Cancelar" />
                <Button title="Gravar" onClick={postData} />
            </div>
        </form>
    )
}

export default NewTransaction
