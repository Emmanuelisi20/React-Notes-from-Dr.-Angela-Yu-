// This is another way of importing react
//var React = require("react");
//var ReactDOM = require("react-dom");

import React from "react";
import ReactDOM from "react-dom";

// We can create JS on HTML we use this {} tag to reader js inside html in react.
// we can use js expresstion on the tag {} like 1+2 or math.floor(Math.random()*10s
// But we can not add js statement on the tags {}
const fName = "Emmanuel";
const lName = "Isidahomen";
const mname = "Usifoh";
const major = "Computer Science";
const age = 23;

// We can also create a object style with JS to mondify our tags h3 ## In-line Styling.
const customStyle = {
  color: "red",
  fontSize: "20px",
  border: "1px solid black"
};

//or we can change on the go
customStyle.color = "blue";


//We can also create a funtion for diiferent tags and call them on a the Div funtion
funtion Heading() {
  return <h3> Fav anime </h3>;
}
ReactDOM.render(

  // We are using the div to add many tags on one role.
  // We can also add Imgs on our html to JS code.
  // This is another way of adding syle on a H2 tag with react.
  <div>
    <Heading />
    <h1 style={customStyle}>another syle !</h1>
    <h2 style={{ color: "red" }}>Hello World!</h2>,
    <h1 className="clour"> My fav food </h1>
    <h1>
      {" "}
      Hello My {fName} {mname} {lName} and I am a {major} major{" "}
    </h1>
    <p> I am {age} years of age </p>
  </div>,
  document.getElementById("root")
);
