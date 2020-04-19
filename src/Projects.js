import React, { Component } from 'react'
import './Projects.css'
import { Route, Link } from 'react-router-dom';

export default class Projects extends Component {
  render() {
    return (
      <div>
          
        <section className="project_1">             
          <img className="project1_sc" alt="screenshot of Reppy, Set, GO!" src="https://i.imgur.com/GGqr0qx.png" width="500" height="300" />
          <p className="project1_desc"><h3 id="project_header">Reppy, Set, GO!</h3> Full-stack fitness fitness app where users can create an
          account and log in using JWT authentication, store their workout on specific date using a Postgres database, and a React client makes
          requests to the RESTful API. 
          <div id="project_stack">Stack: Javascript, React, Node, Express, PostgreSQL, CSS.</div>
          <div id="live_link">
          <a target="_blank" rel="noopener noreferrer" href="http://reppysetgo.herokuapp.com">Live App</a> {' '}
          <span className="github_link" ><a rel="noopener noreferrer" target="_blank" href="https://www.github.com/jennifrmarie/reppysetgo">GitHub</a></span>
          </div>
          </p>
          <img className="project1_sc" alt="screenshot of Reppy, Set, GO!" src="https://i.imgur.com/cR2yQ30.png" width="500" height="300" />   
        </section>
        <section className="project_2">
          <img className="project2_sc" src="https://i.imgur.com/H42JHVk.png" alt="screenshot of QuarenTV" width="500" height="300" />
          <p className="project2_desc"><h3 id="project_header">QuarenTV</h3>Full-stack app using JWT authentication for login, users can make list
          of what they want to watch which is then stored into a PostgreSQL database and can earn points and badges for checking items off of the list.
          React client utilizes a RESTful API to make requests
          <div id="project_stack">Stack: Javascript, React, Node, Express, PostgreSQL, CSS.</div>
          <div id="live_link">
          <a rel="noopener noreferrer" href="http://quarentv.herokuapp.com" target="_blank">Live App</a>{' '}
          <span className="github_link" ><a rel="noopener noreferrer" target="_blank" href="https://www.github.com/jennifrmarie/quarentv-client">GitHub</a></span>
          </div>
          </p>
          <img className="project2_sc" src="https://i.imgur.com/F95BN3z.png" alt="screenshot of QuarenTV" width="500" height="300" />
        </section>
        <section className="project_3">
          <img className="project3_sc" src="https://i.imgur.com/W69BAuI.png" width="500" height="300" alt="screenshot of Holy Macro!" />
          <p className="project3_desc"><h3 id="project_header">Holy Macro!</h3>Created an app that allows user to input macronutrients and then uses asynchronous programming with promises to send JSON data with recipes based on their search parameters.
          <div id="project_stack">Stack: JavascriptES6, jQuery, CSS3, HTML5.</div>
          <div id="live_link">
          <a rel="noopener noreferrer" href="https://jennifrmarie.github.io/HolyMacro/" target="_blank">Live App</a>
          <span className="github_link" ><a rel="noopener noreferrer" target="_blank" href="https://github.com/jennifrmarie/HolyMacro.git">GitHub</a></span>
          </div>
          </p>
          <img className="project3_sc" src="https://i.imgur.com/6oOZQkJ.png" width="500" height="300" alt="screenshot of Holy Macro!" />
        </section>
      </div>
    )
  }
}
