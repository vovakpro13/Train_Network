import API from "../services/api";

const SET_USERS_DATA = 'SET_USERS_DATA';
const SET_AVATAR = 'SET_AVATAR';
const SET_FETCHING = 'SET_FETCHING';

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
        default:
            return state;
    }
};

export const setAuth = (userId, login, email, avatar) => ({type: SET_USERS_DATA, data: {userId, login, email, avatar}});
export const setAvatar = (ava) => ({type: SET_AVATAR, ava});
export const setFetching = (val) => ({type: SET_FETCHING, val});



export const auth = () =>
    (dispatch) => {
        dispatch(setFetching(true));
        API.auth().then(({data: {id: userId, login, email}, resultCode}) => {
            if (!resultCode) {
                API.getProfile(userId).then(({photos: {small: avatar}}) => {
                    dispatch(setAuth(userId, login, email, avatar));
                });
            }
            debugger
            dispatch(setFetching(false));
        });
    }

export default AuthReducer;