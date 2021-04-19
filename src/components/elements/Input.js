import React from 'react'
import "./Input.css"

function Input({ label, type, onChange }) {
    return (
        <div className="Input" style={{ width: type === 'number' ? "" : "" }}>
            {/* <label > */}
            <input id="input" type={type} style={{ width: type === 'number' ? "" : "" }} onChange={(event) => onChange(event.target.value)} />
            <label htmlFor="input">{label}</label>

            {/* </label> */}
        </div>
    )
}

export default Input
