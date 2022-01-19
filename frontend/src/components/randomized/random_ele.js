import React from "react";

class RandomEle extends React.Component {
  constructor(props) {
    super(props);
    this.generateRandomElement.bind(this);
    this.state = ({ htypes: ["<h1></h1>", "<h1>", "</h1>", "<div></div>", "<div>", "</div>", "<p></p>",
                         "<p>", "</p>", "<ul></ul>", "<ul>", "</ul>", "<li></li>", "<li>", "</li>",
                         "<link>", "<ol></ol>", "<ol>", "</ol>"],
                    colors: ["#31CBFD", "#F861FF", "#1620E9","#FBA602", 
                             "#56C9FF","#F82F40", "#46F200"] });
  }

  randomlyPlaceEle() {
    let x = Math.floor(Math.random() * 1111);
    let y = Math.floor(Math.random() * 1111);
    let pos = [x.toString() + 'px', y.toString() + 'px'];
    
    return pos;
  }

  generateRandomElement() {
    let htypes = this.state.htypes;
    let colors = this.state.colors;

    let idx = Math.floor(Math.random() * htypes.length);
    let colorIdx = Math.floor(Math.random() * colors.length);

    let htype = htypes[idx];
    let color = colors[colorIdx]

    let ele = ({
      color,
      htype
    })

    return ele;
  }

  returnDiv() {
    let arr = [];
    for(let i = 0; i < 555; i++) {
      let ele = this.generateRandomElement();
      let pos = this.randomlyPlaceEle();
      let left = pos[0];
      let right = pos[0];
      let top = pos[1];
      let htype = ele.htype;
      let color = ele.color;
   
      let div = <div style={{color, left, top, position: "absolute"}}>{htype}</div>
      let rdiv = <div style={{color, right, top, position: "absolute"}}>{htype}</div>
      arr.unshift(div);
      arr.unshift(rdiv);
      
    }
    return arr;
  }

  render() {
    return (
      <div>
        {this.returnDiv()}
      </div>
    )
  }
}

export default RandomEle;