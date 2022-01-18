import React from "react";
import { Link } from 'react-router-dom';
import './navbar.css'

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
    // debugger
    if (this.props.loggedIn) {
      return (
        <div className="nav-right">
          <div className="nav-inner-right">
            Welcome back, {this.props.user.first_name}
          </div>
          <div className="nav-inner-button">
            <button onClick={this.logoutUser}> Log me out </button>
          </div>
        </div>
      )
    } else {
      return (
        <div className="nav-right">
            <div className="nav-inner-right">
                <Link to={'/signup'}>Signup</Link>
            </div>
          <div className="nav-inner-button">
                <Link to={'/login'}>Login</Link>
          </div>
        </div>
      )
    }
  }

  render() {
    return (
      <div className="navbar">
        <h1>HYPEcode</h1>
        { this.getLinks() }
      </div>
    )
  }
}

export default NavBar;