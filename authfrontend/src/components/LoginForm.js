import React, { Component } from 'react';

import UserAdapter from '../adapters/UserAdapter'

class LoginForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    UserAdapter.login(this.state)
    .then(console.log)
  }

  render() {
    const {username, password} = this.state
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Username:
            <input type="text" name="username" value={username} onChange={this.handleChange}/>
          </label>
          <br/>
          <label>
            Password:
            <input type="password" name="password" value={password} onChange={this.handleChange}/>
          </label>
          <br/>
          <input type="submit"/>
        </form>
      </div>
    );
  }

}

export default LoginForm;
