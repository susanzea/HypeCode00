import { combineReducers } from "redux";
import FilesReducer from "./files_reducer";

const EntitiesReducer = combineReducers({
        file: FilesReducer
})

export default EntitiesReducer;