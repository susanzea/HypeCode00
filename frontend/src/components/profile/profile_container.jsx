import { connect } from "react-redux";
import Profile from "./profile"
import { withRouter } from "react-router-dom";

const mSTP = state => ({
    currentUser: state.session.currentUser
})

const mDTP = dispatch => ({

})

export default withRouter(connect(mSTP,mDTP)(Profile))