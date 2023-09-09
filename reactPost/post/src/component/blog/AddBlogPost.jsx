import React, { useState } from "react";

function AddBlogPost() {
  const [title, setTilt] = useState("");
  const [body, setBody] = useState("");
  function handleSubmit() {
    const blog = { title, body };
    fetch("http://localhost:8000/blog", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(blog),
    });
  }

  return (
    <div className="form-add">
      <form>
        <h3>create new post blog</h3>
        <label>title</label>
        <input type="text" required onChange={(e) => setTilt(e.target.value)} />
        <label>body</label>
        <textarea required onChange={(e) => setBody(e.target.value)}></textarea>
        <button onClick={handleSubmit}>add Post</button>
      </form>
    </div>
  );
}

export default AddBlogPost;
