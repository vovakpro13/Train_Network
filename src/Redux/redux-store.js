import {combineReducers,createStore} from "redux";
import UsersReducer from "./UsersReducer";
import ProfileReducer from "./ProfileReducer";
import PageStateReducer from "./PageStateReducer";

const reducers = combineReducers({
    usersData: UsersReducer,
    profileData: ProfileReducer,
    pageState: PageStateReducer
})
const store = createStore(reducers);
window.store = store

export default store;