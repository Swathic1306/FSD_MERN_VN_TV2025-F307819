import React, { useState } from 'react'

const Thirteen = () => {
    var oldfruits=["Apple","Orange","Banana","Watermelon","Musk","Guava","Jackfruit"]
    const[fruits,setFruits]=useState(oldfruits)
    const[newfruits,setNewfruits]=useState("")

    const handleSubmit=(e)=>{
        e.preventDefault()
        setFruits([...fruits,newfruits])
        setNewfruits("")
    }
  return (
    <div>
        <form action="" onSubmit={handleSubmit}>
            {fruits.map((f,i)=>
                <p>{f}</p>)}

            <input type="text" placeholder='Add Fruits' onChange={(e)=>setNewfruits(e.target.value)}/> <br />
            <button type='submit'>Add</button>
        </form>
        
    </div>
  )
}

export default Thirteen
