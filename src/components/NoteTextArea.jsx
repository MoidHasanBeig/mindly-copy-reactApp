import React, { useState } from "react";

function NoteTextArea(props) {

  let [inputValue,setInputValue] = useState(props.inputValues);
  props.passValue(inputValue);

  function updateInput(event) {
    let {value,name} = event.target;

    setInputValue( prevValue => {
      return {
        ...prevValue,
        [name]: value
      }
    });

  }

  return (
    <div className="note-text-area">
      <input placeholder="Title" value={inputValue.title} name="title" onChange={updateInput} />
      <textarea placeholder="Note" value={inputValue.content} name="content" onChange={updateInput} ></textarea>
    </div>
  );
}

export default NoteTextArea;
