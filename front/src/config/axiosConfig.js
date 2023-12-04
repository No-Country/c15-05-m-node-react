import axios from "axios";

const server_url = "http://localhost:3000/api/";

export const getApi = ({method="GET", url="", post=null}) => {
    
    return axios({
        validateStatus: (status) => status >= 200 && status < 400,
        withCredentials: true,
        method: method,
        url: `${server_url}${url}/`,
        data: post && post,
    })
}