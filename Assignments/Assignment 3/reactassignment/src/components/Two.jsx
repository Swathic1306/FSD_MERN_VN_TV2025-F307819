import React, { useState } from 'react'

const Two = () => {
    const[login,setLogin]=useState(true)
    const handleclick=()=>{
        setLogin(!login)
    }

  return (
    <div>
        <h1>{login?"Welcome Back!":"Please login"}</h1>
        <button onClick={handleclick}>{login?"logout" :"login"}</button>
        
    </div>
  )
}
export default Two
