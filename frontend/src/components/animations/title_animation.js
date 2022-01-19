import React from 'react';

class TitleAnimation extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      currentDisplay: "",
      finalDisplay: "HypeCode",

    })

    this.displayLetters = this.displayLetters.bind(this);
  }

  componentDidMount() {
    this.displayLetters();
  }

  displayNextLetter(idx) {
    this.setState({
      currentDisplay: this.state.currentDisplay += this.state.finalDisplay.split("")[idx]
    });

  }

  displayLetters() {
    let title = this.state.finalDisplay.split("").slice();
    let currentDisplay = this.state.currentDisplay.split("").slice()
    console.log(title)
    let i = 0;
    let t = setInterval(() => {
        if (i < title.length) {
          this.displayNextLetter(i);
          console.log("interval t ran")
        } else {
          clearInterval(t);
          console.log("interval cleared")
        }
        i += 1
    }, 333)
  }

  render() {

    let display = this.state.currentDisplay;
    return (
      <div className='hclogo'>
        {display}
      </div>
    )
  }
}

export default TitleAnimation;