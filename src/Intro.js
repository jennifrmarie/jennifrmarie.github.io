import React, { Component } from 'react'
import './Intro.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class Intro extends Component {
    render() {
        return (
            <div className="intro__section">
                <div className="name__section">
                <h1 className="name__header">Hi, I'm Jen{'  '}<FontAwesomeIcon icon='ellipsis-h'></FontAwesomeIcon></h1>
                <h4>Full Stack Developer</h4>
                </div>
                
                <div className="aboutme__section">
                    <span className="aboutme">
                    I'm a recent graduate out of Atlanta, Georgia. 
                    I have a passion for the user experience and
                    interface, I love connecting the front to the back end, 
                    and I thrive when I'm working on a team of other rad developers.
                    </span>
                    <span className="about_me">
                    When I'm not staring at my computer, you can find 
                    me drinking coffee, hanging out with my dogs, or doing the
                    Downward Facing Dog. 
                    </span>
                    
                
                    

                </div>
                
            </div>
        )
    }
}
