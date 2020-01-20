import React from "react";

function DeleteConfirmationDialog(props) {
  return (
    <div className="delete-option" onClick={ () => {props.deleteConfirmed()}}>
      Delete
    </div>
  );
}

export default DeleteConfirmationDialog;
