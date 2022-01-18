import { modelNames } from "mongoose";
import React from "react";
import "./home-modal.scss"


function HomeModal(props) {

  if (props.showModal === false) {
    return (
      <div></div>
    )
  } else {
    return (
      <div className="home-modal--wrap">
      <div className="home-modal">
        home modal
        
      </div>
      <div className="button-block">
        <button className="exit-button" onClick={props.exitModal}>X</button>
      </div>
    </div>
    )
  }
}

export default HomeModal;