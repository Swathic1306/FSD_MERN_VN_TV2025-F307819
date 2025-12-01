import React from 'react'
import Seven_child from './Seven_child'


const Seven = (props) => {
        const showalert=()=>{
            alert("Showing Alert From The Parent Component")
    }
  return (
    <div>
        <Seven_child alert={showalert} />
    </div>
  )
}

export default Seven
