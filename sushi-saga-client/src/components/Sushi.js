import React, { Fragment, Component } from 'react'
import SushiContainer from '../containers/SushiContainer';

class Sushi extends React.Component {
    constructor(props){
        super(props)
    }
    state={
        bool: false
    }
    handleClick = () => {
        if(this.props.money > this.props.sushi.price){
        this.setState({bool:true})
        this.props.suchiClicked(this.props.sushi.price)
        }
    }
render(){
    return (
    <div className="sushi">
        <div className="plate" 
            onClick={this.handleClick}>
            { 
            
                this.state.bool === true ?
                    null
                :
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

