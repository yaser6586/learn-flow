import { useEffect, useState } from "react";
import useFetch from "./useFetch";

function PostList() {
  const { blogPost, error, loading } = useFetch("http://localhost:8000/blog");

  return (
    <ul className="postContainer">
      {error && <h3>{error}</h3>}
      {loading && <h3>loading...</h3>}
      {blogPost &&
        blogPost.map((blg, index) => <Post blog={blg} index={index} />)}
    </ul>
  );
}

export default PostList;

function Post({ blog, index }) {
  return (
    <li className="post" key={index}>
      <h3>{blog.title}</h3>
      <p>{blog.body}</p>
    </li>
  );
}
