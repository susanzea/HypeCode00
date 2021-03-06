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

  componentWillUnmount() {
    this.props.clearErrors();
  }

  componentDidMount() {
    this.props.clearErrors();
  }

  handleInput(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.login({
      email: this.state.email,
      password: this.state.password
    })
  }

  render() {
    return (
      
      <div className="session">
        <h1 className="formtype">LOGIN</h1>
          <ul className="errors">
            {Object.keys(this.props.errors).map((error,i) => ( 
              <li key={`error-${i}`}>
                {this.props.errors[error]}
              </li>
            ))}
          </ul>
        <form onSubmit={this.handleSubmit} className="session-form">
          <div>
            <input className="input"
              name="email"
              type="text"
              value={this.state.email}
              onChange={this.handleInput} 
              placeholder="Email"
              required
              />
          </div>

          <div>
            <input className="input"
              name="password"
              type="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.handleInput} />
          </div>
          <button className="submit-button">Login</button>
        </form>
      </div>
    )
  }
}

export default LoginForm;