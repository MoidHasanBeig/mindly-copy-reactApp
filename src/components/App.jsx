import React, { useState } from "react"
import Mindmap from "./Mindmap"
import CreateNoteArea from "./CreateNoteArea";
import Home from "./Home";
import DeleteConfirmationDialog from "./DeleteConfirmationDialog";

import { traverseObj,updateMainData,addNewNote,addNewMap,deleteSubNote } from "../js/functions"

import data from "../data";
let saveData = JSON.parse(localStorage.getItem("mydb"));
if(!saveData) {
  localStorage.setItem("mydb", JSON.stringify([]));
}
let retrieveData = JSON.parse(localStorage.getItem("mydb"));
let mainData;

function App() {
  let [isHomeScreen,setIsHomeScreen] = useState(true);
  let [notes, setNotes] = useState();
  let [parentNote, setParentNote] = useState({});
  let [isNoteArea, setIsNoteArea] = useState(false);
  let [noteInputArea, setNoteInputArea] = useState({title:"",content:""});
  let [deleteConf,setDeleteConf] = useState(false);
  let [selMap,setSelMap] = useState(0);
  // let a = [];
  // let a = JSON.parse(localStorage.getItem("mydb"));
  // localStorage.setItem("mydb", JSON.stringify(mainData));
  function createAreaToggle(title,content,action) {
    setIsNoteArea(action);
    setNoteInputArea( () => {
      return {
        title: title,
        content: content
      };
    })
  }

  function createMap() {
    document.documentElement.requestFullscreen();
    setIsNoteArea("newmap");
  }

  function navMap(index) {
    setIsHomeScreen(false);
    document.documentElement.requestFullscreen();
    console.log(index);
    mainData = retrieveData[index];
    setNotes(mainData);
    setSelMap(index);
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
    deleteSubNote(mainData,notes.id,deleteConf[1]);
    retrieveData[selMap] = mainData;
    localStorage.setItem("mydb", JSON.stringify(retrieveData));
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
        retrieveData[selMap] = mainData;
      }
      else if (isNoteArea === "add") {
        addNewNote(mainData,notes.id,val);
        retrieveData[selMap] = mainData;
      }
      else if (isNoteArea === "newmap") {
        addNewMap(retrieveData,val);
        let len = retrieveData.length;
        mainData = retrieveData[len-1];
        setNotes(mainData);
        setSelMap(len);
        setIsHomeScreen(false);
      }
      localStorage.setItem("mydb", JSON.stringify(retrieveData));
  }

  function clickScreen() {
    setDeleteConf(false);
  }

  return (
    <div onClick={clickScreen} className="app">
      {deleteConf && <DeleteConfirmationDialog deleteConfirmed={onDelete}/>}
      {isHomeScreen
        ?<Home
          createMap={createMap}
          navMap={navMap}
          data={retrieveData}
        />
        :<Mindmap
          showNoteArea={createAreaToggle}
          navNotes={navigateNotes}
          navBack={goBack}
          notes={notes}
          parent={parentNote}
          deleteNote={shouldDel}
          clickScreen={clickScreen}
        />
      }
      {isNoteArea &&
        <CreateNoteArea
          inputValues={noteInputArea}
          saveTemp={updateValues}
        />}
    </div>
  );
}

export default App;
