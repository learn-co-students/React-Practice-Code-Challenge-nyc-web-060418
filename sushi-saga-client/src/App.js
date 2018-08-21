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
    myBudget: 100
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
    let balance = this.state.myBudget - sushi.price
    this.setState({
      eatenSushi: [...this.state.eatenSushi, sushi],
      myBudget: balance
    })
    if (this.state.myBudget < sushi.price) {
      alert('check your balance!')
    }
  }


  // myBudget: this.state.myBudget -= sushi.price

  // handleBudget = () => {
  //   let i;
  //   let balance
  //   for (i = 0; i < this.state.eatenSushi.length; i++) {
  //     balance += this.state.eatenSushi.price
  //   }

  //   if (balance > this.state.myBudget) ? 

  // }

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
          eatenSushi={this.state.eatenSushi}
          myBudget={this.state.myBudget} />
      </div>
    );
  }
}

export default App;