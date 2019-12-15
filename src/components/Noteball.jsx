import React from "react";

function Noteball(props) {
  return (
    <div className="noteball" style={{transform: "translate(-50%,-50%) rotate(" + props.angle + "deg) translate(6em,6em) rotate(-" + props.angle + "deg)"}}>
      <svg height="110" width="110">
        <circle cx="55" cy="55" r="47" fill="red" />
      </svg>
      <p>{props.text}</p>
    </div>
  );

}

export default Noteball;
