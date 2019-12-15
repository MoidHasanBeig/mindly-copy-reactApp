import React from "react";

function NoteballMain(props) {
  return (
    <div className="noteball noteball-main">
      <svg height="130" width="130">
        <circle cx="65" cy="65" r="63" fill="red" />
      </svg>
      <div className="orbit"></div>
      <p>{props.text}</p>
    </div>
  );

}

export default NoteballMain;
