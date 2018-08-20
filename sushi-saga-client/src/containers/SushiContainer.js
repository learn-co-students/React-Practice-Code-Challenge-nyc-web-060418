import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  const mapSushi = () => {
    let sushiArr =
      props.sushisOnTable.map((sushi) => <Sushi
        sushi={sushi}
        key={sushi.id}
        handleClick={props.handleClick}
        getFourSushis={props.getFourSushis}
        sushisOnTable={props.sushisOnTable}
        eatenSushi={props.eatenSushi} />)
    return sushiArr
  }

  return (
    <Fragment>
      <div className="belt">
        {
          mapSushi()
        }
        <MoreButton getFourSushis={props.getFourSushis} />
      </div>
    </Fragment>
  )
}

export default SushiContainer