import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import NavBar from './navbar';

const mSTP = state => {
  return ({
    loggedIn: state.session.isAuthenticated
  })
}

export default connect(mSTP, { logout })(NavBar);