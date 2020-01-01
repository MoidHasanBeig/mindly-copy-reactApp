import React from "react";

function FooterActionBtn(props) {
 return (
   <div className="footer-btn" onClick={props.onPress}>
      <div className={props.action}></div>
   </div>
 );
}

export default FooterActionBtn;
