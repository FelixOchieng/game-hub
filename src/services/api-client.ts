import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '15e55d93323a48d49b2043251a938e1b'
    }
})