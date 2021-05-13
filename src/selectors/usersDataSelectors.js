
const data = 'usersData';

export const usersSelector = state => {
    return state[data].users

}
export const pageSizeSelector = state =>{
    return state[data].pageSize;
}

export const totalUsersSelector = state =>{
    return state[data].totalUsers;
}

export const pageSelector = state =>{
    return state[data].page;
}

export const isFetchingSelector = state =>{
    return state[data].isFetching;
}

export const pagesSelector = state =>{
    return state[data].pages;
}

export const followingInProgressSelector = state =>{
    return state[data].followingInProgress;
}

export const onlyFriendsSelector = state =>{
    return state[data].onlyFriends;
}