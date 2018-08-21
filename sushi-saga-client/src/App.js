import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
    state = {
        allSushi: [],
        availableSushi:[],
        sushiRange: [1,4],
        activeSushiPieces: [],
        annihilatedSushi:[],
        money: 100,
        emptyPlates: [],


    }
    componentDidMount(){
        fetch(API)
        .then(res => res.json())
        .then(res => this.setState({allSushi: res}, this.sushiSplitter) )
    }

    sushiSplitter = () => {
            const sushiPieces = this.state.allSushi.filter( obj => obj.id >= this.state.sushiRange[0] && obj.id <= this.state.sushiRange[1])
            this.setState({ activeSushiPieces: sushiPieces})
    }
    
    moreSushi = () => {
        console.log("%cclick from button","color:green;font-size:10px",)
        const beg = this.state.sushiRange[0]
        const end = this.state.sushiRange[1]
        if(end <100){
            this.setState({sushiRange:[beg+4, end+4]}, this.sushiSplitter)
        }else{
            this.setState({sushiRange: [1,4]}, this.sushiSplitter)
            console.log("%cfinished 100","color:red;font-size:18px")
        }
    }
    
    suchiClicked = (price) => {
        const updatedMoney = this.state.money - price
        const arr = [...this.state.emptyPlates]
        arr.push("plate")
        this.setState({emptyPlates:arr, money: updatedMoney })
    }

    ateThatSushi = (id) => {
        const sushi = [...this.state.annihilatedSushi]
        sushi.push(id)
        this.setState({annihilatedSushi:sushi}, console.log("%ceaten Sushi","color:red;font-size:18px",this.state.annihilatedSushi))

    }


  render() {
    return (
      <div className="app">
        <SushiContainer  sushi={this.state.activeSushiPieces} moreSushi={this.moreSushi} suchiClicked={this.suchiClicked} money={this.state.money} ateThatSushi={this.ateThatSushi} annihilatedSushi={this.state.annihilatedSushi}/>
        <Table money={this.state.money} emptyPlates={this.state.emptyPlates} price={this.state.money}/>
      </div>
    );
  }
}

export default App;