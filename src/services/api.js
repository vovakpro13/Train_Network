import axios from "axios";

const apiInstance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    withCredentials: true,
    headers: {'API-KEY': '9faa8343-51f0-4682-83fd-78540822a1c5'}
});

export default {
    getUsers: (page = 1, count = 10) => {
        return apiInstance.get('/users', {params: {page, count}}).then(response => response.data);
    },
    getProfile:  (id) => {
        return  apiInstance.get(`/profile/${id}`).then(response => response.data);
    },
    followPost:  (id) => {
        return  apiInstance.post(`/follow/${id}`).then(response => response.data);
    },
    unfollowDelete: (id) => {
        return  apiInstance.delete(`/follow/${id}`).then(response => response.data);
    },
    auth: async () => {
        return  apiInstance.get('/auth/me').then(response => response.data);
    }
}
