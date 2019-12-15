import React from "react";

function AddNote(props) {
  return (
    <div className="addnote noteball" style={{transform: "translate(-50%,-50%) rotate(" + props.angle + "deg) translate(6em,6em) rotate(-" + props.angle + "deg)"}}>
    </div>
  );

}

export default AddNote;
