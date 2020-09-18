import React from "react";
import ReactDOM from "react-dom";
import App from "./routes/App";
import "./styles.scss";

var mountNode = document.getElementById("app");
ReactDOM.render(<App />, mountNode);
