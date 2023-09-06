import React, { useState } from "react";

export default function Like() {
  const [like, setLike] = useState(0);
  const [unlike, setUnlike] = useState("like");

  const handleClick = () => {
    if (like) {
      setLike(0);
      handleUnlike();
    } else {
      setLike(1);
      handleUnlike();
    }
  };
  const handleUnlike = () => {
    if (like) {
      setUnlike("like");
    } else {
      setUnlike("unlike");
    }
  };
  return (
    <div class="card" style={{ width: 300 }}>
      <img src="..." class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <button type="button" className="btn btn-primary" onClick={handleClick}>
          {unlike}
          <span className="badge text-bg-danger">{like.toString()}</span>
        </button>
      </div>
    </div>
  );
}
