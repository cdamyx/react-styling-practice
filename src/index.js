//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
import React from "react";
import ReactDOM from "react-dom";

const date = new Date();
const hours = date.getHours();
let timeOfDay = "";
//let color = "";
let customColor = {
  color: ""
};

if (hours < 12) {
  timeOfDay = "Morning";
  customColor.color = "red";
} else if (hours < 18) {
  timeOfDay = "Afternoon";
  customColor.color = "green";
} else {
  timeOfDay = "Evening";
  customColor.color = "blue";
}

ReactDOM.render(
  <h1 className="heading" style={customColor}>
    Good {timeOfDay}
  </h1>,
  document.getElementById("root")
);
