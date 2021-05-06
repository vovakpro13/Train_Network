import axios from "axios";

const apiInstance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    withCredentials: true,
    headers: {'API-KEY': '9faa8343-51f0-4682-83fd-78540822a1c5'}
});

export const getUsers =  (page = 1, count = 10) => {
    return  apiInstance.get('/users', {params: {page, count}}).then(response => response.data);
};

export const getProfile =  (id) => {
    return  apiInstance.get(`/profile/${id}`).then(response => response.data)
}

export const followPost =  (id) => {
    return  apiInstance.post(`/follow/${id}`).then(response => response.data);
}

export const unfollowDelete =  (id) => {
    return  apiInstance.delete(`/follow/${id}`).then(response => response.data);
}

export const auth =  async () => {
    return  apiInstance.get('/auth/me').then(response => response.data);
}