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
                <Link to={'/signup'} className="menu-icon" id="signup-button">Sign Up</Link>
            </div>
            <div className="nav-inner-button">
                <Link to={'/login'} className="menu-icon" id="login-button">Log In</Link>
            </div>
        </div>
      )
    }
  }

  render() {
    return (
      <div className="navbar">
        <Link to="/" className="hclogo">HypeCode</Link>
        { this.getLinks() }
      </div>
    )
  }
}

export default NavBar;