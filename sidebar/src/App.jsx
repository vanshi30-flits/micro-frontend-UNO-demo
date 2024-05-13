import React from "react";
import ReactDOM from "react-dom";
import SidebarCompo from "./Sidebar/SidebarCompo";
import { Provider } from 'react-redux'
import "./main.css";
import store from "./redux/store";
import { BrowserRouter } from "react-router-dom";

const App = () => (
  <div className="container">
    {/* <div>Name: sidebar</div>
    <div>Framework: react</div>
    <div>Language: JavaScript</div>
    <div>CSS: Empty CSS</div> */}


    <BrowserRouter>
      <Provider store={store}>
        <SidebarCompo />
      </Provider>
    </BrowserRouter>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
