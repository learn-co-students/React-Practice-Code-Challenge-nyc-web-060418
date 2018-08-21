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
        outOfMoney: false

    }
    componentDidMount(){
        fetch(API)
        .then(res => res.json())
        .then(res => this.setState({allSushi: res}, this.sushiSplitter) )
        .then(res =>console.log("%cres","color:green;font-size:16px",res))
    }
    sushiSplitter = () => {
        if(this.state.outOfMoney === false){
            const sushiPieces = this.state.allSushi.filter( obj => obj.id >= this.state.sushiCounter[0] && obj.id <= this.state.sushiCounter[1])
            this.setState({ activeSushiPieces: sushiPieces})
        }
    }
    
    moreSushi = () => {
        console.log("%cclick from button","color:red;font-size:18px",)
        const beg = this.state.sushiCounter[0]
        const end = this.state.sushiCounter[1]
        this.setState({sushiCounter:[beg+4, end+4]}, this.sushiSplitter)
    }
    
    suchiClicked = (price) => {
        const updatedMoney = this.state.money - price
        if (updatedMoney > 0){
            console.log("%cclick from susho","color:red;font-size:18px",)
            const arr = [...this.state.emptyPlates]
            arr.push("plate")
            this.setState({emptyPlates:arr, money: updatedMoney }, ()=> console.log("%cempty plates","color:red;font-size:18px",this.state.emptyPlates))
        }else{
            null
            // this.setState({outOfMoney: true})
        }
    }
    // , sushiCounter:[beg+4, end+4] 
  render() {
    // console.log("%csplitter","color:green;font-size:14px",this.sushiSplitter())
    console.log("%cactive","color:red;font-size:14px",this.state.activeSushiPieces)
    return (
      <div className="app">
        <SushiContainer  sushi={this.state.activeSushiPieces} moreSushi={this.moreSushi} suchiClicked={this.suchiClicked} money={this.state.money}/>
        <Table money={this.state.money} emptyPlates={this.state.emptyPlates} price={this.state.money}/>
      </div>
    );
  }
}

export default App;