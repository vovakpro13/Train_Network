import {useState} from "react";

const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_IS_FETCHING = 'SET_IS_FETCHING';
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';



const initState = {
    users: [
        // {id: 45, userName: "Anna", age: 19, country: "Ukraine", relationship: 'good', input: ''},
        // {id: 337, userName: "Viktor", age: 11, country: "Italian", relationship: 'not bad', input: ''},
        // {id: 754, userName: "Petro", age: 34, country: "Spanish", relationship: 'bad', input: ''},
        // {id: 6547, userName: "Katerina", age: 19, country: "Japan", relationship: 'better', input: ''},
        // {id: 7676, userName: "Alex", age: 19, country: "Germany", relationship: 'cool', input: ''},
        // {id: 789, userName: "Jone", age: 19, country: "USA", relationship: '50/50', input: ''},
    ],
    pageSize: 9,
    totalUsers: 35,
    currentPage: 156,
    isFetching: false
}

const UsersReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_USERS:
            return {...state, users: [ ...action.users], totalUsers: action.totalUsers};
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case  SET_IS_FETCHING:
            return {...state, isFetching: action.isFetch}
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
        default:
            return state;
    }
}


export const setUsers = (users, totalUsers) => ({type: SET_USERS, users, totalUsers});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setIsFetching = (isFetch) => ({type: SET_IS_FETCHING, isFetch});
export const follow = (userId) => ({type: FOLLOW, userId});
export const unfollow = (userId) => ({type: UNFOLLOW, userId});

export default UsersReducer;