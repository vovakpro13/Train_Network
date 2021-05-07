import {applyMiddleware, combineReducers, createStore} from "redux";
import UsersReducer from "./UsersReducer";
import ProfileReducer from "./ProfileReducer";
import PageStateReducer from "./PageStateReducer";
import AuthReducer from "./AuthReducer";
import thunkMiddleWare from "redux-thunk";

const reducers = combineReducers({
    usersData: UsersReducer,
    profileData: ProfileReducer,
    pageState: PageStateReducer,
    authData: AuthReducer
})
const store = createStore(reducers, applyMiddleware(thunkMiddleWare));
window.store = store;

export default store;