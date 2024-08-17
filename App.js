import React from "react";
import ReactDOM from "react-dom/client";

// React Element
const number = (<h2>1000</h2>);

const Title = () => (
  <h1 className="head" tabIndex="5">
    {" "}
    Namaste React using JSX 🚀
  </h1>
);
// React Functional Component - fxn that returns a JSX code / React Element
// TO write js inside JSX use {}
const HeadingComponent = () => (
  <div id="container">
    {number}
    <Title />
    <h1 className="heading">Namaste React From Functional Component 🚀</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);