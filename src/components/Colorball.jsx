import React from "react";

function Colorball(props) {
  return (
    <div className="colorball" onClick={ () => {props.onSelect(props.color)}}>
      <svg height="40" width="40">
        <circle cx="20" cy="20" r="20" fill={props.color} />
      </svg>
    </div>
  );
}

export default Colorball;
