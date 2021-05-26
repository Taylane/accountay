import React from "react";
import styles from "./MoneyInput.module.scss";

function MoneyInput({ value, label, onChange, ...props }) {
  return (
    <div className={styles.moneyInput}>
      <input
        type="number"
        value={value}
        placeholder="R$"
        className={styles.input}
        onChange={({ target }) => onChange(target.value)}
        {...props}
      />
      <label className={styles.label}>
        {label} {props.required ? "*" : ""}
      </label>
    </div>
  );
}

export default MoneyInput;
