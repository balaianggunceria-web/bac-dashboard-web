import axios from "axios";
const local = 'http://localhost:5000'
const production = 'https://bac-backend-web.onrender.com'

let api_url = ''
let MODE = 'pro'

if (MODE === 'pro') {
    api_url = production
}else{
    api_url = local
}

const api = axios.create({
    baseURL : `${api_url}/api`,
    withCredentials: true
    
})

export default api