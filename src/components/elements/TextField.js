import React, { Fragment } from "react";

import { default as MuiTextField } from "@material-ui/core/TextField";
import "./TextField.css";

function TextField({ value, label, onChange, ...props }) {
  return (
    <Fragment>
      <MuiTextField
        className="Text-Field"
        id="standard-basic"
        variant="outlined"
        label={label}
        onChange={({ target }) => onChange(target.value)}
        {...props}
      />
    </Fragment>
  );
}

export default TextField;
