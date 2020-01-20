import React from "react";

function MapListItem(props) {
  return <div className="select-map" onClick={props.navMap}>
    <svg height="110" width="110">
      <circle cx="55" cy="55" r="47" fill="#5CAB7D" />
    </svg>
    <p>{props.text}</p>
  </div>;
}

export default MapListItem;
