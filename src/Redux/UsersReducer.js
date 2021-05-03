const UPDATE_RELATIONSHIP_INPUT = 'UPDATE_RELATIONSHIP_INPUT';
const SET_NEW_RELAITONSHIP = 'SET_NEW_RELAITONSHIP';
const SHOW_MORE = 'SHOW_MORE';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_IS_FETCHING = 'SET_IS_FETCHING';

const initState = {
    users: [
        // {id: 45, userName: "Anna", age: 19, country: "Ukraine", relationship: 'good', input: ''},
        // {id: 337, userName: "Viktor", age: 11, country: "Italian", relationship: 'not bad', input: ''},
        // {id: 754, userName: "Petro", age: 34, country: "Spanish", relationship: 'bad', input: ''},
        // {id: 6547, userName: "Katerina", age: 19, country: "Japan", relationship: 'better', input: ''},
        // {id: 7676, userName: "Alex", age: 19, country: "Germany", relationship: 'cool', input: ''},
        // {id: 789, userName: "Jone", age: 19, country: "USA", relationship: '50/50', input: ''},
    ],
    pageSize: 10,
    totalUsers: 35,
    currentPage: 2,
    isFetching: false
}

const UsersReducer = (state = initState, action) => {
    switch (action.type) {
        case  UPDATE_RELATIONSHIP_INPUT:
            return {
                ...state,
                users: state.users
                    .map(user => (user.id === action.id) ? {...user, input: action.text} : user)
            };
        case  SET_NEW_RELAITONSHIP:
            return {
                ...state,
                users: state.users.map(user => (user.id === action.id) ? {
                    ...user,
                    uniqueUrlName: user.input,
                    input: ''
                } : user)
            };
        case  SHOW_MORE:
            return state;
        case SET_USERS:
            return {...state, users: [ ...action.users], totalUsers: action.totalUsers};
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case  SET_IS_FETCHING:
            return {...state, isFetching: action.isFetch};
        default:
            return state;
    }
}

export const updateRelationshipInput = (id, text) => ({type: UPDATE_RELATIONSHIP_INPUT, id, text});
export const setNewRelationship = (id) => ({type: SET_NEW_RELAITONSHIP, id});
export const setUsers = (users, totalUsers) => ({type: SET_USERS, users, totalUsers});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setIsFetching = (isFetch) => ({type: SET_IS_FETCHING, isFetch});
export const showMoreCreator = () => ({type: SHOW_MORE});

export default UsersReducer;