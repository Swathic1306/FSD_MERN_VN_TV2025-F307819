import React from 'react'

const Six = () => {
    const arr=[
        {
            id:1,
            prod_name:"Hand Bag",
            price: '$200'
        },
        {
            id:2,
            prod_name:"Key Chains",
            price: '$15.99'
        },
        {
            id:1,
            prod_name:"Photo Frame",
            price: '$79'
        },
    ]
  return (
    <div>
        <table>
            <tr style={{color:'brown'}}>
                <th>S.No.</th>
                <th>Product Name</th>
                <th>Price</th>
            </tr>

            {arr.map((a,i)=>(
                <tr key={i}>
                    <td>{i+1}</td>
                    <td>{a.prod_name}</td>
                    <td>{a.price}</td>
                </tr>
            ))}

            
        </table>
    </div>
  )
}

export default Six
