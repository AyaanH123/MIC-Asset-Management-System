import axios from "axios";
import authHeader from "./auth-header";

const SERVICE_URL = process.env.REACT_APP_API_URL + "asset/";

const getAssets = () => {
    return axios.get(SERVICE_URL + "all", 
    { 
        headers: authHeader() 
    });
    
};

const getAssetById = (id) => {
    return axios.get(SERVICE_URL + id, 
    { 
        headers: authHeader() 
    });
}

const updateAsset = (assetToUpdate) => {
    return axios.post(SERVICE_URL + "update", assetToUpdate,
        { 
            headers: authHeader() 
        });
}

const createAsset = (assetToCreate) => {
    return axios.post(SERVICE_URL + "create", assetToCreate,
        { 
            headers: authHeader() 
        });
}


export default {
    getAssets,
    getAssetById,
    updateAsset,
    createAsset
};