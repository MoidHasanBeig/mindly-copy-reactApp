import React, {useState} from "react"
import Mindmap from "./Mindmap"
import CreateNoteArea from "./CreateNoteArea";

import data from "../data";

function App() {

  let mainData = data[0];
  let [notes, setNotes] = useState(mainData);
  let [isNoteArea, setIsNoteArea] = useState(false);
  let [noteInputArea, setNoteInputArea] = useState({title:"",content:""});

  function referParentObj() {
    notes.subdata.forEach( (item) => {
      item.parent = notes;
    });
  }referParentObj();

  function createAreaToggle(title,content) {
    setIsNoteArea(true);
    setNoteInputArea( () => {
      return {
        title: title,
        content: content
      };
    })
  }

  function navigateNotes(nid) {
    setNotes( (prevData) => {
      return prevData.subdata[nid];
    });
  }

  function goBack() {
    setNotes(notes.parent);
  }

  function updateValues(val) {
      setIsNoteArea(false);
      setNotes( prevValue => {
        return {
          ...prevValue,
          title: val.title,
          noteContent: val.content
        };
      });
  }

  return (
    <div>
      <Mindmap
        showNoteArea={createAreaToggle}
        navNotes={navigateNotes}
        navBack={goBack}
        notes={notes}
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
