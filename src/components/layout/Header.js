import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <header style={headerStyle}>
            <h1>Term Project - Memory Game</h1>
            <Link to ="/" style={linkStyle}>Memory </Link>|
            <Link to ="/about" style={linkStyle}> About </Link>|
            <Link to ="/todo" style={linkStyle}> To Do</Link>
        </header>
    )
}

const headerStyle = {
    backgroundColor: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}

const linkStyle = {
    color: '#fff',
    textDecoration: 'none'
}

export default Header;