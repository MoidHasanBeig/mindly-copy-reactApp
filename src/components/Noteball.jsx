import React from "react";

function Noteball(props) {
  return (
    <div onTouchStart={ () => {props.deleteNote("del",props.id)}} onTouchEnd={ () => {props.deleteNote("cancelDel",0)}}  onClick={ () => {props.onExplore(props.id2,props.pid)}} className="noteball" style={{transform: "translate(-50%,-50%) rotate(" + props.angle + "deg) translate(6rem,6rem) rotate(-" + props.angle + "deg)"}}>
      <svg height="110" width="110">
        <circle cx="55" cy="55" r="47" fill="#5CAB7D" />
      </svg>
      <p>{props.text}</p>
    </div>
  );

}

export default Noteball;
