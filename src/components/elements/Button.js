import React, { Fragment } from 'react'
import './Button.css'

function Button({ onClick, title }) {
    return (
        <Fragment>
            <button className="Button" onClick={onClick}>
                {title}
            </button>
        </Fragment>
    )
}

export default Button
