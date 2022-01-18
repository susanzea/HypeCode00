import React from "react";

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

  // componentWillReceiveProps (nextProps) {
  //   if (nextProps.signedIn) { 
  //     this.props.login({email: this.state.email, password: this.state.password})
  //   }
  // }

  // handleSignin(user) {
    
  // }

  handleSubmit(e) {
    e.preventDefault();
    // console.log(this.state);
   
    this.props.signup({
      email: this.state.email,
      first_name: this.state.first_name,
      password: this.state.password,
      password2: this.state.password2
    }).then(response => {
      if (response.errors) {
        return null
      } else {
        this.props.login({
          email: this.state.email,
          password: this.state.password
        })
      }
    })

    // .then(
    //   this.props.login({
    //   email: this.state.email,
    //   password: this.state.password
    // }))
  }

  render() {
    return (
      <div>
        <h1> Sign Up </h1>
          <ul className="errors">
            {Object.keys(this.props.errors).map((error,i) => ( 
              <li key={`error-${i}`}>
                {this.props.errors[error]}
              </li>
            ))}
          </ul>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Email</label>
            <input
              name="email"
              type="text"
              value={this.state.email}
              onChange={this.handleInput} 
              required
              />
          </div>

          <div>
            <label>Name</label>
            <input
              name="first_name"
              type="text"
              value={this.state.first_name}
              required
              onChange={this.handleInput} />
          </div>

          <div>
            <label>Password</label>
            <input
              name="password"
              type="password"
              value={this.state.password}
              onChange={this.handleInput} />
          </div>

          <div>
            <label>Confirm Password</label>
            <input
              name="password2"
              type="password"
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