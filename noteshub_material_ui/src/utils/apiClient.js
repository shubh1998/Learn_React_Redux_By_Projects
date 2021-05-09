import axios from 'axios'

class ApiClient {
    constructor(axiosInst) {
      this.axios = axiosInst
    }

    makeRequest = (url, method, data = {}) => this.axios({
        url,
        method,
        data,
    })

    getRequest = (url) => this.makeRequest(url, 'GET')

    putRequest = (url, config) => this.makeRequest(url, 'PUT', config)

    postRequest = (url, config) => this.makeRequest(url, 'POST', config)

    deleteRequest = (url, config) => this.makeRequest(url, 'DELETE', config)
}

const axiosInst = axios.create({
  // baseURL,
    baseURL: 'http://localhost:8000',
})

export default new ApiClient(axiosInst)
