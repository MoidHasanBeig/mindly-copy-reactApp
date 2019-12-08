import React,{ useState } from "react";
import Noteball from "./Noteball";
import NoteballMain from "./NoteballMain";
import data from "../data";


function Mindmap() {

  let [notes,setNotes] = useState(data);
  let commAngle = 360/notes.length;

  return (
    <div>
      <div className="circular-container">
        <NoteballMain text={notes[0]} />
        {notes.map( (note,index) => {
          return <Noteball key={index} id={index} angle={commAngle*index} text={note}/>
        })}
      </div>
    </div>
  );
}

export default Mindmap;
