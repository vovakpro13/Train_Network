import {authAPI, profileAPI} from "../services/api";

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
            return {
                ...state, userId: null,
                login: null,
                email: null,
                avatar: null,
                isLogin: false,
            }
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
        return new Promise(async (resolve) => {
            dispatch(setFetching(true));
            const {data: {id: userId, login, email}, resultCode} = await authAPI.auth();

            if (resultCode === 0) {
                const {photos: {small: avatar}} = await profileAPI.getProfile(userId);
                dispatch(setAuth(userId, login, email, avatar));
            }

            dispatch(setFetching(false));
            resolve(true);
        });
    };


export const logIn = ({email, password, rememberMe, captcha}) =>
    async (dispatch) => {

        const {messages, resultCode} = await authAPI.logIn(email, password, rememberMe, captcha);

        if (resultCode === 0) {
            dispatch(auth());
        } else {
            alert(messages[0]);
        }

    };

export const logOut = () =>
    async (dispatch) => {
        const {resultCode} = await authAPI.logOut()
        resultCode === 0 && dispatch(setLogOut());
    };

export default AuthReducer;