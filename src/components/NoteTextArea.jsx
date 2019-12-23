import React from "react";

function NoteTextArea() {
  return (
    <div className="note-text-area">
      <input placeholder="Title" />
      <textarea placeholder="Note"></textarea>
    </div>
  );
}

export default NoteTextArea;
