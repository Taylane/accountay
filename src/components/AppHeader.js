import React from 'react'
import { Link } from 'react-router-dom';

import './AppHeader.scss';

function AppHeader() {
    return (
        <header className="App-header">
            <p>Accountay</p>
            <nav>
                <Link className="App-link" id="home" to="/">Home</Link>
                {/* <Link className="App-link" id="overview" to="/overview">Overview</Link> */}
                <Link className="App-link" id="income" to="/income">Entradas</Link>
                <Link className="App-link" id="outcome" to="/outcome">Saídas</Link>
                <Link className="App-link" id="outcome" to="/outcome">Grupo</Link>
            </nav>
        </header>
    )
}

export default AppHeader
