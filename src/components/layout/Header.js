import React from 'react'
import { Link } from 'react-router-dom'

function Header() {

    // TODO: Title changes on link clicks from Memory Game to About to To Do List
    let headerTitle = 'Memory Game';
    const headerText = ['Memory Game','About','To Do List'];
    const getName = () => {
        return headerTitle = 'it works!';
    }
    return (
        <header className="header-section">
            <h1>Term Project - {headerTitle}</h1>
            <Link to ="/" onClick={getName} className="link-style">Memory </Link>|
            <Link to ="/about" onClick={getName} className="link-style"> About </Link>|
            <Link to ="/todo" onClick={getName} className="link-style"> To Do</Link>
        </header>
    )
}

export default Header;