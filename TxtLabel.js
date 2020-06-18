import React from "react";
 import "../App.css";

function TxtLabel(props) {
  return (
    <React.Fragment>
      <img className = "Img" src={props.large} />
      <p>Name: {props.name}</p>
      <p>DOB: {props.dob}</p>
      <p>Email: {props.email}</p>
      <p>City: {props.city}</p>
    </React.Fragment>
  );
}
export default TxtLabel;
