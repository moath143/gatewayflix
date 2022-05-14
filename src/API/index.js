import axios from "axios";

const baseApi = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});


const CRUDRequest = {
    get: async (url) => {
        return baseApi.get(url)
    },
    post: async (url, data) => {
        return baseApi.post(url, data)
    },
    put: async (url, data) => {
        return baseApi.put(url, data)
    },
    delete: async (url) => { 
        return baseApi.delete(url)
    }
}


export default CRUDRequest;