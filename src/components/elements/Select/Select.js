import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import { default as MuiSelect } from "@material-ui/core/Select";
import "./Select.module.scss";

function Select({ options, label, value, onChange, ...props }) {
  return (
    <div className="Select">
      <FormControl
        {...props}
        
        style={{ marginTop: "10px", minWidth:"80px" }}
      >
        <InputLabel id={label}>{label}</InputLabel>
        <MuiSelect
          labelId={label}
          id={label}
          value={value}
          onChange={({ target }) => onChange(Number(target.value))}
        >
          {options &&
            options.map((option) => (
              <MenuItem key={option.label} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
        </MuiSelect>
      </FormControl>
    </div>
  );
}

export default Select;
