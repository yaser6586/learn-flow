// import Like from "./component/Like";
// import Post from "./component/Post";
// import Navbar from "./component/Navbar";
// import Gallery from "./component/Gallery";
// import { Profile } from "./component/Gallery";
// import Alert from "./component/alert";
// import Content from "./component/Content";
// import { data } from "./component/Data";
// import AddPost from "./component/AddPost";
// import Reducerform from "./component/Reducerform";
// import Todolist from "./component/Todolist";
// import TodoApp from "./component/todolistContexReducer/TodoApp";
// import ListForFetch from "./component/ListForFetch";
// import ListFetchWithouteEffect from "./component/ListFetchWithouteEffect";

import { Outlet } from "react-router-dom";

export default function Root() {
  // i change app name to root for learning react-router
  return (
    <>
      <div className="navContainer">
        <a href="home">home</a>
        <a href="addPost">add Post</a>
      </div>
      {/* this outlet let the page alwyas show this content in all pages */}
      <Outlet />
    </>
  );
}
