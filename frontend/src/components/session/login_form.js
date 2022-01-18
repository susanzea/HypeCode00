import React from "react";
// import { withRouter } from "react-router-dom";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errors: {}
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.clearedErrors = false;
  }

  handleInput(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();

    console.log(this.state);
    this.props.login({
      email: this.state.email,
      password: this.state.password
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Email</label>
            <input
              name="email"
              type="text"
              value={this.state.email}
              onChange={this.handleInput} />
          </div>

          <div>
            <label>Password</label>
            <input
              name="password"
              type="text"
              value={this.state.password}
              onChange={this.handleInput} />
          </div>
          <button>Log in</button>
        </form>
      </div>
    )
  }
}

export default LoginForm;