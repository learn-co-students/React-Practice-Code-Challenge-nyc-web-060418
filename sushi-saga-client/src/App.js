import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
    state = {
        allSushi: [],
        sushiCounter: [1,4],
        activeSushiPieces: [],
        money: 100,
        emptyPlates: [],

    }
    componentDidMount(){
        fetch(API)
        .then(res => res.json())
        .then(res => this.setState({allSushi: res}, this.sushiSplitter) )
    }

    sushiSplitter = () => {
            const sushiPieces = this.state.allSushi.filter( obj => obj.id >= this.state.sushiCounter[0] && obj.id <= this.state.sushiCounter[1])
            this.setState({ activeSushiPieces: sushiPieces})
    }
    
    moreSushi = () => {
        console.log("%cclick from button","color:red;font-size:18px",)
        const beg = this.state.sushiCounter[0]
        const end = this.state.sushiCounter[1]
        this.setState({sushiCounter:[beg+4, end+4]}, this.sushiSplitter)
    }
    
    suchiClicked = (price) => {
        const updatedMoney = this.state.money - price
        const arr = [...this.state.emptyPlates]
        arr.push("plate")
        this.setState({emptyPlates:arr, money: updatedMoney })
    }

  render() {
    return (
      <div className="app">
        <SushiContainer  sushi={this.state.activeSushiPieces} moreSushi={this.moreSushi} suchiClicked={this.suchiClicked} money={this.state.money}/>
        <Table money={this.state.money} emptyPlates={this.state.emptyPlates} price={this.state.money}/>
      </div>
    );
  }
}

export default App;