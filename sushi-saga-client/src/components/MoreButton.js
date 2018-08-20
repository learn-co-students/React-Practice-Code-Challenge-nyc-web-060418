import React from 'react'

const MoreButton = (props) => {
  return <button onClick={() => props.getFourSushis()}>
    More sushi!
          </button>
}

export default MoreButton