import React from "react";
import ReactDOM from "react-dom/client"

const heading = document.createElement("div");
heading.innerHTML = "Hello World From Javascript";
const root = document.getElementById("root");
root.appendChild(heading);

const parent = React.createElement(
  "div",
  {id:'parent'},
 [React.createElement("h1", {id:'child'}, "I am react Component 🚀 " ),
    React.createElement("h2", {}, "I am h2 Tag ")
 ]
);
const reactRoot = ReactDOM.createRoot(document.getElementById("root"));
reactRoot.render(parent);
