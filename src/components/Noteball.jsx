import React from "react";

function Noteball(props) {
  return (
    <div className="noteball" style={{transform: "translate(-50%,-50%) rotate(" + props.angle + "deg) translate(6em,6em) rotate(-" + props.angle + "deg)"}}>
      <svg height="100" width="100">
        <circle cx="50" cy="50" r="40" fill="red" />
      </svg>
      <p>{props.text}</p>
    </div>
  );

}

export default Noteball;
