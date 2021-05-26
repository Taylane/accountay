import React from "react";
import styles from "./DatePicker.module.scss";
import { TextField } from "@material-ui/core";

function DatePicker({ label, value, onChange }) {
  console.log(new Date().toISOString().split("T")[0]);
  return (
    <div className={styles.datePicker}>
      <TextField
        id="date"
        label={label}
        type="date"
        value={value}
        onChange={({ target }) => onChange(target.value)}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </div>
  );
}

export default DatePicker;
