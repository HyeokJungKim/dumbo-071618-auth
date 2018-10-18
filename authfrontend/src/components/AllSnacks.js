import React, { Component } from 'react';

class AllSnacks extends Component {
  state ={
    snacks : []
  }
  componentDidMount() {
    fetch("http://localhost:3000/snacks")
    .then(resp => resp.json())
    .then(snacks => this.setState({snacks: snacks}))
  }

  render() {
    return (
      <div>
        <h2>Snacks Available</h2>
        {this.state.snacks.map(snack => <li key={snack.id}>{snack.name}</li>)}
      </div>
    );
  }

}

export default AllSnacks;
