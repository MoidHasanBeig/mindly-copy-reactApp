import React from "react";

function NoteHeaderBtn(props) {
  return (
    <div className="header-btn" onClick={props.onSelect} style={props.btnNo==="1" ? {marginRight:"0"} : {marginRight:"5px"}}>
      <p>{props.option}</p>
    </div>
  );
}

export default NoteHeaderBtn;
