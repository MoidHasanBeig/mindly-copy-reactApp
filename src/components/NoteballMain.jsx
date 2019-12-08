import React from "react";

function NoteballMain(props) {
  return (
    <div className="noteball noteball-main">
      <svg height="100" width="100">
        <circle cx="50" cy="50" r="40" fill="red" />
      </svg>
      <p>{props.text}</p>
    </div>
  );

}

export default NoteballMain;
