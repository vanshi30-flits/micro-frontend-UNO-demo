import React from "react";
import ReactDOM from "react-dom";
import Pagination from "./Pagination/Pagination";
import "./index.css";

const App = () => (
  <div className="container">
    <div>Name: pagination</div>
    <div>Framework: react</div>
    <div>Language: JavaScript</div>
    <div>CSS: Empty CSS</div>
    {/* <Pagination/> */}
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
