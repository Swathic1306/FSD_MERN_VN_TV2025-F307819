import React, { useState } from "react";
import axios from "axios";

const Sixteen = () => {
  const [post, setPost] = useState({
    title: "",
    body: ""
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("https://dummyjson.com/posts/add", post)
      .then((res) => {
        console.log(res.data);
        setMessage("Post Added!");
      })
      .catch((err) => {
        console.log(err);
        setMessage("Error adding post");
      });
  };

  return (
    <div>
      <h2>Add New Post</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Enter Title"
          value={post.title}
          onChange={handleChange}
        /><br /><br />

        <textarea
          name="body"
          placeholder="Enter Body"
          value={post.body}
          onChange={handleChange}
        ></textarea><br /><br />

        <button type="submit">Add Post</button>
      </form>

      <h3>{message}</h3>
    </div>
  );
};

export default Sixteen;
