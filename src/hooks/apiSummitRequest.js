import axios from "axios"

export default function apiSummitRequest(method,endpoint){
    return axios({
        url: 'https://jsonplaceholder.typicode.com/' + endpoint,
        method
    })
    .then(response => response.data)

}