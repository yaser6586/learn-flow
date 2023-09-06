import React, { useEffect, useState } from "react";
//this content fetch json from another site and set iit to user state and show the user.name in list
export default function ListForFetch() {
  const [user, setUser] = useState([{}]);
  useEffect(() => {
    async function getJson() {
      const userData = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const userName = await userData.json();
      return userName;
    }
    getJson().then((data) => setUser(data));
  }, [user]);
  return (
    <ul>
      {user.map((usr) => (
        <li key={usr.id} className="listUser">
          {usr.name}
          <button className="btn">{usr.id}</button>
        </li>
      ))}
    </ul>
  );
}
