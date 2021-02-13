const axios = require('axios');
const url = 'http://localhost:3000'

class PostService {
    //Get restaurants
    static getPost() {
        const res = axios.get(url + '/apis/table/createTable').then((data) => {
            console.log(data.data)
            return data.data;
        })
        return res;
    }
}

module.exports = PostService;