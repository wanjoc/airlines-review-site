import React from "react";

import "./scss/PopUp.scss"

const PopUp = props => {

  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}>x</span>
        <p>Are you sure you want to delete this airline and all associated reviews? Click ok to proceed</p>
        <button className="ok-button" onClick={props.handleDelete}>Ok</button>
      </div>
    </div>
  );
};
 
export default PopUp;