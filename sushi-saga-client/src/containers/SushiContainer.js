import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  const mappedSushi = () => (
      props.tableSushi.map((oneSushi) => 
      <Sushi oneSushi={oneSushi} key={oneSushi.id} handleClick={props.handleClick} boughtSushi={props.boughtSushi} />)
  )

  return (
    <Fragment>
      <div className="belt">
        {mappedSushi()}
        <MoreButton onlyFour={props.onlyFour} />
      </div>
    </Fragment>
  )
}

export default SushiContainer