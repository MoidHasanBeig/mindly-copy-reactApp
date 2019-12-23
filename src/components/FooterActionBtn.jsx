import React from "react";

function FooterActionBtn(props) {
 return (
   <div className="footer-btn">
      <div className={props.action}></div>
   </div>
 );
}

export default FooterActionBtn;
