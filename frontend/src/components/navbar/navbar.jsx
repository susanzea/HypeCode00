import React from "react";
import { Link } from 'react-router-dom';
// import '../../assets/style/main.scss'
import MenuContainer from "../menu/menu_container";

var $ = require("jquery");


class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
    this.loginDemoUser = this.loginDemoUser.bind(this);
  }


  logoutUser(e) {
    e.preventDefault();
    this.props.logout();
  }

  loginDemoUser(e) {
    this.props.loginAction({
      email: "demo_user@gmail.com",
      password: "password",
    })
  }

  setOnPage(page) {
    this.setState({
      onPage: page
    })
  }


  getLinks() {
    if (this.props.loggedIn) {
      return (
        <div className="nav-right" id="menulogged">
          <MenuContainer />
        </div>
      )
    } else {
      let pathname = this.props.location.pathname;
      
      if (pathname === '/signup') {
        return (
          <div className="nav-right">
              <div className="nav-inner-button">
                  <Link to={'/login'} className="menu-icon" id="login-button-demo">Login</Link>
              </div>

              <div className="nav-inner-button">
                <Link to={'/'} onClick={() => this.loginDemoUser()} className="menu-icon" id="login-button">Demo</Link>
              </div>
          </div>
        )
      } else if (pathname === '/login') {
        return (
          <div className="nav-right">
              <div className="nav-inner-button">
                  <Link to={'/signup'} className="menu-icon" id="signup-button">Signup</Link>
              </div>
              <div className="nav-inner-button">
                <Link to={'/'} onClick={() => this.loginDemoUser()} className="menu-icon" id="signup-button">Demo</Link>
              </div>
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

              <div className="nav-inner-button">
                <Link to={'/'} onClick={() => this.loginDemoUser()} className="menu-icon" id="signup-button">Demo</Link>
              </div>
          </div>
        )
      }

    }
  }

  render() {
    // debugger
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