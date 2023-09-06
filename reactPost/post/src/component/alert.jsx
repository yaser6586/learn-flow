import React from "react";

export default function Alert({ children, message }) {
  function handleClick() {
    alert(message);
  }

  return (
    <button className="btn btn-primary" onClick={handleClick}>
      {children}
    </button>
  );
}
