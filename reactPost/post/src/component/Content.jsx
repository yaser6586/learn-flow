import React from "react";
// this component gets text and title from props that _
// _props get their data from object in data.js file
export default function Content({ Text }) {
  return (
    <>
      <div className="card text-center">
        <div className="card-header">Featured</div>
        <div className="card-body">
          <h5 className="card-title">{Text.title}</h5>
          <p className="card-text">{Text.text}</p>
          <a href={Text.link} className="btn btn-primary">
            see the news
          </a>
        </div>
        <div className="card-footer text-body-secondary">{Text.time}</div>
      </div>
    </>
  );
}
