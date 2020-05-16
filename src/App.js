import React, { Component } from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list.component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
    };
  }
  componentDidMount() {
    fetch("./data/monsters.json")
      .then((response) => response.json())
      .then((monsters) => this.setState({ monsters: monsters }));
  }
  render() {
    return (
      <div className="App">
        <CardList cards={this.state.monsters}/>
      </div>
    );
  }
}

export default App;
