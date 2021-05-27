import React, { Fragment } from "react";
import styles from "./TextField.module.scss";

function TextField({ value, label, onChange, ...props }) {
  return (
    <div className={styles.textField} {...props}>
      <input
        type="text"
        value={value}
        placeholder=" "
        className={styles.input}
        onChange={({ target }) => onChange(target.value)}
      />
      <label className={styles.label}>
        {label} {props.required ? "*" : ""}
      </label>
    </div>
  );
}

export default TextField;
