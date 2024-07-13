import axios from 'axios';

const API_URL = 'http://localhost:3400/user';


export const fetchProfile = async (token) => {
    const config = {
        headers: { Authorization: `Bearer ${token}` },
    };
    return await axios.get(`${API_URL}/profile`, config);
}

const setAuthToken = (token) => {
    if (token) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
        delete axios.defaults.headers.common['Authorization'];
    }
};

export const signup = async (data) => {
    return axios.post(`${API_URL}/signup`, data);
};

export const login = async (credentials) => {
    return await axios.post(`${API_URL}/login`, credentials);
};

export const getProfile = async () => {
    return await axios.get(`${API_URL}/profile`);
};

export const updatePassword = async (passwordData) => {
    return await axios.put(`${API_URL}/profile/password`, passwordData);
};

export default setAuthToken;
