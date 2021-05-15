import {auth} from "./AuthReducer";

const SET_TITLE = 'SET_TITLE';
const SET_ACTIVE_PAGE = 'SET_ACTIVE_PAGE';
const UPDATE_PAGE_STATE = 'UPDATE_PAGE_STATE';
const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

const initialPage = {
    PROJECT_NAME: 'Train Network',
    links: [
        {id: 1, path: '/users', title: 'Users'},
        {id: 2, path: '/friends', title: 'Friends'},
        {id: 3, path: '/messages', title: 'Messages'}
    ],
    title: '',
    activePage: null,
    initialized: false
};

const PageStateReducer = (state = initialPage, action) => {
    switch (action.type) {
        case SET_TITLE:
            return {...state, title: action.newTitle};
        case SET_ACTIVE_PAGE:
            return {...state, activePage: action.activePage};
        case UPDATE_PAGE_STATE:
            return {...state};
        case INITIALIZED_SUCCESS:
            console.log('init')
            return {...state, initialized: true}
        default:
            return state;
    }
};

export const setTitle = (newTitle) => ({type: SET_TITLE, newTitle});
export const setActivePage = (activePage) => ({type: SET_ACTIVE_PAGE, activePage});
export const updatePageState = () => ({type: UPDATE_PAGE_STATE});
export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS});

export const pageSetting = (title, activePage) =>
    (dispatch) => {
        dispatch(setTitle(title));
        dispatch(setActivePage(activePage));
    };

export const initializeApp = () =>
    async (dispatch) => {
        await dispatch(auth());
        dispatch(initializedSuccess());
    };

export default PageStateReducer;
