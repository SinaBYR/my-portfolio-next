import axiosModule from "axios";

export const cancelTokenSource = axiosModule.CancelToken.source()

export const axios = axiosModule.create({
    // baseURL: 'http://localhost:8000',
    // baseURL: 'https://sina-beyraghdar-portfolio-api.herokuapp.com',
    baseURL: 'https://sinabyr-portfolio-api.onrender.com',
    cancelToken: cancelTokenSource.token
})