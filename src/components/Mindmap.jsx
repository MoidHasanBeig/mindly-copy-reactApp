import React, {useState} from "react";
import Noteball from "./Noteball";
import AddNote from "./AddNote";
import NoteballMain from "./NoteballMain";
import BreadCrumb from "./BreadCrumb";

import touchAngle from "../js/touchangle"

import data from "../data";

function Mindmap(props) {

  let [notes, setNotes] = useState(data.a00);
  let commAngle = 360 / (notes.length-2);
  let offsetAngle = commAngle/2;
  let [shouldRotate, setShouldRotate] = useState(false);
  let [initialAngle, setInitialAngle] = useState(0);
  let [finalAngle, setFinalAngle] = useState(0);
  let [rotAngle, setRotAngle] = useState(0);
  let [backState,setBackState] = useState("");

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

  function navigateNotes(nid) {
    if(data[nid]){
      setNotes(data[nid]);
      console.log(nid.substring(0,3));
    }
  }

  return (<div>
    {notes[1].id!== "a00" && <BreadCrumb />}
    <div
      className="circular-container"
      onTouchMove={(e)=>rotateElements(e)}
      onTouchStart={(e)=>startRotate(e)}
      onTouchEnd={stopRotate}
      >
      {
        notes.map((note, index) => {
          if (index>1) {
            return (
              <div>
                <Noteball
                  key={note.id}
                  id={index}
                  id2={note.id}
                  angle={commAngle * index + rotAngle}
                  text={note.data}
                  onExplore={navigateNotes}
                />
                <AddNote
                  key={index}
                  id={index}
                  angle={commAngle * index + offsetAngle + rotAngle}
                  onAdd={props.showNoteArea}
                />
              </div>
            );
          }
          else {
            return (
              <div>
                <NoteballMain key={note.id} text={note.data} />
                {notes.length<3 && (
                  <div>
                    <AddNote
                      angle={rotAngle}
                      onAdd={props.showNoteArea}
                    />
                    <AddNote
                      angle={rotAngle+180}
                      onAdd={props.showNoteArea}
                    />
                  </div>
                )}
              </div>
            );
          }
        })
      }
    </div>
  </div>);
}

export default Mindmap;
