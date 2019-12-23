import React from "react";

function NoteHeaderBtn(props) {

  return (
    <div
      className="header-btn"
      onClick={(e) => {
        props.onSelect(props.option);
      }
    }
      title={props.option}
      style={props.isActive === props.option ? {background:"#5CAB7D",color:"#EEE"} : {background:"#EEE",color:"#5CAB7D"}}
    >
      <p>{props.option}</p>
    </div>
  );
}

export default NoteHeaderBtn;
