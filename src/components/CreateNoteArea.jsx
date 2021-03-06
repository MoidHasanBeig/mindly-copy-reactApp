import React,{ useState } from "react";
import NoteHeaderBtn from "./NoteHeaderBtn";
import FooterActionBtn from "./FooterActionBtn";
import NoteTextArea from "./NoteTextArea";
import NoteColorArea from "./NoteColorArea";

function CreateNoteArea(props) {

  let [textElseColor,setTextElseToggle] = useState("TEXT");
  let [tempNote,setTempNote] = useState({});

  function toggleTextAndColor(opt) {
    setTextElseToggle( () => {
      return opt;
    });
  }

  function getValues(val) {
    setTempNote(val);
  }

  return (
    <div className="notearea">
      <div className="header-area">
        <NoteHeaderBtn option="TEXT" onSelect={toggleTextAndColor} isActive={textElseColor} />
        <NoteHeaderBtn option="COLOR" onSelect={toggleTextAndColor} isActive={textElseColor} />
      </div>
      <div className="body-area">
        {textElseColor === "TEXT" ? <NoteTextArea inputValues={props.inputValues} passValue={getValues} /> : <NoteColorArea />}
      </div>
      <div className="footer-area">
        <FooterActionBtn action="cancel-btn" />
        <FooterActionBtn action="save-btn" onPress={ () => {props.saveTemp(tempNote)}} />
      </div>
    </div>
  );
}

export default CreateNoteArea;
