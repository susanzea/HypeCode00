import { connect } from 'react-redux';
import { logout, login } from '../../actions/session_actions';
import NavBar from './navbar';
import { withRouter } from 'react-router-dom';

const mSTP = state => {
  return ({
    loggedIn: state.session.isAuthenticated,
    currentUser: state.session.currentUser
  })
}

const mDTP = dispatch => ({
    loginAction: user => dispatch(login(user)),
    logout: () => dispatch(logout()),
})

export default withRouter(connect(mSTP, mDTP)(NavBar));