import React from "react";
import { Link } from 'react-router-dom';
import '../../assets/style/main.scss'
import MenuContainer from "../menu/menu_container";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
  }

  logoutUser(e) {
    e.preventDefault();
    this.props.logout();
  }

  getLinks() {
    if (this.props.loggedIn) {
      return (
        <div className="nav-right" id="menulogged">
          <MenuContainer />
        </div>
      )
    } else {
      return (
        <div className="nav-right">
            <div className="nav-inner-button">
                <Link to={'/signup'} className="menu-icon" id="signup-button">Signup</Link>
            </div>
            <div className="nav-inner-button">
                <Link to={'/login'} className="menu-icon" id="login-button">Login</Link>
            </div>
        </div>
      )
    }
  }

  render() {
    const title = <plaintext><span id="blue">&lt;</span><span id="red">H</span><span id="orange">y</span><span id="yellow">p</span><span id="lightgreen">e</span><span id="green">C</span><span id="lightblue">o</span><span id="blue">d</span><span id="lightviolet">e</span><span id="violet">&#47;</span><span id="fuschia">&gt;</span></plaintext>

    return (
      <div className="navbar">
        <Link to="/" className="hclogo">{title}</Link>
        { this.getLinks() }
      </div>
    )
  }
}

export default NavBar;