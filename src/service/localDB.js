import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3004'

const localDatabase = {
  getPosts (queryString) {
    return new Promise((resolve) => {
      axios.get(`${queryString}`)
        .then(response => {
          resolve(response.data)
        })
    })
  }
}

export default localDatabase
