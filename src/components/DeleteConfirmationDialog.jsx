import React from "react";

function DeleteConfirmationDialog(props) {
  return (
    <div className="delete-option" onClick={ () => {props.deleteAction("delCancel")}}>
      Delete
    </div>
  );
}

export default DeleteConfirmationDialog;
