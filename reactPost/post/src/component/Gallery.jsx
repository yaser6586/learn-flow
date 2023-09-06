import React from "react";

export function Profile({ size }) {
  return (
    <img
      className="m-3"
      src="https://i.imgur.com/QIrZWGIs.jpg"
      alt="Alan L. Hart"
      height={size}
    />
  );
}
export default function Gallery() {
  return (
    <div className="p-3">
      <Profile size={200} />
      <Profile size={50} />
      <Profile />
    </div>
  );
}
