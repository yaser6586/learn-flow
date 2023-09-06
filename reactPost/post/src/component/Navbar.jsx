import React, { Fragment } from "react";

export default function Navbar() {
  const navItem = ["home", "news", "archive", "contact", "about us"];
  const navbar = navItem.map((item) => (
    <a className="m-2" href="#">
      {item}
    </a>
  ));
  return <Fragment>{navbar}</Fragment>;
}
