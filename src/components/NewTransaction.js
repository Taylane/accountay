import React, { useEffect, useState } from "react";
import styles from "./NewTransaction.module.scss";
import { apiUrl } from "../env";

import TextField from "./elements/TextField/TextField";
import RadioButton from "./elements/RadioButton/RadioButton";
import Select from "./elements/Select/Select";
import DatePicker from "./elements/DatePicker/DatePicker";
import MoneyInput from "./elements/MoneyInput/MoneyInput";
import NewTransactionFooter from "./NewTransactionFooter/NewTransactionFooter";

const formFields = {
  transactionTypes: [
    { value: 1, label: "Saída" },
    { value: 2, label: "Entrada" },
  ],
  recurrencesTypes: [
    { value: 1, label: "Mensal" },
    { value: 2, label: "Único" },
    { value: 3, label: "Parcela" },
  ],
};

function NewTransaction({ closeModal }) {
  const [persons, setPersons] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    total: "",
    type: 1,
    recurrency: 1,
    date: new Date().toISOString().split("T")[0],
    installments: 1,
  });

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const res = await (await fetch(apiUrl + "/persons")).json();

    setPersons(res.map((person) => ({ ...person, amount: "" })));
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
      parts: persons.filter(
        (person) => person.amount !== 0 && person.amount !== ""
      ),
    };
    // const res = await postData(body);
    // if (res.status === 201) {
    //     closeModal();
    // }
  }

  function handleFormChange(key, value) {
    setFormData({ ...formData, [key]: value });
  }

  function handlePersonFormChange(person, value) {
    setPersons(
      persons.map((innerPerson) => {
        if (innerPerson.id == person.id) {
          innerPerson.amount = value;
        }
        return innerPerson;
      })
    );
  }

  return (
    <form className={styles.newTransaction} id="NewTransactionForm">
      <header className={styles.header}>
        <p>Nova Transação</p>
      </header>
      <div className={styles.form}>
        <p className="headline-5">Informações Gerais:</p>
        <div className={styles.informations}>
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
          <RadioButton
            options={formFields.transactionTypes}
            label="Tipo de movimento:"
            value={formData.type}
            onChange={(value) => handleFormChange("type", value)}
            required
          />
          <DatePicker
            label="Data"
            value={formData.date}
            onChange={(value) => handleFormChange("date", value)}
          />

          <Select
            options={formFields.recurrencesTypes}
            label="Recorrencia:"
            value={formData.recurrency}
            onChange={(value) => handleFormChange("recurrency", value)}
            required
          />

          <TextField
            label="Quantidade de Parcelas"
            value={formData.installments}
            onChange={(value) => handleFormChange("installments", value)}
            required
            style={{ visibility: formData.recurrency == 3 ? "" : "hidden" }}
          />
        </div>

        <div>
          <p className="headline-5">Pessoas:</p>
          <div className={styles.persons}>
            {persons &&
              persons.map((person, index) => {
                return (
                  <label
                    className="Person-Label"
                    key={index}
                    htmlFor={person.name}
                  >
                    <MoneyInput
                      label={person.name}
                      value={person.amount}
                      onChange={(value) =>
                        handlePersonFormChange(person, value)
                      }
                    />
                  </label>
                );
              })}
          </div>
        </div>
      </div>
      <NewTransactionFooter
        formData={formData}
        personData={persons}
        closeModal={closeModal}
        submitForm={submitForm}
      />
    </form>
  );
}

export default NewTransaction;
