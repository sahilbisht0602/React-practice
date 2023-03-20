import React from "react";
import ReactDOM from "react-dom/client";

//make a heading element , returned heading is a js object which is a react element
const heading = React.createElement("div", { id: "parent" }, [
  React.createElement(
    "div",
    {
      id: "child1",
      xyz: "abcd",
    },
    [
      React.createElement("h1", {}, "i am h1"),
      React.createElement("h2", {}, "hi i am h2"),
    ]
  ),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "hi i am h1"),
    React.createElement("h2", {}, "hi i am h2"),
  ]),
]);

console.log(heading);
//make a root here we render this heading
const root = ReactDOM.createRoot(document.getElementById("root"));

//render will take that js object and convert it in to html element and put it inside root div
root.render(heading);
