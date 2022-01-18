import React from "react";
import HomeModal from "../modals/home_modal"

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showHomeModal: false
    }

    this.toggleHomeModal = this.toggleHomeModal.bind(this);
  }

  toggleHomeModal() {
    let newState = Object.assign({}, this.state);

    this.setState({
      showHomeModal: !newState.showHomeModal
    })
  }

  render() {
    const showHome = this.state.showHomeModal;
    return (
      <div>
        <h1>HypeCode</h1>
        <HomeModal showModal={showHome} exitModal={this.toggleHomeModal}/>
        <button onClick={this.toggleHomeModal}>toggle modal</button>
      </div>
    )
  }
}

export default MainPage;