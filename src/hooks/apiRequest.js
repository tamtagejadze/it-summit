import axios from "axios"

export default function apiRequest(method,endpoint){
    return axios({
        url: 'https://reqres.in/api/' + endpoint,
        method
    })
    .then(response => response.data.data)

}