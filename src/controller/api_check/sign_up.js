import axios from 'axios'

import {apiURL} from "./index"; 

const api = apiURL + "/users";

const checkExistByUserName = (userName) => {
    const url = api + "/exist_user_name/" + userName;

    return axios.get(url);
}

const checkExistByEmail = (email) => {
    const url = api + "/exist_email/" + email;
    /*const info = {
                user_name: userName,
            };*/
    return axios.get(url);
}

const register = (user) => {
    const url = api;
    const data = {
        user_name: user.user_name,
        name: user.name,
        email: user.email,
        password: user.password
    }
    return axios.post(url, data);
}
export{checkExistByUserName, checkExistByEmail, register};