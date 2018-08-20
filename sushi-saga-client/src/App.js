import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  state = {
    sushis: [],
    editableSushis: [],
    sushisOnTable: [],
    eatenSushi: [],
    myBudget: 1000
  }

  componentDidMount() {
    fetch(API)
      .then((res) => res.json())
      .then((data) => this.setState({
        sushis: data,
        editableSushis: data
      }, () => this.getFourSushis()))
  }

  getFourSushis = () => {
    let four = this.state.editableSushis.splice(0, 4)
    this.setState({
      sushisOnTable: four
    })
  }

  handleClick = (sushi) => {
    this.setState({
      eatenSushi: [...this.state.eatenSushi, sushi]
    }, () => this.handleBudget())
  }

  handleBudget = () => {
    let i;
    let balance
    for (i = 0; i < this.state.eatenSushi.length; i++) {
      balance += this.state.eatenSushi.price
    }
    this.setState({
      myBudget: balance
    })

  }

  render() {
    return (
      <div className="app" >
        <SushiContainer
          sushis={this.state.editableSushis}
          sushisOnTable={this.state.sushisOnTable}
          handleClick={this.handleClick}
          getFourSushis={this.getFourSushis}
          eatenSushi={this.state.eatenSushi} />
        <Table
          sushis={this.state.sushis}
          eatenSushi={this.state.eatenSushi} />
      </div>
    );
  }
}

export default App;