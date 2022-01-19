import React from 'react';

class TitleAnimation extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      currentDisplay: "",
      finalDisplay: this.props.finalDisplay,
      name: this.props.name,
      interval: this.props.interval,
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

    let i = 0;
    let t = setInterval(() => {
        if (i < title.length) {
          this.displayNextLetter(i);
        } else {
          clearInterval(t);
        }
        i += 1
    }, this.state.interval)
  }

  render() {

    let display = this.state.currentDisplay;
    return (
      <div className={this.state.name}>
        {display}
      </div>
    )
  }
}

export default TitleAnimation;