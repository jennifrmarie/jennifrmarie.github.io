import React from 'react';
import './App.css';
import Intro from './Intro'
import NavBar from './NavBar'
import Contact from './Contact'
import Projects from './Projects'
import Resume from './Resume'
import { Route } from 'react-router-dom';

export default class App extends React.Component {
  renderNavRoutes() {
    return (
      <>
      <Route
        path="/projects" 
        component={Projects}
      />
      <Route
        exact path='/'
        component={Intro}
      />
      <Route
        path='/resume'
        component={Resume}
      />
      <Route
        path='/contact'
        component={Contact}
      />
      </>
    )
  }
  render() {
    return (
      <div className="App__main">
        <NavBar />
        {this.renderNavRoutes()}
      </div>
    )
  }
}

