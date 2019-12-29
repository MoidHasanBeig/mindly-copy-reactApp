import React, {useState} from "react"
import Mindmap from "./Mindmap"
import CreateNoteArea from "./CreateNoteArea";

import data from "../data";

function App() {

  let [notes, setNotes] = useState(data[0]);
  let [isNoteArea, setIsNoteArea] = useState(false);
  let [noteInputArea, setNoteInputArea] = useState({title:"",content:""});

  function createAreaToggle(title,content) {
    setIsNoteArea(true);
    setNoteInputArea( () => {
      return {title: title, content: content};
    })
  }

  function updateValues() {

  }

  return (
    <div>
      <Mindmap showNoteArea={createAreaToggle} notes={notes} />
      {isNoteArea && <CreateNoteArea inputValues={noteInputArea} getValues={updateValues} />}
    </div>
  );
}

export default App;
