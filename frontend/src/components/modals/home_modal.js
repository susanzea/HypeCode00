
import React from "react";
import RandomWrap from "../randomized/random_wrap";
import RandomEle from "../randomized/random_ele";
import TitleAnimation from "../animations/title_animation"
// import '../../assets/style/main.scss'
// import "./home-modal.scss"


function HomeModal(props) {

  let description = " HypeCode is a coding environment where you learn html.  You click a color coded html element, enter the content, and Hypecode displays the results tag on click. On the left, there is an iframe that renders the code compiled from the editor."
  
  if (props.showModal === false) {
    return (
      <div></div>
    )
  } else {
    return (

        <div className="home-modal--wrap">

          <div className="home-modal">
              <div className="btn-container">
                <button className="exit-button" onClick={props.exitModal}>X</button>
              </div>
              

              <div className="modal-logo">Description</div>
              

            <div className="description">{description}</div>
        </div>
      </div>



    )
  }
}

export default HomeModal;