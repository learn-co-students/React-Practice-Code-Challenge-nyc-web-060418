import React, { Fragment } from 'react'

const Sushi = (props) => {
  return (
    <Fragment>
    <div className="sushi">
      <div className="plate"
        onClick={() => props.handleClick(props.oneSushi)}>

          {props.boughtSushi.includes(props.oneSushi) ?
          null
          :
            <img src={props.oneSushi["img_url"]} width="100%" alt="" />
        }
      </div>
      <h4 className="sushi-details">
          {props.oneSushi.name} - ${props.oneSushi.price}
      </h4>
    </div>
    </Fragment>
  )
}

export default Sushi