import React, { useState } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { blue } from '@material-ui/core/colors';
import { withStyles } from '@material-ui/core/styles';

import './RadioButton.css'
import { Label } from 'theme-ui';

const CustomRadio = withStyles({
    root: {
        color: blue[500],
        '&$checked': {
            color: blue[700],
        },
    },
    checked: {},
})((props) => <Radio color="default" {...props} />);

function RadioButton({ label, value, onChange, options, ...props }) {
    return (
        <FormControl component="fieldset" {...props}>
            <FormLabel component="legend">{label}</FormLabel>
            <RadioGroup
                name={label}
                value={value}
                onChange={({ target }) => {
                    onChange(Number(target.value));
                }}            >
                {options && options.map((option,index) => (
                    <FormControlLabel key={index} value={option.value} control={<CustomRadio/>} label={option.label} />
                ))}
            </RadioGroup>
        </FormControl>
    )
}

export default RadioButton
