import React, { useState } from 'react'

const Five = () => {
    const [submit, setSubmit] = useState({
        Username: "",
        Email_id: ""
    });

    const[result,setResult]=useState("")
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setResult(submit)
    };


    return (
        <div>
            <form onSubmit={handleSubmit}>

            <label>Username:</label>
            <input type="text" placeholder="Enter Your Name" onChange={(e) => setSubmit({...submit, Username: e.target.value})}/>
            <br /><br />
            <label>Email ID:</label>
            <input type="email" placeholder="Enter Your Mail ID" onChange={(e) => setSubmit({...submit, Email_id: e.target.value})}/>
            <div></div>
            <br /><br />
            <button type="submit">Submit</button>
        </form>
        <br /><br /><br />
        <div>
            <p style={{color:'red'}}>Name:{result.Username}</p>
            <p style={{color:'red'}}>Mail ID:{result.Email_id}</p>
        </div>
        </div>
    );
};

export default Five;
