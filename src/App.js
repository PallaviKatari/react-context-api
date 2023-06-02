import Header from "./Components/Header";
import Child from "./Components/Child";
import Footer from "./Components/Footer";
import { ThemeContext } from "./Components/themeContext";
import React from "react";
import "./App.css";

function App() {
  const { toggle } = React.useContext(ThemeContext);
  return (
    <div className={toggle ? "theme" : "theme1"}>
      <Header />
      <h2>REACT CONTEXT API DEMO</h2>
      <p>
        Scenario 1 - James Bond 007 passed from ContextProvider Component to WelcomePage,Consumer1,Consumer2<br />
        Scenario 2 - Change of theme passed from themContextProvider to Header,Footer and Child(which in turn has the ContextProvider as nested component)
      </p>
      <Child />
      <Footer />
    </div>
  );
}

export default App;
