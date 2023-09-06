import React from "react";
import Button from "./button";
const App = () => {
  return (
    <div>
      <Button bColor={"blue"} increamentValue={1} />
      <Button bColor={"red"} increamentValue={5} />
    </div>
  );
};
export default App;
