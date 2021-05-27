import React, { useState } from "react";
import styles from "./MoneyInput.module.scss";

function MoneyInput({ value, label, onChange, ...props }) {
  const [previousValue, setPreviousValue] = useState(value);
  const [currentValue, setCurrentValue] = useState(value);

  return (
    <div className={styles.moneyInput}>
      <input
        type="text"
        value={"R$ " + currentValue}
        className={styles.input}
        onInput={({ target }) => {
          var newValue = target.value.replace("R$ ", "").replace(",", ".");
          var retorno = /^\d{0,7}[\.\,]{0,1}\d{0,2}$/.test(newValue)
            ? newValue
            : previousValue;
          setPreviousValue(retorno);
          setCurrentValue(retorno);
        }}
        onBlur={({ target }) =>
          onChange(Number(target.value.replace("R$ ", "")))
        }
        {...props}
      />

      <label className={styles.label}>
        {label} {props.required ? "*" : ""}
      </label>
    </div>
  );
}

export default MoneyInput;
