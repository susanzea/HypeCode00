import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Menu from "./menu.js"
import { logout } from "../../actions/session_actions.js";

const mSTP = (state) => {
    return {
        currentUser: state.session.currentUser
    };
};

const mDTP = dispatch => ({
    logout: () => dispatch(logout()),
})

export default withRouter(connect(mSTP, mDTP)(Menu));