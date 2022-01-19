import { combineReducers } from "redux";
import FilesReducer from "./files_reducer";

const EntitiesReducer = combineReducers({
        files: FilesReducer
})

export default EntitiesReducer;