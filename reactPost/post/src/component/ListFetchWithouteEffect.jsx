import React, { useMemo, useState } from "react";
//this content fetch json from another site with function not useEffect and set it to user state and show the user.name in list
export default function ListFetchWithouteEffect() {
  const [user, setUser] = useState([{}]);
  const fetchFun = () => {
    async function getJson() {
      const userData = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const userName = await userData.json();
      return userName;
    }
    getJson().then((data) => setUser(data));
  };
  fetchFun();
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
