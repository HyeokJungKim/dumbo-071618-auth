import React, { Component } from 'react';

class Snacks extends Component {

  render() {
    return (
      <div>
        <h2>My Snacks!</h2>
        <ul>
          {this.props.snacks.map(snack => <li key={snack.id}>{snack.name}</li>)}
        </ul>
      </div>
    );
  }

}

export default Snacks;
