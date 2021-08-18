import axios from "axios";

const API_URL = "http://localhost:8080/api/auth";

const addUser = (login, password, firstname, lastname, active, email_address, last_mod_by) => {
    return axios.post(API_URL + "adduser", {
        login, password, firstname, lastname, active, email_address, last_mod_by,
    });
}

const login = (login, password) => {
    return axios.post(API_URL+"/signin", {
        "username": login,
        "password": password
    })
    .then((response) => {
        if(response.data.accessToken) {
            localStorage.setItem("user", JSON.stringify(response.data));
        }
        
        return response.data;
    });
}

const logout = () => {
    localStorage.removeItem("user");
}

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
}

export default {
    addUser,
    login,
    logout,
    getCurrentUser,
};