import React, {useState} from "react";
import Noteball from "./Noteball";
import NoteballMain from "./NoteballMain";

import touchAngle from "../js/touchangle"

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
      let startAngle = touchAngle(e);
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
        let mouseAngle = touchAngle(e);
        return mouseAngle>initialAngle ? mouseAngle-initialAngle+finalAngle : 360+mouseAngle-initialAngle+finalAngle;
      });
    }
  }

  return (<div>
    <div className="circular-container" onTouchMove={(e)=>rotateElements(e)} onTouchStart={(e)=>startRotate(e)} onTouchEnd={stopRotate}>
      <NoteballMain text={notes[0]}/> {
        notes.map((note, index) => {
          return <Noteball key={index} id={index} angle={commAngle * index + rotAngle} text={note}/>
        })
      }
    </div>
  </div>);
}

export default Mindmap;
