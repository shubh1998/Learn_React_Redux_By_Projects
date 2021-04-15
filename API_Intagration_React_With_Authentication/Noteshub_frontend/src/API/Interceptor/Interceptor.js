import axios from "axios";
axios.defaults.baseURL = 'http://localhost:3001/api/v1';


// Add a request interceptor
export const requestInterceptor = axios.interceptors.request.use((request) => {
        //console.log(request);
        const token = localStorage.getItem("authtoken");
        if (token) {
            request.headers['authorization'] = 'Bearer ' + token;
        }
        // request.headers['Content-Type'] = 'application/json';
        return request;
    },
    (error) => {
        Promise.reject(error)
    }
)


// Add a response interceptor
// export const reponseInterceptor = axios.interceptors.response.use((response) => {
//     const token = localStorage.getItem("token");
//         if (token) {
//             response.headers['authorization'] = 'Bearer ' + token;
//         }
//         // response.headers['Content-Type'] = 'application/json';
//         return request;
//     },
//     (error) => {
//         Promise.reject(error)
//     }
// )