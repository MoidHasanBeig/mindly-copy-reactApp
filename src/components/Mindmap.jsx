import React, {useState} from "react";
import Noteball from "./Noteball";
import NoteballMain from "./NoteballMain";

import dragRotate from "../js/dragrotate"
import initAngle from "../js/initangle"

import data from "../data";

function Mindmap() {

  let [notes, setNotes] = useState(data);
  let commAngle = 360 / notes.length;
  let [shouldRotate, setShouldRotate] = useState(false);
  let [initialAngle, setInitialAngle] = useState(0);
  let [finalAngle, setFinalAngle] = useState(0);
  let [rotAngle, setRotAngle] = useState(0);

  function startRotate(e) {
    e.persist();
    setInitialAngle( () => {
      let startAngle = initAngle(e);
      return startAngle;
    });
    setShouldRotate(true);
  }

  function stopRotate() {
    setFinalAngle(rotAngle);
    setShouldRotate(false);
  }

  function rotateElements(e) {
    e.persist();
    if (shouldRotate) {
      setRotAngle( (prevAngle) => {
        let mouseAngle = dragRotate(e);
        return mouseAngle>initialAngle ? mouseAngle-initialAngle+finalAngle : 360+mouseAngle-initialAngle+finalAngle;
      });
    }
  }

  return (<div>
    <div className="circular-container" onMouseMove={(e)=>rotateElements(e)} onMouseDown={(e)=>startRotate(e)} onMouseUp={stopRotate}>
      <NoteballMain text={notes[0]}/> {
        notes.map((note, index) => {
          console.log(finalAngle);
          return <Noteball key={index} id={index} angle={commAngle * index + rotAngle} text={note}/>
        })
      }
    </div>
  </div>);
}

export default Mindmap;
