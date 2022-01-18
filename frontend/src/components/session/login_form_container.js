import { connect } from 'react-redux';
import { login } from '../../actions/session_actions'
import LoginForm from './login_form';
import { clearErrors } from '../../actions/session_actions';
const mSTP = (state) => {
  return {
    loggedIn: state.session.isSignedIn,
    errors: state.errors.session
  }
}

const mDTP = (dispatch) => {
  return {
    login: user => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors())
  }
}

export default connect(mSTP, mDTP)(LoginForm);