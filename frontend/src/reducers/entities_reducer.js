import { combineReducers } from "redux";
import FilesReducer from "./files_reducer";
import UserReducer from "./user_reducer";

const EntitiesReducer = combineReducers({
        file: FilesReducer,
        user: UserReducer 
})

export default EntitiesReducer;