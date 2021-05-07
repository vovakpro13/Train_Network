import API from "../services/api";

const SET_PROFILE_DATA = 'SET_PROFILE_DATA';
const SET_IS_FETCHING = 'SET_IS_FETCHING';

const initProfile = {
    profile: null,
    isFetching: false
};

 const ProfileReducer = (state = initProfile, action) =>{
    switch (action.type){
        case SET_PROFILE_DATA:
            return {...state, profile: {...action.profile}};
        case  SET_IS_FETCHING:
            return {...state, isFetching: action.isFetch};
        default:
            return state;
    }
};

export const setProfilaData = (profile) => ({type:SET_PROFILE_DATA, profile });
export const setIsFetching = (isFetch) => ({type: SET_IS_FETCHING, isFetch});

export const getProfile = (userId) =>
    (dispatch) =>{
        dispatch(setIsFetching(true));
        API.getProfile(userId).then(profile => {
            dispatch(setProfilaData(profile));
            dispatch(setIsFetching(false));
        })
    };

export default ProfileReducer;