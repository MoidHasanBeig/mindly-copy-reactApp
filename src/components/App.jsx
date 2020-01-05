import React, { useState } from "react"
import Mindmap from "./Mindmap"
import CreateNoteArea from "./CreateNoteArea";
import DeleteConfirmationDialog from "./DeleteConfirmationDialog";

import { traverseObj,updateMainData,addNewNote,deleteSubNote } from "../js/functions"

import data from "../data";
let mainData = data[0];

function App() {

  let [notes, setNotes] = useState(mainData);
  let [parentNote, setParentNote] = useState({});
  let [isNoteArea, setIsNoteArea] = useState(false);
  let [noteInputArea, setNoteInputArea] = useState({title:"",content:""});
  let [deleteConf,setDeleteConf] = useState(false);

  function createAreaToggle(title,content,action) {
    setIsNoteArea(action);
    setNoteInputArea( () => {
      return {
        title: title,
        content: content
      };
    })
  }

  let x;

  function deleteOption(index) {
      x = setTimeout( function() {
        console.log("delete");
        setDeleteConf([true,index]);
      }, 700);
  }

  function shouldDel(action,index) {
    if (action === "del") {
      deleteOption(index);
    }
    else {
      clearTimeout(x);
    }
  }

  function onDelete() {
    // setDeleteConf(false);
    deleteSubNote(mainData,notes.id,deleteConf[1]);
  }

  function navigateNotes(nid,pid) {
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
        updateMainData(mainData,notes.id,val);
      }

      else if (isNoteArea === "add") {
        addNewNote(mainData,notes.id,val);
      }
  }

  function clickScreen() {
    setDeleteConf(false);
  }

  return (
    <div onClick={clickScreen} className="app">
      {deleteConf && <DeleteConfirmationDialog deleteAction={onDelete}/>}
      <Mindmap
        showNoteArea={createAreaToggle}
        navNotes={navigateNotes}
        navBack={goBack}
        notes={notes}
        parent={parentNote}
        deleteNote={shouldDel}
        clickScreen={clickScreen}
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
