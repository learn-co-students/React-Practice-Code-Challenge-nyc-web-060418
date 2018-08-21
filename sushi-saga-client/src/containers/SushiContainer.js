import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = ({sushi, moreSushi,suchiClicked, money }) => {

    const sushiMaker = sushi.map(obj => <Sushi key={obj.id} sushi={obj} suchiClicked={suchiClicked} money={money}/> )
  return (

    <Fragment>
      <div className="belt">
        {sushiMaker}
        <MoreButton moreSushi={moreSushi} />
      </div>
    </Fragment>
  )
}

export default SushiContainer