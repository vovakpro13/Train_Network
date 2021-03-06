const SET_TITLE ='SET_TITLE';
const SET_ACTIVE_PAGE = 'SET_ACTIVE_PAGE';

const initialPage = {
    PROJECT_NAME: 'Train Network',
    links: [
        {id: 1, path: '/users', title: 'Users'},
        {id: 2, path: '/profile', title: 'Profile'}
    ],
    title: '',
    activePage: null
};

const PageStateReducer = (state = initialPage, action) =>{
    switch (action.type){
        case SET_TITLE:
            return {...state, title: action.newTitle};
        case SET_ACTIVE_PAGE:
            return {...state, activePage: action.activePage};
        default:
            return state;
    }
};

export const setTitle = (newTitle) => ({type: SET_TITLE, newTitle});
export const setActivePage = (activePage) => ({type: SET_ACTIVE_PAGE, activePage});

export default PageStateReducer;
