
import React from "react";
import RandomWrap from "../randomized/random_wrap";
import RandomEle from "../randomized/random_ele";
import "./home-modal.scss"


function HomeModal(props) {

  if (props.showModal === false) {
    return (
      <div></div>
    )
  } else {
    return (
      <div className="wrap">
        <RandomWrap />
        <div className="home-modal--wrap">

          <div className="home-modal">
            
          </div>
          <div className="button-block">
            <button className="exit-button" onClick={props.exitModal}>X</button>
          </div>
          <div className="rand-block">
            
          </div>
          
        </div>
      </div>

    )
  }
}

export default HomeModal;