import axios from 'axios';
export default req => {
    return axios.create({
        baseURL:'http://localhost:4000/',
        headers: {
            cookie: req.get('cookie') || {}
        }
    })
};