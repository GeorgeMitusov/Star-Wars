import React from 'react'

import './Row.scss';

const Row = ({ left, right }) => {
  return (
    <div className='item-page'>
      <div className="item-list-wrap">
        { left }
      </div>
      <div className="item-details-wrap">
        { right }
      </div>
    </div>
  )
}

export default Row
