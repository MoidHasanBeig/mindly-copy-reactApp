import React, {useState} from "react"
import Mindmap from "./Mindmap"
import CreateNoteArea from "./CreateNoteArea";

function App() {

  let [isNoteArea, setIsNoteArea] = useState(false);

  function createAreaToggle() {
    setIsNoteArea(true);
  }

  return (
    <div>
      <Mindmap showNoteArea={createAreaToggle} />
      {isNoteArea && <CreateNoteArea />}
    </div>
  );
}

export default App;
