import React, { Fragment } from 'react'
import './ButtonVanilla.css'

function ButtonVanilla({ onClick, title, className }) {
    return (
        <Fragment>
            <button className={`Button-Vanilla ${className}`} onClick={onClick} >
                {title}
            </button>
        </Fragment>
    )
}

export default ButtonVanilla
