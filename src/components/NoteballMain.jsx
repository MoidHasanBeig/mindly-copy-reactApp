import React from "react";

function NoteballMain(props) {
  return (
    <div className="noteball noteball-main">
      <svg height="120" width="120">
        <circle cx="60" cy="60" r="60" fill="red" />
      </svg>
      <p>{props.text}</p>
    </div>
  );

}

export default NoteballMain;
