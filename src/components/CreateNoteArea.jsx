import React,{ useState } from "react";
import NoteHeaderBtn from "./NoteHeaderBtn";
import NoteTextArea from "./NoteTextArea";
import NoteColorArea from "./NoteColorArea";

function CreateNoteArea() {

  let [textElseColor,setTextElseToggle] = useState(true);

  function toggleTextAndColor(opt) {
    setTextElseToggle( () => {
      return opt === "TEXT" ? true : false;
    });
  }

  return (
    <div className="notearea">
      <div className="header-area">
        <NoteHeaderBtn option="TEXT" onSelect={toggleTextAndColor} />
        <NoteHeaderBtn option="COLOR" onSelect={toggleTextAndColor} />
      </div>
      <div className="body-area">
        {textElseColor ? <NoteTextArea /> : <NoteColorArea />}
      </div>
      <div className="footer-area"></div>
    </div>
  );
}

export default CreateNoteArea;
