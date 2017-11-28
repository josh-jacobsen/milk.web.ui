import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3004'

const appService = {
  getPosts (queryString) {
    return new Promise((resolve) => {
      axios.get(`${queryString}`)
      // , {
      //   headers: {"x-api-key": API_KEY }
      // })
        .then(response => {
          resolve(response.data)
        })
    })
  }
}

export default appService

// = require('axios')

// const apiKey = process.env.API_KEY
// const termToSearch = '?q=plastics%20recycling'
// const API_KEY = `d6b69f0511e544778394a4edc672be75`

// console.log(apiKey)

// axios.defaults.baseURL = 'https://newsapi.org/v2/everything'

// const appService = {
//   getPosts (queryString) {
//     return new Promise((resolve) => {
//       axios.get(`${queryString}`, {
//         headers: {"x-api-key": API_KEY }
//       })
//       .then(response => {
//         resolve(response.data)
//       })
//     })
//   }
// }

// axios.get('https://developer.nps.gov/api/v0/parks?parkCode=yell', {headers: config})
// axios.get(`${queryString}`, {"x-api-key": API_KEY })

// axios.get(`${queryString}`, {
//   headers: {"x-api-key": API_KEY }
// })
//   .then((resp) => {
//     console.dir(resp.data);

//   })
//   .catch(err => {
//     console.log(err);
//   });

// const appService = {
//   getPosts (queryString) {
//     axios.get(`${queryString}`, {"x-api-key": process.env.API_KEY })
//   }
// }
