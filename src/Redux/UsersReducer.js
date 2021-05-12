import {usersAPI} from "../services/api";

const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
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
    currentPage: 1,
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
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage};
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
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setIsFetching = (isFetch) => ({type: SET_IS_FETCHING, isFetch});
export const setPagesSlide = (slide) => ({type: SET_PAGES_SLIDE, slide});
export const followSuccess = (userId) => ({type: FOLLOW, userId});
export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId});
export const changeInputValue = (slide) => ({type: CHANGE_INPUT_VALUE, slide});
export const setFollowProgress = (isProgress, id) => ({type: SET_FOLLOW_PROGRESS, isProgress, id});
export const toggleOnlyFriends = (bool) => ({type: TOGGLE_ONLY_FRIENDS, bool});

export const requestUsers = (currentPage, pageSize, friends) =>
    (dispatch) => {
        dispatch(toggleOnlyFriends(friends));
        dispatch(setIsFetching(true));
        usersAPI.getUsers(currentPage, pageSize, friends).then(users => {
            debugger
            dispatch(setUsers(users.items, users.totalCount));
            dispatch(setIsFetching(false));
        });
    };


export const changePage = (page, pageSize, friends) =>
    (dispatch) => {
        dispatch(setCurrentPage(page));
        dispatch(requestUsers(page, pageSize, friends));

    };

export const follow = (id) =>
    (dispatch) => {
        dispatch(setFollowProgress(true, id));
        usersAPI.followPost(id).then(answer => {
            dispatch(followSuccess(id));
            dispatch(setFollowProgress(false, id));
        });
    };

export const unfollow = (id) =>
    (dispatch) => {
        dispatch(setFollowProgress(true, id));
        usersAPI.unfollowDelete(id).then(answer => {
            dispatch(unfollowSuccess(id));
            dispatch(setFollowProgress(false, id));
        });
    };

export const resetSlider = () =>
    (dispatch) => {
        dispatch(setPagesSlide(0));
        dispatch(setCurrentPage(1));
        dispatch(changeInputValue(1));
    };

export default UsersReducer;