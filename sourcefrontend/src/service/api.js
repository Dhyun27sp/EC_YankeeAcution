import axios from 'axios'
const PORT = process.env.PORT || 5000;
export default () => {
    return axios.create({
        baseURL: `http://localhost:${PORT}/`
    })
}