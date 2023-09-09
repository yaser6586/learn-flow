import React from "react";
import PostList from "./PostList";
import AddBlogPost from "./AddBlogPost";
import NavigateBar from "./NavigateBar";

// this is home of blog website
function BlogHome() {
  return (
    <>
      <NavigateBar />
      <PostList />
      <AddBlogPost />
    </>
  );
}

export default BlogHome;
