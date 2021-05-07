const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_IS_FETCHING = 'SET_IS_FETCHING';
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_PAGES_SLIDE = 'SET_PAGES_SLIDE';
const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE';
const SET_FOLLOW_PROGRESS = 'SET_FOLLOW_PROGRESS';

const initState = {
    users: [],
    pageSize: 9,
    totalUsers: null,
    currentPage: 1,
    pages: {
        currentSlide: 0,
        countPages: 12,
        inputSlide: 1
    },
    isFetching: false,
    followingInProgress: []
}

const UsersReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_USERS:
            return {...state, users: [ ...action.users], totalUsers: action.totalUsers};
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage};
        case  SET_IS_FETCHING:
            return {...state, isFetching: action.isFetch};
        case  SET_PAGES_SLIDE:
            return {...state, pages: {...state.pages, currentSlide: action.slide}};
        case  FOLLOW:
            return {...state, users: state.users.map(user => {
                    user.followed = (user.id === action.userId) ? true : user.followed;
                    return user;
                })};
        case  UNFOLLOW:
            return {...state, users: state.users.map(user => {
                    user.followed = (user.id === action.userId) ? false : user.followed;
                    return user;
                })};
        case  CHANGE_INPUT_VALUE:
            return {...state, pages: {...state.pages, inputSlide: action.slide}};
        case  SET_FOLLOW_PROGRESS:
            return {
                ...state,
                followingInProgress:  action.isProgress ? [...state.followingInProgress, action.id] : [state.followingInProgress.filter(id => id !== action.id)]
            };
        default:
            return state;
    }
}


export const setUsers = (users, totalUsers) => ({type: SET_USERS, users, totalUsers});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setIsFetching = (isFetch) => ({type: SET_IS_FETCHING, isFetch});
export const setPagesSlide = (slide) => ({type: SET_PAGES_SLIDE, slide});
export const follow = (userId) => ({type: FOLLOW, userId});
export const unfollow = (userId) => ({type: UNFOLLOW, userId});
export const changeInputValue = (slide) => ({type: CHANGE_INPUT_VALUE, slide});
export const setFollowProgress = (isProgress, id) => ({type: SET_FOLLOW_PROGRESS, isProgress , id});

export default UsersReducer;