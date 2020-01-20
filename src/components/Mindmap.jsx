import React, {useState} from "react";
import Noteball from "./Noteball";
import AddNote from "./AddNote";
import NoteballMain from "./NoteballMain";
import BreadCrumb from "./BreadCrumb";

import { touchAngle } from "../js/functions"

function Mindmap(props) {

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
    props.deleteNote();
    if (shouldRotate) {
      setRotAngle( (prevAngle) => {
        let mouseAngle = touchAngle(e);
        return mouseAngle>initialAngle ? mouseAngle-initialAngle+finalAngle : 360+mouseAngle-initialAngle+finalAngle;
      });
    }
  }

  return (<div>
    { props.notes.pid!=="home" && <BreadCrumb onBack={props.navBack} text={props.parent.title} pid={props.parent.pid} /> }
    <div
      className="circular-container"
      onTouchMove={(e)=>rotateElements(e)}
      onTouchStart={(e)=>startRotate(e)}
      onTouchEnd={stopRotate}
      >
      {props.notes.subdata.length === 0 &&
        <div>
          <AddNote
            angle={90 + rotAngle}
            onAdd={props.showNoteArea}
          />
          <AddNote
            angle={270 + rotAngle}
            onAdd={props.showNoteArea}
          />
        </div>
      }
      <NoteballMain text={props.notes.title} content={props.notes.noteContent} onEdit={props.showNoteArea} />
      {
        props.notes.subdata.map((note, index) => {
            return (
              <div>
                <Noteball
                  key={note.id}
                  pid={note.pid}
                  id={index}
                  id2={note.id}
                  angle={commAngle * index + rotAngle}
                  text={note.title}
                  onExplore={props.navNotes}
                  deleteNote={props.deleteNote}
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
