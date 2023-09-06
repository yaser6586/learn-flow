import React, { useState } from "react";

export default function Post() {
  const [post, setPost] = useState("post here");
  const [myp, stMyp] = useState("");
  const change = (e) => {
    stMyp(e.target.value);
  };
  const handleClick = () => {
    if (myp === "") {
      alert("type somesdcdscthing");
    } else {
      setPost(myp);
    }
  };
  return (
    <>
      <h2
        style={{
          margin: 50,
          marginLeft: 5,
          color: "blue",
          borderColor: "black",
          borderStyle: "solid",
          width: 100,
          padding: 50,
          fontSize: 25,
        }}
      >
        {post}
      </h2>
      <input type="text" onChange={change} />
      <button onClick={handleClick} className="btn btn-primary">
        submit
      </button>
    </>
  );
}
