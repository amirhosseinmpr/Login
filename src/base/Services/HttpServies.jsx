import axios from 'axios'
import { UrlApi } from './api'

const HttpService = (url, method, data) => {

    const logintoken = localStorage.getItem('LoginUser')

    return axios({
        url: UrlApi + url,
        method,
        data,
        headers: {
            Authorization: `${logintoken ? (JSON.parse(logintoken).token) : null}`,
        }
    })
}
export default HttpService

export const GetUserService = () => {
    return HttpService('/auth/products', 'get')
}
