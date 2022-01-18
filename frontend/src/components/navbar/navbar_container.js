import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import NavBar from './navbar';

const mSTP = state => {
  return ({
    loggedIn: state.session.isAuthenticated,
    currentUser: state.session.currentUser
  })

}

export default connect(mSTP, { logout })(NavBar);