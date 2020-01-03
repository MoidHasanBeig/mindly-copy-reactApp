import React from "react";

function NoteballMain(props) {
  return (
    <div className="noteball noteball-main" onClick={ () => {props.onEdit(props.text,props.content,"edit")}}>
      <svg height="130" width="130">
        <circle cx="65" cy="65" r="63" fill="#5CAB7D" />
      </svg>
      <p>{props.text}</p>
    </div>
  );

}

export default NoteballMain;
