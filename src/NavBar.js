import React, { Component } from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom';

export default class NavBar extends Component {
    render() {
        return (
        <nav className="fill">
            <ul className="nav__menu">
                <li><Link className="a" to="/contact">contact</Link></li>
                <li><Link className="a" to="/resume">resume</Link></li>
                <li><Link className="a" to="/projects">projects</Link></li>
                
                
            </ul>
            </nav>
        )
    }
}
