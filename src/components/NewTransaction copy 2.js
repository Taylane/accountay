import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

import Input from "../components/elements/Input";
import Button from "../components/elements/Button";

import { apiUrl } from "../env";

// import 'bulma/css/bulma.min.css'
import styles from "./NewTransaction.module.scss";
import TextField from "./elements/TextField";
import RadioButton from "./elements/RadioButton";
import Select from "./elements/Select";
import DatePicker from "./elements/DatePicker";
import MoneyInput from "./elements/MoneyInput";

const formFields = {
  transactionTypes: [
    { value: 1, label: "Saída" },
    { value: 2, label: "Entrada" },
  ],
  recurrencesTypes: [
    { value: 1, label: "Mensal" },
    { value: 2, label: "Único" },
    // { value: 3, label: "Parcela" }
  ],
};

function NewTransaction({ closeModal }) {
  const [persons, setPersons] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    total: "",
    type: 1,
    recurrency: 1,
    date: "",
  });
  const [personData, setPersonData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const res = await fetch(apiUrl + "/persons");
    setPersons(await res.json());
  }

  async function postData(body) {
    const res = await fetch(apiUrl + "/transactions", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    return res;
  }

  async function submitForm(event) {
    event.preventDefault();
    if (!document.getElementById("NewTransactionForm").reportValidity()) return;

    const body = {
      ...formData,
      parts: personData.filter((person) => person.amount !== 0),
    };
    console.log(body);
    const res = await postData(body);
    // if (res.status === 201) {
    //     closeModal();
    // }
  }

  function handleFormChange(key, value) {
    setFormData({ ...formData, [key]: value });
  }

  function handlePersonFormChange(person, value) {
    personData[person.id] = { ...person, amount: Number(value) };
    setPersonData(personData);
  }

  return (
    <form className={styles.newTransaction}>
      <header className={styles.header}>
        <p>Nova Transação</p>
      </header>
      <div className={styles.form}>
        <p className="headline-5">Informações</p>
        <div className="Transaction-TextField">
          <TextField
            label="Identificador"
            value={formData.name}
            onChange={(value) => handleFormChange("name", value)}
            required
          />
          <MoneyInput
            label="Valor Total"
            value={formData.total}
            onChange={(value) => handleFormChange("total", value)}
            required
          />
        </div>
        <div className="Selects">
          <DatePicker
            label="Data"
            value={formData.date}
            onChange={(value) => handleFormChange("date", value)}
          ></DatePicker>
          <Select
            options={formFields.recurrencesTypes}
            label="Recorrencia:"
            value={formData.recurrency}
            onChange={(value) => handleFormChange("recurrency", value)}
            required
          />
          <RadioButton
            options={formFields.transactionTypes}
            label="Tipo de movimento:"
            value={formData.type}
            onChange={(value) => handleFormChange("type", value)}
            required
          />
        </div>
        <div>
          <p className="headline-5">Pessoas</p>
          <div className="Persons">
            {persons &&
              personData &&
              persons.map((person, index) => (
                <label
                  className="Person-Label"
                  key={index}
                  htmlFor={person.name}
                >
                  <MoneyInput
                    label={person.name}
                    value={personData[person.id]}
                    onChange={(value) => handlePersonFormChange(person, value)}
                  />
                </label>
              ))}
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <div>
          <h3>Total: </h3>
          <h3>R$ 10,00</h3>
        </div>
        <div>
          <h3>Partes: </h3>
          <h3>R$ 10,00</h3>
        </div>
        <div>
          <h3>Diferença: </h3>
          <h3>R$ 10,00</h3>
        </div>
        <div className={styles.actionButtons}>
          <Button
            variant="Outlined"
            title="Cancelar"
            onClick={(event) => {
              event.preventDefault();
              closeModal();
            }}
          />
          <Button variant="Primary" title="Gravar" onClick={submitForm} />
        </div>
      </div>
    </form>
  );
}

export default NewTransaction;
