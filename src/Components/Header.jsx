import React from "react";
import { ThemeContext } from "./themeContext";

function Header() {
  const { toggle } = React.useContext(ThemeContext);
  return (
    <div
      style={
        toggle
          ? { background: "pink", color: "blue" }
          : { background: "green" }
      }>
      <h3>Header Component</h3>
    </div>
  );
}

export default Header;
