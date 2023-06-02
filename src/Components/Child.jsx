import React from "react";
import ContextAPI from "./ContextProvider";
import { ThemeContext } from "./themeContext";

export default function Child() {
  const { toggle, toggleFunction } = React.useContext(ThemeContext);
  return (
    <div>
      <button onClick={toggleFunction} className="btn btn-warning p-5">Change background theme</button>
      <hr/>
      <ContextAPI/>
    </div>
  );
}