
import React from "react";
import RandomWrap from "../randomized/random_wrap";
import RandomEle from "../randomized/random_ele";
import TitleAnimation from "../animations/title_animation"
import '../../assets/style/main.scss'
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
            <TitleAnimation />
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