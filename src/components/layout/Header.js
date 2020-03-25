import React from 'react'
import { Link } from 'react-router-dom'

function Header() {

    // TODO: Title changes on link clicks from Memory Game to About to To Do List
    return (
        <header className="header-section">
            <h1>Term Project - Memory Game</h1>
            <Link to ="/" className="link-style">Memory </Link>|
            <Link to ="/about" className="link-style"> About </Link>|
            <Link to ="/todo" className="link-style"> To Do</Link>
        </header>
    )
}

export default Header;