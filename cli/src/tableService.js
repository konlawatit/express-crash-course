const axios = require('axios');
const url = 'http://localhost:3000'

class tableService {
    static queryDatabase( sql) {
        // use promise
        // return new Promise((resolve, reject) => {
        //     try {
        //         axios.post(url+'/apis/table/createTable', {"sql": sql}).then(data => {
        //             resolve(data)
        //         })
        //     } catch (err) {
        //         reject(err)
        //     }
        // })

        try {
            return axios.post(url+'/apis/table/createTable', {"sql": sql}).then(result => result.data)
        } catch (err) {
            return 'err'
        }
    }
}



module.exports = tableService;