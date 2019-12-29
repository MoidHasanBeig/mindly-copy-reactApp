import React from "react";

function AddNote(props) {
  return (
    <div className="addnote noteball" onClick={() => {props.onAdd("","")}} style={{transform: "translate(-50%,-50%) rotate(" + props.angle + "deg) translate(6rem,6rem) rotate(-" + props.angle + "deg)"}}>
    </div>
  );

}

export default AddNote;
