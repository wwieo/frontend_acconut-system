import axios from 'axios'

import {apiURL} from "../index"; 

const api = apiURL + "/users";

const login = (user) => {
    const url = api + "/login";
    let data = {};
    if ((/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(user.account))){
        data = {
            email: user.account,
            password: user.password
        }
    }
    else{
        data = {
            user_name: user.account,
            password: user.password
        }
    }
    
    return axios.post(url, data);
}

export{login};