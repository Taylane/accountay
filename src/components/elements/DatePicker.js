import { TextField } from '@material-ui/core'
import React from 'react'

function DatePicker({ label, value, onChange}) {
    console.log(new Date().toISOString().split('T')[0]);
    return (
        <form noValidate>
            <TextField
                id="date"
                label={label}
                type="date"
                value={value}
                onChange={({ target }) => onChange(target.value)}
                defaultValue={new Date().toISOString().split('T')[0]}
                InputLabelProps={{
                    shrink: true,
                }}
            />
        </form>
    )
}

export default DatePicker
