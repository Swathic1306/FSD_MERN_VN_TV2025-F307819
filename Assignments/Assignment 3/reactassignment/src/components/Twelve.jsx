import React, { useEffect, useState } from 'react'

const Twelve = () => {
    const [products,setProducts]=useState([])
    const [load,setLoad]=useState(true)
    const [error,setError]=useState(false)

    useEffect(()=>{
        fetch("https://dummyjson.com/products")
        .then((res)=>res.json())
        .then((data)=>{setProducts(data.products),setLoad(false)})
        .catch((err)=>{setError(true),setLoad(false)})
    },[])


  return (
    <div>
       {load? "Loading.....":
       error? "Error occurs while Loading data":"Data loaded successfully!!"} 
    </div>
  )
}

export default Twelve
