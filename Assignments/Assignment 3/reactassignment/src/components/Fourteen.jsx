import React, { useState } from 'react'

const Fourteen = () => {

  const oldfruits=["Apple","Orange","Banana","Watermelon","Musk","Guava","Jackfruit"]
  const [fruits, setFruits] = useState(oldfruits)
  const [newfruits, setNewfruits] = useState("")

  const handleSubmit = (e) => {
      e.preventDefault()
      if(newfruits.trim() === "") return
      setFruits([...fruits, newfruits])
      setNewfruits("")
  }

  const handleDelete = (e) => {
      e.preventDefault()

      // slice illa — pop logic using copy
      let temp = [...fruits]
      temp.pop()
      setFruits(temp)
  }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            {fruits.map((f, i) => (
                <p key={i}>{f}</p>
            ))}

            <input 
              type="text" 
              placeholder="Add Fruits"
              value={newfruits}
              onChange={(e)=>setNewfruits(e.target.value)} 
            /> 
            <br />

            <button type='submit'>Add</button> 
            <button type='button' onClick={handleDelete}>Delete</button>
        </form>
    </div>
  )
}

export default Fourteen
