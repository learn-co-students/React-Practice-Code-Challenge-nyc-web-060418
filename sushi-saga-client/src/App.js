import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

const API = "http://localhost:3000/sushis"

class App extends Component {
  state = {
    mainData: [],
    changingData: [],
    tableSushi: [],
    boughtSushi: [],
    theBudget: 100
  }

  fetchAPI = () => {
    fetch(API).then((res) => res.json()).then((data) => this.setState({
        mainData: data,
        changingData: data
      }, () => this.onlyFour()))
  }

  componentDidMount() {
    this.fetchAPI()
  }

  // grabs the changind data array and splices it
  onlyFour = () => {
    let grabFour = this.state.changingData.splice(0, 4)
    this.setState({
      tableSushi: grabFour
    })
  }
  // grabs a sushi and adds it onto bought sushi array, subtracts price from my budget
  handleClick = (oneSushi) => {
    let balance = this.state.theBudget - oneSushi.price
    // added last minute fix below to stop if at 0
    if(balance >= 0){
    this.setState({
      boughtSushi: [...this.state.boughtSushi, oneSushi],
      theBudget: balance
    })
    }
  }

  // 
  render() {
    return (
      <div className="app" >
        <SushiContainer changingData={this.state.changingData} tableSushi={this.state.tableSushi} handleClick={this.handleClick}
          onlyFour={this.onlyFour}
          boughtSushi={this.state.boughtSushi} />
        <Table mainData={this.state.mainData} boughtSushi={this.state.boughtSushi} theBudget={this.state.theBudget} />
      </div>
    );
  }
}

export default App;