import React from "react";

function NoteHeaderBtn(props) {
  return (
    <div className="header-btn" onClick={props.onSelect} >
      <p>{props.option}</p>
    </div>
  );
}

export default NoteHeaderBtn;
