import React, { Component } from 'react';
import monsters from './data/monsters';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: monsters.monsterData
    };
  }
  render() {
    return (    
      <div className="App">
      {
        this.state.monsters.map(monster => (
          <h1 key={monster.id}>{monster.name}</h1>
        ))
      }
    </div>
    );
  }
}

export default App;
