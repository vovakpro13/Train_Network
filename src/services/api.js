import axios from "axios";

const apiInstance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    withCredentials: true,
    headers: {'API-KEY': '9faa8343-51f0-4682-83fd-78540822a1c5'}
});

export const usersAPI =  {
    getUsers: (page = 1, count = 10, friend) => {
        debugger
        return apiInstance.get('/users', {params: {page, count, friend}}).then(response => {
            console.log(response); return response.data});
    },
    followPost:  (id) => {
        return  apiInstance.post(`/follow/${id}`).then(response => response.data);
    },
    unfollowDelete: (id) => {
        return  apiInstance.delete(`/follow/${id}`).then(response => response.data);
    },

}

export const profileAPI =  {
    getProfile:  (id) => {
        return  apiInstance.get(`/profile/${id}`).then(response => response.data);
    },
    getProfileStatus:  (id) => {
        return  apiInstance.get(`/profile/status/${id}`).then(response => response.data);
    },
    updateProfileStatus: (status) =>{
        return  apiInstance.put(`/profile/status`, {status}).then(response => response.data);
    }
}
export const authAPI =  {
    auth: () => {
        return  apiInstance.get('/auth/me').then(response => response.data);
    },
    logIn: (email, password, rememberMe, captcha) =>{
        debugger
        return  apiInstance.post('/auth/login', {email, password, rememberMe, captcha}).then(response => response.data);
    }

}