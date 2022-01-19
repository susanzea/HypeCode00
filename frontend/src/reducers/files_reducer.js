import { RECEIVE_FILE, REMOVE_FILE } from "../actions/file_actions";

const defaultState =  {
    files: '',
}

const FilesReducer = (state = defaultState, action) => {
    Object.freeze(state);
    const nextState = Object.assign({},state);

    switch (action.type) {
        case RECEIVE_FILE:
            nextState[action.file.id] = action.file;
            return nextState;
        case REMOVE_FILE:
            delete nextState[action.file.id];
            return nextState
        default: 
            return state;
    }
}

export default FilesReducer;