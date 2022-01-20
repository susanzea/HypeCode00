import { connect } from "react-redux";
import Profile from "./profile"
import { withRouter } from "react-router-dom";
import { deleteFile, fetchFiles, updateFile } from "../../actions/file_actions";
import { fetchUser, updateUser } from "../../actions/user_actions";

const mSTP = state => ({
    currentUser: state.session.currentUser,
    files: state.entities.file.data
})

const mDTP = dispatch => ({
    fetchFiles: userId => dispatch(fetchFiles(userId)),
    deleteFile: file => dispatch(deleteFile(file._id)),
    updateFile: (file,code,name) => dispatch(updateFile(file,code,name)),
    fetchUser: (id) => dispatch(fetchUser(id)),
    updateUser: (id,bio,first_name) => dispatch(updateUser(id,bio,first_name))
})

export default withRouter(connect(mSTP,mDTP)(Profile))