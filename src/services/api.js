import axios from "axios";

const apiInstance = axios.create({
    baseURL:'https://social-network.samuraijs.com/api/1.0'
});

export const  getUsers = async (page = 1, count = 10) => {
    return await apiInstance.get('/users',   {params:{page, count}, withCredentials: true});
};

export const  getProfile = async (id) => {
    debugger
    return await apiInstance.get(`/profile/${id}`);

}

export const  followPost= async (id) => {
    return await apiInstance.post(`/follow/${id}`, {}, {
        withCredentials: true,
        headers: {'API-KEY': '9faa8343-51f0-4682-83fd-78540822a1c5'}
    });
}

export const  unfollowDelete = async (id) => {
    return await apiInstance.delete(`/follow/${id}`, {
        withCredentials: true,
        headers: {'API-KEY': '9faa8343-51f0-4682-83fd-78540822a1c5'}
    });
}

export const  auth = async () => {
    return await apiInstance.get('/auth/me', {withCredentials: true});

}