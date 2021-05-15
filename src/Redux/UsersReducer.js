import {usersAPI} from "../services/api";

const SET_USERS = 'SET_USERS';
const SET_PAGE = 'SET_PAGE';
const SET_IS_FETCHING = 'SET_IS_FETCHING';
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_PAGES_SLIDE = 'SET_PAGES_SLIDE';
const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE';
const SET_FOLLOW_PROGRESS = 'SET_FOLLOW_PROGRESS';
const TOGGLE_ONLY_FRIENDS = 'TOGGLE_ONLY_FRIENDS';

const initState = {
    users: [],
    pageSize: 9,
    totalUsers: null,
    page: 1,
    pages: {
        currentSlide: 0,
        countButtonsInSlide: 10,
        inputSlide: 1
    },
    onlyFriends: false,
    isFetching: false,
    followingInProgress: []
}

const UsersReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_USERS:
            return {...state, users: [...action.users], totalUsers: action.totalUsers};
        case SET_PAGE:
            return {...state, page: action.page};
        case  SET_IS_FETCHING:
            return {...state, isFetching: action.isFetch};
        case  SET_PAGES_SLIDE:
            return {...state, pages: {...state.pages, currentSlide: action.slide}};
        case  TOGGLE_ONLY_FRIENDS:
            return {...state, onlyFriends: action.bool};
        case  FOLLOW:
            return {
                ...state, users: state.users.map(user => {
                    user.followed = (user.id === action.userId) ? true : user.followed;
                    return user;
                })
            };
        case  UNFOLLOW:
            return {
                ...state, users: state.users.map(user => {
                    user.followed = (user.id === action.userId) ? false : user.followed;
                    return user;
                })
            };
        case  CHANGE_INPUT_VALUE:
            return {...state, pages: {...state.pages, inputSlide: action.slide}};
        case  SET_FOLLOW_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isProgress ? [...state.followingInProgress, action.id] : [state.followingInProgress.filter(id => id !== action.id)]
            };
        default:
            return state;
    }
}


export const setUsers = (users, totalUsers) => ({type: SET_USERS, users, totalUsers});
export const setPage = (page) => ({type: SET_PAGE, page});
export const setIsFetching = (isFetch) => ({type: SET_IS_FETCHING, isFetch});
export const setPagesSlide = (slide) => ({type: SET_PAGES_SLIDE, slide});
export const followSuccess = (userId) => ({type: FOLLOW, userId});
export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId});
export const changeInputValue = (slide) => ({type: CHANGE_INPUT_VALUE, slide});
export const setFollowProgress = (isProgress, id) => ({type: SET_FOLLOW_PROGRESS, isProgress, id});
export const toggleOnlyFriends = (bool) => ({type: TOGGLE_ONLY_FRIENDS, bool});

export const requestUsers = (page, pageSize, isFriends) =>
    async (dispatch) => {
        dispatch(toggleOnlyFriends(isFriends));
        dispatch(setIsFetching(true));
        const {items: users, totalCount} = await usersAPI.getUsers(page, pageSize, isFriends);
        dispatch(setUsers(users, totalCount));
        dispatch(setIsFetching(false));
    };

export const changePage = (page, pageSize, friends) =>
    (dispatch) => {
        dispatch(setPage(page));
        dispatch(requestUsers(page, pageSize, friends));
    };

export const followFlow = async (id, dispatch, apiRequest, actionCreator) => {
        dispatch(setFollowProgress(true, id));
        const {resultCode} = await apiRequest(id);
        resultCode === 0 && dispatch(actionCreator(id));
        dispatch(setFollowProgress(false, id));
    };

export const follow = (id) =>
     (dispatch) => {
         dispatch(followFlow(id, usersAPI.followPost, followSuccess));
    };

export const unfollow = (id) =>
    async (dispatch) => {
        dispatch(followFlow(id, usersAPI.unfollowDelete, unfollowSuccess));
    };

export const resetSlider = () =>
    (dispatch) => {
        dispatch(setPagesSlide(0));
        dispatch(setPage(1));
        dispatch(changeInputValue(1));
    };

export default UsersReducer;