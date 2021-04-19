import React, { Fragment } from 'react'
import './ButtonVanilla.css'

function ButtonVanilla({ onClick, title }) {
    return (
        <Fragment>
            <button className="Button-Vanilla" onClick={onClick}>
                {title}
            </button>
        </Fragment>
    )
}

export default ButtonVanilla
