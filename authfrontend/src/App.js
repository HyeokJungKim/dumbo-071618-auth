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

  componentDidMount() {
    if(localStorage.getItem("token")){
      UserAdapter.persist(localStorage.getItem("token"))
      .then(resp => {
        if(!resp.error){
          this.setUser(resp)}
        else{
          this.logout()
        }
        })

    }
  }

  logout = () => {
    localStorage.clear()
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
    const loggedIn = !!this.state.currentUser.user_id
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
            <Route path="/login" render={(routeProps)=> <LoginForm setUser={this.setUser} {...routeProps}/>}></Route>
            <Route path="/my_snacks" render={() => <Snacks snacks={this.state.snacks}/>}></Route>
            <Route path="/snacks" render={() => <AllSnacks loggedIn={loggedIn} />}></Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
