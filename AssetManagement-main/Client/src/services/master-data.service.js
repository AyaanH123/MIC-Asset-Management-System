import axios from "axios";
import authHeader from "./auth-header";

const SERVICE_URL = process.env.REACT_APP_API_URL + "masterdata/";

const getMasterData = () => {
    return axios.get(SERVICE_URL + "all", 
    { 
        headers: authHeader() 
    });
    
};

export default {
    getMasterData
};