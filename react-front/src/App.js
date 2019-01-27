import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    teams: []
  }

  componentDidMount() {
    this.getTeams()
  }

  getTeams = _ => {
    fetch('http://localhost:4000/teams')
    .then(response => response.json())
    .then(response => this.setState({teams: response.data}))
    .catch(err => console.error(err))
  }

  renderTeam = ({id, name, description}) => <div key={id}>{name}</div>
  render() {
    const { teams } = this.state

    return (
      <div className="App">
        { teams.map(this.renderTeam) }
      </div>
    );
  }
}

export default App;
