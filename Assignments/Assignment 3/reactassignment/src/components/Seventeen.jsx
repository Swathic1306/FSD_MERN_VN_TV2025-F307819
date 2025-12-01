import React, { useEffect, useState } from "react";
import axios from "axios";

function Seventeen() {
  const [user, setUser] = useState({
    firstName: "",
    email: ""
  });

  // Fetch user
  useEffect(() => {
    axios.get("https://dummyjson.com/users/1").then((res) => {
      setUser({
        firstName: res.data.firstName,
        email: res.data.email
      });
    });
  }, []);

  // Handle change
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  // Update
  const updateUser = () => {
    axios.put("https://dummyjson.com/users/1", user).then(() => {
      alert("Updated!");
    });
  };

  return (
    <div>
      <h3>Edit User</h3>

      <input
        name="firstName"
        value={user.firstName}
        onChange={handleChange}
        placeholder="First Name"
      /><br /><br />

      <input
        name="email"
        value={user.email}
        onChange={handleChange}
        placeholder="Email"
      /><br /><br />

      <button onClick={updateUser}>Update</button>
    </div>
  );
}

export default Seventeen;
