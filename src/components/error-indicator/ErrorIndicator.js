import React from 'react'

import icon from './death.png';

const ErrorIndicator = ({ error }) => {
  return (
    <div className="error-indicator">
      <img 
        src={icon} 
        style={{ width: '30%', height: "150px" }} 
      />
      <span className='boom'> BOOM! </span>
      <span> something has gone terribly wrong </span>
      <span> ( but we already sent droids to fix it ) </span>
      <pre> { error.message } </pre>
    </div>
  )
}

export default ErrorIndicator