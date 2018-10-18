import React, { Component } from 'react';
import './App.css';

import LoginForm from './components/LoginForm'
import Snacks from './components/Snacks'
import AllSnacks from './components/AllSnacks'

import UserAdapter from './adapters/UserAdapter'
import {Switch, BrowserRouter as Router, Route, Link} from 'react-router-dom'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentUser: {},
      snacks: [],
    };
  }

  logout = () => {
    this.setState({
      currentUser: {},
      snacks: []
     })
  }

  setUser = (userObj) => {
    this.setState({
      currentUser: userObj.user,
      snacks: userObj.snacks
    })
  }

  render() {
    // How do we know if we're logged in?
    const loggedIn = false
    return (
      <Router>
        <div className="App">
          <h1>Snacc Attacc</h1>

          {loggedIn ? <button onClick={this.logout}>Logout</button > : <Link to="/login">Login</Link>}
          |
          <Link to="/">Home</Link>
          |
          <Link to="/my_snacks">My Snacks</Link>

          <Switch>
            <Route path="/login" component={LoginForm}></Route>
            <Route path="/my_snacks" component={Snacks}></Route>
            <Route path="/snacks" component={AllSnacks}></Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
