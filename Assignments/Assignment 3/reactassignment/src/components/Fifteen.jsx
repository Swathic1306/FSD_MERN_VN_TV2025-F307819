import React from 'react'
import { useState } from 'react'

const Fifteen = () => {
    const [profile,setProfile]=useState({
        Name:"",
        Email:"",
        Phone:""
   } )
   const handlesubmit=(e)=>{
    setProfile({...profile,[e.target.name]:e.target.value})
   }
  return (
    <div>
        
        <input type="text" name='Name'placeholder='Enter Name' onChange={handlesubmit}/>
        <input type="email" name='Email' placeholder='Enter Mail ID' onChange={handlesubmit}/>
        <input type="number" name='Phone' placeholder='Enter Mobile Number' onChange={handlesubmit}/>

        <br />
        <p>Name:{profile.Name}</p>
        <p>Email ID:{profile.Email}</p>
        <p>Phone:{profile.Phone}</p>

    </div>
  )
}

export default Fifteen
