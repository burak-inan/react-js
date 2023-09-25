import React from "react";
import { Button } from "react-bootstrap";

const Stateless = () => {
  let mode = "light";
  let className = "bg-dark text-light p-5";

  const setMode = (m) => {
    mode = m;
    console.log(mode);

    if (mode === "dark") {
      className = "bg-dark text-light p-5";
    } else {
      className = "bg-ligh text-dark p-5";
    }

    document.getElementById("switcher").setAttribute("class", className);
  };

  return (
    <div id="switcher" className={className}>
      <h1 className="text-center">Dark/Light Mode Switcher</h1>
      <div className="d-flex justify-content-evenly">
        <Button onClick={() => setMode("dark")}> Dark Mode </Button>
        <Button onClick={() => setMode("light")}> Light Mode </Button>
      </div>
    </div>
  );
};

export default Stateless;
