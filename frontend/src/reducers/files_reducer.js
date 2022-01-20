import { RECEIVE_ALL_FILES, RECEIVE_FILE, REMOVE_FILE } from "../actions/file_actions";

const defaultState =  {
    file: '',
}

const FilesReducer = (state = {}, action) => {
    Object.freeze(state);
    const nextState = Object.assign({},state);

    switch (action.type) {
        case RECEIVE_FILE:
            // debugger
            nextState[action.file.data._id] = action.file;
            return nextState;
        case REMOVE_FILE:
            debugger
            delete nextState[action.fileId];
            return nextState
        case RECEIVE_ALL_FILES:
            return action.files
        default: 
            return state;
    }
}

export default FilesReducer;