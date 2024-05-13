import React from "react";
import ReactDOM from "react-dom";
// import "./index.css";
import ProfileCompo from "./Profile/ProfileCompo";
import ProfileCompoRedux from "./Profile/ProfileCompoRedux";
import store from "./redux/store";
import './main.css';
import { Provider } from "react-redux";

const App = () => (
  <div className="container">
    {/* <div>Name: profile</div>
    <div>Framework: react</div>
    <div>Language: JavaScript</div>
    <div>CSS: Empty CSS</div> */}


    {/* <ProfileCompo/> */}


        <Provider store={store}>

        <ProfileCompoRedux/>

        </Provider>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
