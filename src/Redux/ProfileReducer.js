import {profileAPI} from "../services/api";

const SET_PROFILE_DATA = 'SET_PROFILE_DATA';
const SET_IS_FETCHING = 'SET_IS_FETCHING';
const SET_PROFILE_STATUS = 'SET_PROFILE_STATUS';

const initProfile = {
    profile: null,
    profileStatus: '',
    isFetching: false
};

const ProfileReducer = (state = initProfile, action) => {
    switch (action.type) {
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

export const setProfilaData = (profile) => ({type: SET_PROFILE_DATA, profile});
export const setProfileStatus = (status) => ({type: SET_PROFILE_STATUS, status});
export const setIsFetching = (isFetch) => ({type: SET_IS_FETCHING, isFetch});

export const getProfileStatus = (userId) =>
    async (dispatch) => {
        dispatch(setIsFetching(true));
        dispatch(setProfileStatus(await profileAPI.getProfileStatus(userId)));
        dispatch(setIsFetching(false));
    }

export const getProfile = (userId) =>
    async (dispatch) => {
        dispatch(setIsFetching(true));
        dispatch(setProfileStatus(await profileAPI.getProfileStatus(userId)));
        dispatch(setProfilaData(await profileAPI.getProfile(userId)));
        dispatch(setIsFetching(false));
    };


export const updateProfileStatus = (status) =>
    async (dispatch) => {
        dispatch(setIsFetching(true));
        const {resultCode} = await profileAPI.updateProfileStatus(status)
        resultCode === 0 && dispatch(setProfileStatus(status));
        dispatch(setIsFetching(false));

    }
export default ProfileReducer;