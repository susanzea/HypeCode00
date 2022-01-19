import React from "react";
import RandomEle from "./random_ele";
import "./randomized.scss"
class RandomWrap extends React.Component {
  constructor(props) {
    super(props);
  }


  

  render() {
    
    return (
      <div className="random-wrap">
          <RandomEle />
      </div>
    )
  }
}

export default RandomWrap;