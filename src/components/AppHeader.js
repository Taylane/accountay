import React from 'react'
import { Link } from 'react-router-dom';

import './AppHeader.scss';

function AppHeader() {
    return (
        <header className="App-header">
            <h1>Accountay</h1>
            <nav>
                <Link className="App-link" id="home" to="/">Home</Link>
                <Link className="App-link" id="overview" to="/overview">Overview</Link>
                <Link className="App-link" id="income" to="/income">Income</Link>
                <Link className="App-link" id="outcome" to="/outcome">Outcome</Link>
            </nav>
        </header>
    )
}

export default AppHeader
