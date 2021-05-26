import React, { Fragment } from "react";
import styles from "./MoneyInput.module.scss";

function MoneyInput({ value, label, onChange, ...props }) {
  return (
    <div className={styles.moneyInput}>
      <label>{label}</label>
      <input
        type="number"
        value={value}
        onChange={({ target }) => onChange(target.value)}
        placeholder="R$"
        {...props}
      ></input>
    </div>
  );
}

export default MoneyInput;
