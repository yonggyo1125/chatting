import axios from 'axios';

export default function apiRequest (url, method, data) {
    url = process.env.REACT_APP_API_URL + url;
    method = method || "GET";
    data = data || {};

    return new Promise((resolve, reject) => {
        axios({
            url,
            method,
            data
        })
        .then((res) => {
            resolve(res.data);
        })
        .catch((err) => reject(err));
    });
};