import React,{ useState } from "react";
import Colorball from "./Colorball";
import colorHexCodes from "../colordata";

function NoteColorArea() {

  let [currentColor,setCurrentColor] = useState("#5CAB7D");

  function selectColor(col) {
    setCurrentColor(col);
  }

  return (
    <div className="note-color-area">
      <div className="color-view">
        <svg height="160" width="160">
          <circle cx="80" cy="80" r="80" fill={currentColor} />
        </svg>
      </div>
      <div className="color-picker">
        {colorHexCodes.map( (color) => {
          return <Colorball color={color} onSelect={selectColor}/>
        })}
      </div>
    </div>
  );
}

export default NoteColorArea;
