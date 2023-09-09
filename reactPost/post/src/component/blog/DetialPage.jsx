import React, { useState } from "react";
import { useLoaderData, useParams, Navigate } from "react-router-dom";
// this useparam generat this page for all /1 or /2 /id pages snd show body in dthis page
function DetialPage() {
  // this two variable should always place in top of component
  const { id } = useParams();
  const body = useLoaderData();
  const [isDeleted, setIsDeleted] = useState(false);
  if (isDeleted) {
    //   i add this logic because when the delete button pressed page reload to home page
    return <Navigate to="/home" />;
  }
  function handelDelete() {
    //   this fetch delete the object with specific id
    if (id > 2) {
      // i prevent from delet last 2 post of json file with this if
      fetch("http://localhost:8000/blog/" + id, {
        method: "DELETE",
      });
      // i need this state for reload to home after delete in if logic at top of component
      setIsDeleted(true);
    }
  }
  return (
    <div>
      <h3>{body.title}</h3>
      <p>{body.body}</p>
      <button onClick={handelDelete}> delete</button>
    </div>
  );
}
// this function fetch the json file for this component we should add this func to index.js in router
export default DetialPage;
export async function postLoaderDetiale({ params }) {
  const { id } = params;
  const res = await fetch("http://localhost:8000/blog/" + id);
  return res.json();
}
