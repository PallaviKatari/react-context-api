import React from "react";
import { ThemeContext } from "./themeContext";

function Footer() {
  const { toggle } = React.useContext(ThemeContext);
  return (
    <div>
      <nav
        className="navbar navbar-fixed-bottom"
        style={
          toggle
            ? { background: "pink", color: "blue" }
            : { background: "orange" }
        }>
        <h1>Footer Component</h1>
      </nav>
    </div>
  );
}

export default Footer;
