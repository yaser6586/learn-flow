import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./component/error-page";
import PostList from "./component/blog/PostList";
import AddBlogPost from "./component/blog/AddBlogPost";
import Root from "./root";
import DetialPage, { postLoaderDetiale } from "./component/blog/DetialPage";
// this is structure of react router in index page in new way for router v 6.4
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    // this error page if we use wrong link always show
    errorElement: <ErrorPage />,
    // we should assign root page and add other page as children
    children: [
      {
        path: "home",
        element: <PostList />,
      },
      {
        path: "addPost",
        element: <AddBlogPost />,
      },
      {
        path: ":id",
        element: <DetialPage />,
        // we assign postLoaderDetial func in detialPage component
        loader: postLoaderDetiale,
        // the loader is function we should import from react-router-dom
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
// we add RouterProvider to root render method 
root.render(<RouterProvider router={router} />);
