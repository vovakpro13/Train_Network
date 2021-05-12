import {profileAPI} from "../services/api";

const SET_PROFILE_DATA = 'SET_PROFILE_DATA';
const SET_IS_FETCHING = 'SET_IS_FETCHING';
const SET_PROFILE_STATUS = 'SET_PROFILE_STATUS';

const initProfile = {
    profile: null,
    profileStatus: '',
    isFetching: false
};

 const ProfileReducer = (state = initProfile, action) =>{
    switch (action.type){
        case SET_PROFILE_DATA:
            return {...state, profile: {...action.profile}};
        case  SET_IS_FETCHING:
            return {...state, isFetching: action.isFetch};
        case  SET_PROFILE_STATUS:
            return {...state, profileStatus: action.status || ''};
        default:
            return state;
    }
};

export const setProfilaData = (profile) => ({type:SET_PROFILE_DATA, profile });
export const setProfileStatus = (status) => ({type:SET_PROFILE_STATUS, status });
export const setIsFetching = (isFetch) => ({type: SET_IS_FETCHING, isFetch});

export const getProfileStatus = (userId) =>
    (dispatch) => {
         dispatch(setIsFetching(true));
        return profileAPI.getProfileStatus(userId).then(status => {
            dispatch(setProfileStatus(status));
            dispatch(setIsFetching(false));
        })
    };

export const getProfile = (userId) =>
    (dispatch) =>{
        dispatch(setIsFetching(true));
       return profileAPI.getProfile(userId).then(profile => {
           profileAPI.getProfileStatus(userId).then(status => {
               dispatch(setProfileStatus(status));
               dispatch(setProfilaData(profile));
               dispatch(setIsFetching(false));
           })
        })
    };



export const updateProfileStatus = (status) =>
    (dispatch) => {
        dispatch(setIsFetching(true));
        profileAPI.updateProfileStatus(status).then(result =>{
            if (!result.resultCode){
                dispatch(setProfileStatus(status));
            }
            dispatch(setIsFetching(false));
        });
    }
export default ProfileReducer;