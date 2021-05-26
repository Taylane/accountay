import React from "react";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import { Fragment } from "react";

function MoneyInput({ value, label, onChange, ...props }) {
  return (
    <Fragment>
      <InputLabel htmlFor="money-input">{label}</InputLabel>
      <Input
        id="money-input"
        value={value}
        onChange={({ target }) => {
            console.log(value);
            console.log(target.value.match("\d"));
          if (target.value.match("\d")!=null) {
              console.log('mached');
            return;
          }
          console.log('not mached');

          onChange(target.value);
        }}
        startAdornment={<InputAdornment position="start">R$</InputAdornment>}
      />
    </Fragment>
  );
}

export default MoneyInput;
