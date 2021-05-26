import React from "react";
import styles from "./RadioButton.module.scss";

function RadioButton({ label, value, onChange, options, ...props }) {
  return (
    <div className={styles.container}>
      <span className={styles.title}>{label}</span>

      {options &&
        options.map((option, index) => (
          <div className={styles.radio} key={index}>
            <input
              type="radio"
              name="radio"
              id={index}
              className={styles.input}
              value={option.value}
              onChange={({ target }) => onChange(Number(target.value))}
            />
            <label htmlFor={index} className={styles.label}>
              {option.label}
            </label>
          </div>
        ))}
    </div>
  );
}

export default RadioButton;
