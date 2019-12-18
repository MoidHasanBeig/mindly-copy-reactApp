import React, {useState} from "react";
import Noteball from "./Noteball";
import AddNote from "./AddNote";
import NoteballMain from "./NoteballMain";

import touchAngle from "../js/touchangle"

import data from "../data";

function Mindmap(props) {

  let [notes, setNotes] = useState(data);
  let commAngle = 360 / notes.length;
  let offsetAngle = commAngle/2;
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
    <div
      className="circular-container"
      onTouchMove={(e)=>rotateElements(e)}
      onTouchStart={(e)=>startRotate(e)}
      onTouchEnd={stopRotate}
      >
      <NoteballMain text={notes[0]}/> {
        notes.map((note, index) => {
          return (
            <div>
              <Noteball
                key={index}
                id={index}
                angle={commAngle * index + rotAngle}
                text={note}
              />
              <AddNote
                key={index+100}
                id={index}
                angle={commAngle * index + offsetAngle + rotAngle}
                onAdd={props.showNoteArea}
              />
            </div>
          );
        })
      }
    </div>
  </div>);
}

export default Mindmap;
