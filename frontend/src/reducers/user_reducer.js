import { RECEIVE_USER } from "../actions/user_actions";

const UserReducer = (state = {}, action) => {
    Object.freeze(state)
    const nextState = Object.assign({},state);
    switch (action.type) {
        case RECEIVE_USER:
            // debugger
            nextState[action.user[0]] = action.user.data
            return nextState
        default:
            return state;
    }
}

export default UserReducer;