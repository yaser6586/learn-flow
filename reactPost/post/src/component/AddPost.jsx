import React, { useState } from "react";
import { data } from "./Data";
// this component get data from another page and add new property to data with user input
let init = data;

export default function AddPost() {
  const [cform, SetCform] = useState({
    ...init,
    post3: {
      id: undefined,
      title: undefined,
      text: undefined,
      imgId: undefined,
      link: undefined,
      time: undefined,
    },
  });

  return (
    <div style={{ width: 300 }}>
      <div className="input-group input-group-sm mb-3">
        <span className="input-group-text" id="inputGroup-sizing-sm">
          id
        </span>
        <input
          type="text"
          className="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-sm"
          onChange={(e) =>
            SetCform({
              ...data,
              post3: {
                ...cform.post3,
                id: e.target.value,
              },
            })
          }
        />
      </div>
      <div className="input-group input-group-sm mb-3">
        <span className="input-group-text" id="inputGroup-sizing-sm">
          title
        </span>
        <input
          type="text"
          className="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-sm"
          onChange={(e) =>
            SetCform({
              ...data,
              post3: {
                ...cform.post3,
                title: e.target.value,
              },
            })
          }
        />
      </div>
      <div className="input-group input-group-sm mb-3">
        <span className="input-group-text" id="inputGroup-sizing-sm">
          text
        </span>
        <input
          type="text"
          className="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-sm"
          onChange={(e) =>
            SetCform({
              ...data,
              post3: {
                ...cform.post3,
                text: e.target.value,
              },
            })
          }
        />
      </div>
      <div className="input-group input-group-sm mb-3">
        <span className="input-group-text" id="inputGroup-sizing-sm">
          imageId
        </span>
        <input
          type="text"
          className="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-sm"
          onChange={(e) =>
            SetCform({
              ...data,
              post3: {
                ...cform.post3,
                imgId: e.target.value,
              },
            })
          }
        />
      </div>
      <div className="input-group input-group-sm mb-3">
        <span className="input-group-text" id="inputGroup-sizing-sm">
          link
        </span>
        <input
          type="text"
          className="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-sm"
          onChange={(e) =>
            SetCform({
              ...data,
              post3: {
                ...cform.post3,
                link: e.target.value,
              },
            })
          }
        />
      </div>
      <div className="input-group input-group-sm mb-3">
        <span className="input-group-text" id="inputGroup-sizing-sm">
          time
        </span>
        <input
          type="text"
          className="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-sm"
          onChange={(e) =>
            SetCform({
              ...data,
              post3: {
                ...cform.post3,
                time: e.target.value,
              },
            })
          }
        />
      </div>
      <button
        type="button"
        className="btn btn-dark"
        onClick={() => {
          console.log(cform);
        }}
      >
        send
      </button>
    </div>
  );
}
