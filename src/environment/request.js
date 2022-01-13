import axios from 'axios';

export default () => {

    const request = axios.create({
        baseURL: process.env.VUE_APP_API_URL,
        withCredentials: false,
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + localStorage.getItem('access-token'),
        },
    });

    // Intercept the request
    request.interceptors.response.use(
        response => {
            return response;
        },
        function(error) {
            switch (error.response.status) {
                case 401:
                    window.location = '/';
                    localStorage.removeItem('access-token');
                    break;
                default:
                    return Promise.reject(error);
            }
        }
    );
    return request;
};