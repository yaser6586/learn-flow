import React, { useReducer } from "react";

/* this component use useReducer hook to update state value in this  component
when inputs are empty button is disabled but when we click on button two inputs will be disabled 
with checking state if is submitting */

function taskReducer(state, action) {
  switch (action.type) {
    case "changefname":
      return { ...state, firstname: action.text };
    case "changelname":
      return { ...state, lastname: action.text };
    case "issubmit":
      return {
        ...state,
        status: "submitting",
        output: state.firstname + " " + state.lastname,
      };
    case "istyping":
      return {
        ...state,
        status: "typing",
      };
    default:
      throw Error("Unknown action: " + action.type);
  }
}
export default function Reducerform() {
  const [state, dispatch] = useReducer(taskReducer, {
    firstname: "",
    lastname: "",
    status: "",
    output: "",
  });

  function handleFirstnam(e) {
    dispatch(
      // this object called action that we use it in reducer function
      {
        type: "changefname",
        text: e.target.value,
      }
    );
  }

  function handlLastname(e) {
    dispatch({
      type: "changelname",
      text: e.target.value,
    });
  }
  function handleSubmit() {
    dispatch({
      type: "issubmit",
    });
  }

  return (
    <>
      <div
        style={{
          padding: 40,
          position: "absolute",
          left: 500,
          top: 50,
          borderStyle: "solid",
          borderColor: "GrayText",
        }}
      >
        <input
          placeholder="first name"
          type="text"
          value={state.firstname}
          onChange={handleFirstnam}
          disabled={state.status === "submitting"}
        />
        <br />
        <br />
        <br />
        <input
          placeholder="last name"
          type="text"
          value={state.lastname}
          onChange={handlLastname}
          disabled={state.status === "submitting"}
        />
        <br />
        <br />
        <button
          disabled={state.firstname.length === 0}
          onClick={() => {
            handleSubmit();

            console.log(
              state.firstname + " " + state.lastname + " " + state.status
            );
          }}
        >
          send
        </button>
        <br />
        <br />
        <br />
        <p style={{ color: "tomato", fontWeight: "bold" }}>
          new user is : {state.output}
        </p>
      </div>
    </>
  );
}
