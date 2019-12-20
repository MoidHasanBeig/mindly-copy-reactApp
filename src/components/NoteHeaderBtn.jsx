import React,{ useState } from "react";

function NoteHeaderBtn(props) {

  let [activeState,setActiveState] = useState("COLOR");
  // let [activeBtnStyle,setActiveBtnStyle] = useState({});

  function setActiveBtn(e) {
    //
    e.persist();
    let title = e.currentTarget.title;
    setActiveState(title);
    // setActiveBtnStyle(() => {
    //   return {background:"#5CAB7D",color:"#EEE"};
    // });
    // setActiveBtnStyle(() => {
    //   return (
    //     title === props.option
    //     ? {background:"#5CAB7D",color:"#EEE"}
    //     : {background:"#EEE",color:"#5CAB7D"});
    // });

  }

  return (
    <div
      className="header-btn"
      onClick={(e) => {
        setActiveBtn(e);
        props.onSelect(props.option);
      }
    }
      title={props.option}
      style={activeState === props.option ? {background:"#5CAB7D",color:"#EEE"} : {background:"#EEE",color:"#5CAB7D"}}
    >
      <p>{props.option}</p>
    </div>
  );
}

export default NoteHeaderBtn;
