import {combineReducers,createStore} from "redux";
import UsersReducer from "./UsersReducer";
import {ProfileReducer} from "./ProfileReducer";

const reducers = combineReducers({
    usersData: UsersReducer,
    profileData: ProfileReducer
})
export default createStore(reducers);