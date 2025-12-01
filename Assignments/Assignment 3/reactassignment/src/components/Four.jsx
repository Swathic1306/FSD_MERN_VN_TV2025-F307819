import React, { use, useEffect, useState } from 'react'

const Four = () => {
    const[user,setUser]=useState("");
    useEffect(()=>{
            console.log({user})
        },[user])
  return (
    <div>
        <h3>{user}</h3>
        <input type="text" placeholder='Enter Your Name' onChange={(e)=>setUser(e.target.value)}/>
    </div>
  )
}

export default Four
