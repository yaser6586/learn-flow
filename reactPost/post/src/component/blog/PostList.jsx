import { useEffect, useState } from "react";
import useFetch from "./useFetch";
import { Navigate } from "react-router-dom";

function PostList() {
  // i use custom hook to fetch data and use this three state in this component
  const { blogPost, error, loading } = useFetch("http://localhost:8000/blog");

  return (
    <ul className="postContainer">
      {error && <h3 style={{ color: "red" }}>{error}</h3>}
      {loading && <h3>loading...</h3>}
      {blogPost &&
        blogPost
          .reverse()
          .map((blg, index) => <Post blog={blg} index={index} />)}
    </ul>
  );
}

export default PostList;

function Post({ blog, index }) {
  return (
    <li className="post" key={index}>
      <h3>{blog.title}</h3>
      <p>{blog.body}</p>

      <button>
        <a href={`${blog.id}`}>detail</a>
      </button>
    </li>
  );
}

