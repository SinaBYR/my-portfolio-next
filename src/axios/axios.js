import axiosModule from "axios";

export const cancelTokenSource = axiosModule.CancelToken.source()

export const axios = axiosModule.create({
    baseURL: 'http://localhost:8000',
    cancelToken: cancelTokenSource.token
})