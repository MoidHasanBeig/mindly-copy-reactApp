import React, {useState} from "react";
import Noteball from "./Noteball";
import AddNote from "./AddNote";
import NoteballMain from "./NoteballMain";
import BreadCrumb from "./BreadCrumb";

import { touchAngle } from "../js/functions"

import data from "../data";

function Mindmap(props) {

  let [prevNotes,setPrevNotes] = useState(props.notes);
  let commAngle = 360 / (props.notes.subdata.length);
  let offsetAngle = commAngle/2;
  let [shouldRotate, setShouldRotate] = useState(false);
  let [initialAngle, setInitialAngle] = useState(20);
  let [finalAngle, setFinalAngle] = useState(20);
  let [rotAngle, setRotAngle] = useState(20);

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
    { props.notes.id!=="a00" && <BreadCrumb onBack={props.navBack} text={props.parent.title} pid={props.parent.pid} /> }
    <div
      className="circular-container"
      onTouchMove={(e)=>rotateElements(e)}
      onTouchStart={(e)=>startRotate(e)}
      onTouchEnd={stopRotate}
      >
      <NoteballMain text={props.notes.title} content={props.notes.noteContent} onEdit={props.showNoteArea} />
      {
        props.notes.subdata.map((note, index) => {
            return (
              <div>
                <Noteball
                  key={index}
                  pid={note.pid}
                  id2={index}
                  angle={commAngle * index + rotAngle}
                  text={note.title}
                  onExplore={props.navNotes}
                />
                <AddNote
                  key={index}
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
