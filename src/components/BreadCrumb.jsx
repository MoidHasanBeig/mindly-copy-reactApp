import React from "react";

function BreadCrumb(props) {
  return (
    <div className = "bread-crumb" onClick={ () => {props.onBack(props.pid)}}>
      <svg height="150" width="150">
        <circle cx="0" cy="0" r="150" fill="#5CAB7D" />
      </svg>
      <p>{props.text}</p>
    </div>
  );
}

export default BreadCrumb;
