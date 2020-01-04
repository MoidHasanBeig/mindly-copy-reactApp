import React, { useState } from "react"
import Mindmap from "./Mindmap"
import CreateNoteArea from "./CreateNoteArea";

import { traverseObj,updateMainData,addNewNote } from "../js/functions"

import data from "../data";
let mainData = data[0];

function App() {

  let [notes, setNotes] = useState(mainData);
  let [parentNote, setParentNote] = useState({});
  let [isNoteArea, setIsNoteArea] = useState(false);
  let [noteInputArea, setNoteInputArea] = useState({title:"",content:""});

  function createAreaToggle(title,content,action) {
    setIsNoteArea(action);
    setNoteInputArea( () => {
      return {
        title: title,
        content: content
      };
    })
  }

  function navigateNotes(nid,pid) {
    // setNotes( (prevData) => {
    //   return prevData.subdata[nid];
    // });
    let parent = traverseObj(mainData,pid);
    setParentNote(parent);
    let currentNote = traverseObj(mainData,nid);
    setNotes(currentNote);
  }

  function goBack(pid) {
    let lvl = traverseObj(mainData,notes.pid);
    setNotes(lvl);
    let parent = traverseObj(mainData,pid);
    setParentNote(parent);
  }

  function updateValues(val) {
      setIsNoteArea(false);
      if (isNoteArea === "edit") {
        setNotes( prevValue => {
          return {
            ...prevValue,
            title: val.title,
            noteContent: val.content,
          };
        });
        updateMainData(mainData,notes.id,val);
      }

      else if (isNoteArea === "add") {
        addNewNote(mainData,notes.id,val);
      }
  }

  return (
    <div>
      <Mindmap
        showNoteArea={createAreaToggle}
        navNotes={navigateNotes}
        navBack={goBack}
        notes={notes}
        parent={parentNote}
      />
      {isNoteArea &&
        <CreateNoteArea
          inputValues={noteInputArea}
          saveTemp={updateValues}
        />}
    </div>
  );
}

export default App;
