import React, { Component } from 'react'
import './NavBar.css'

export default class NavBar extends Component {
    render() {
        return (
        <nav className="fill">
            <ul className="nav__menu">
                {/* <li><a href="#">about me</a></li> */}
                <li><a href="/contact">contact</a></li>
                <li><a href="/resume">resume</a></li>
                <li><a href="/projects">projects</a></li>
                
                
            </ul>
            </nav>
        )
    }
}
