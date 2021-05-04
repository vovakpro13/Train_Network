const SET_USERS_DATA = 'SET_USERS_DATA';

const initialPage = {
    userId: null,
    login: null,
    email: null,
    isFetching: false
};

const AuthReducer = (state = initialPage, action) =>{
    switch (action.type){
        case SET_USERS_DATA:
            return {...state, ...action.data};
        default:
            return state;
    }
};

export const setUserData = (userId, login, email) => ({type: SET_USERS_DATA, data:{userId, login, email} });


export default AuthReducer;