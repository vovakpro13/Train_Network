import {authAPI, profileAPI} from "../services/api";
import {SubmissionError} from "redux-form";

const SET_USERS_DATA = 'SET_USERS_DATA';
const SET_AVATAR = 'SET_AVATAR';
const SET_FETCHING = 'SET_FETCHING';
const SET_LOGOUT = 'SET_LOGOUT';

const initialPage = {
    userId: null,
    login: null,
    email: null,
    avatar: null,
    isLogin: false,
    isFetching: false
};

const AuthReducer = (state = initialPage, action) => {
    switch (action.type) {
        case SET_USERS_DATA:
            return {...state, ...action.data, isLogin: true};
        case SET_FETCHING:
            return {...state, isFetching: action.val}
        case SET_LOGOUT:
            return {...state,userId: null,
                login: null,
                email: null,
                avatar: null,
                isLogin: false,}
        default:
            return state;
    }
};

export const setAuth = (userId, login, email, avatar) => ({type: SET_USERS_DATA, data: {userId, login, email, avatar}});
export const setLogOut = () => ({type: SET_LOGOUT});
export const setAvatar = (ava) => ({type: SET_AVATAR, ava});
export const setFetching = (val) => ({type: SET_FETCHING, val});


export const auth = () =>
    (dispatch) => {
        dispatch(setFetching(true));
        return authAPI.auth()
            .then(({data: {id: userId, login, email}, resultCode}) => {
                if (!resultCode) {
                    return profileAPI.getProfile(userId)
                        .then(({photos: {small: avatar}}) => {
                            dispatch(setAuth(userId, login, email, avatar));
                            console.log('auth success!')
                            dispatch(setFetching(false));
                        });

                }
                dispatch(setFetching(false));

            });
    };

export const logIn = ({email, password, rememberMe, captcha}) =>
    (dispatch) => {
        authAPI.logIn(email, password, rememberMe, captcha)
            .then(({messages, resultCode}) => {
                if (!resultCode){
                    dispatch(auth());
                }else {
                    alert(messages[0]);
                }
            })

    };

export const logOut = () =>
    (dispatch) => {
        return authAPI.logOut()
            .then(({resultCode}) => {
                if (!resultCode) {
                    dispatch(setLogOut());
                    return true;
                }
                return  false;
            });
    };

export default AuthReducer;