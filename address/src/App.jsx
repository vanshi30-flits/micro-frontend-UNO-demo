import React from "react";
import ReactDOM from "react-dom";


import "./main.css";
import AddressCompo from "./addressCompo/AddressCompo";
import store from "./redux/store";
import { Provider } from "react-redux";

const App = () => (
  <div className="container">
    {/* <div>Name: address</div>
    <div>Framework: react</div>
    <div>Language: JavaScript</div>
    <div>CSS: Empty CSS</div> */}

    
    <Provider store={store}>
      <AddressCompo />
    </Provider>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
