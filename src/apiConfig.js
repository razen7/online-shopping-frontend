import axious from "axios";

const axiosClient=axios.create({
    baseURL: "http://localhost:8000/",
})

axiosClient.get('/a')