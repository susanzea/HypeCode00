import React from "react";
import HomeModal from "../modals/home_modal"
import "./main.scss"
import Editor from '../editor/App'

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
      <div className="main-page">
        <HomeModal showModal={showHome} exitModal={this.toggleHomeModal}/>
        <button onClick={this.toggleHomeModal} className="button-green">toggle modal</button>
        <Editor />
      </div>
    )
  }
}

export default MainPage;