import React from 'react'
import Seven from './Seven'

const Seven_child = (props) => {
  return (
    <div>
      <button onClick={props.alert}>Alert</button>
    </div>
  )
}

export default Seven_child
