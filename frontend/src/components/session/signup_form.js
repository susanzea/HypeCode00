import React from "react";
// import { withRouter } from "react-router-dom";

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      first_name: "",
      password: "",
      password2: "",
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
    // let user = {
    //   email: this.state.email,
    //   first_name: this.state.first_name,
    //   password: this.state.password,
    //   password2: this.state.password2
    // }
    // this.props.signup(user, this.props.history);
    console.log(this.state);
    this.props.signup({
      email: this.state.email,
      first_name: this.state.first_name,
      password: this.state.password,
      password2: this.state.password2
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
            <label>Name</label>
            <input
              name="first_name"
              type="text"
              value={this.state.first_name}
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

          <div>
            <label>Confirm Password</label>
            <input
              name="password2"
              type="text"
              value={this.state.password2}
              onChange={this.handleInput} />
          </div>
          <button>Create Account</button>
        </form>
      </div>
    )
  }
}

export default SignupForm;