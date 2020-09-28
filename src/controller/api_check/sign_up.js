import axios from 'axios'

import {apiURL} from "./index"; 

const api = apiURL + "/users";

export const checkExistByUserName = (userName) => {
    const url = api + "/exist_user_name/" + userName;
    /*const info = {
                user_name: userName,
            };*/
    return axios.get(url);
}