import {applyMiddleware, combineReducers, createStore} from "redux";
import UsersReducer from "./UsersReducer";
import ProfileReducer from "./ProfileReducer";
import PageStateReducer from "./PageStateReducer";
import AuthReducer from "./AuthReducer";
import thunkMiddleWare from "redux-thunk";
import {reducer as formReducer} from "redux-form";

const reducers = combineReducers({
    usersData: UsersReducer,
    profileData: ProfileReducer,
    pageState: PageStateReducer,
    authData: AuthReducer,
    form: formReducer
})
const store = createStore(reducers, applyMiddleware(thunkMiddleWare));
window.store = store;

export default store;