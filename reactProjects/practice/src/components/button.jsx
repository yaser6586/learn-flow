import React, { useState } from "react";

export const Button = (props) => {
  const [value, setValue] = useState(0);
  const handleClick = () => {
    setValue(value + props.increamentValue);
  };
  const bStyle = {
    backgroundColor: props.bColor,
  };
  return (
    <div>
      <button style={bStyle} onClick={handleClick}>
        +1
      </button>
      <p>{value}</p>
    </div>
  );
};
export default Button;
