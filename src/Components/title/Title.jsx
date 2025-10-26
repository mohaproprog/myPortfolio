import React from 'react'
import './title.css'

function Title(props) {
  return (
    <div className='title'>
      <h1>{props.title}</h1>
      <hr />
      <p>{props.subtitle}</p>
    </div>
  )
}

export default Title