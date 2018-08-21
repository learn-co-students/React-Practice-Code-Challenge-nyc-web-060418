import React, { Fragment, Component } from 'react'

class Sushi extends React.Component {
    constructor(props){
        super(props)
        this.state={
            hasBeenEaten: false
        }
    }
    componentDidUpdate(){
    }
    
    sushiStillAvailable = () => {
        this.props.annihilatedSushi.includes( this.props.sushi.id) && this.state.hasBeenEaten === false ?
        this.setState({hasBeenEaten:true}) :
        null
    }
    
    handleClick = () => {
        if(this.props.money >= this.props.sushi.price && this.state.hasBeenEaten === false){
            this.setState({hasBeenEaten:true})
        this.props.suchiClicked(this.props.sushi.price)
        this.props.ateThatSushi(this.props.sushi.id)
    }
}
render(){
        this.sushiStillAvailable()
        return (
        <div className="sushi">
        <div className="plate" 
            onClick={this.handleClick}>
            { 
            this.state.hasBeenEaten === true ?
            null :
            <img src={this.props.sushi.img_url} width="100%" />
            }
            </div>
                <h4 className="sushi-details">
                    {this.props.sushi.name} - ${this.props.sushi.price}
                </h4>
            </div>
        )
    }
}

export default Sushi

