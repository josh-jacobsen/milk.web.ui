const express = require('express')
const app = express()
const fs = require('fs')
const path = require('path')
require('dotenv').config()

// dev axios work

// import { appService } from '../src/service/service'
// import appService from '../service/service.js'
// const appService = require ('../src/service/service')

// var axios = require('axios')

// const apiKey = process.env.API_KEY
// const termToSearch = '?q=plastics%20recycling'
// const API_KEY = `d6b69f0511e544778394a4edc672be75`

// console.log(apiKey)

// axios.defaults.baseURL = 'https://newsapi.org/v2/everything'
// axios.defaults.baseURL = 'http://localhost:3004'

// const appService = {
//   getPosts (queryString) {
//     return new Promise((resolve) => {
//       axios.get(`${queryString}`)
//       // , {
//       //   headers: {"x-api-key": API_KEY }
//       // })
//       .then(response => {
//         resolve(response.data)
//       })
//     })
//   }
// }

// const query = '?q=plastics%20recycling'
// const query = 'posts'
// const result = appService.getPosts(query).then(data => {
//   console.log(data)
// })
// console.log('getting data')
// // console.log(appService.getPosts(query))

const port = process.env.PORT || 3000

const indexHTML = (() => {
  return fs.readFileSync(path.resolve(__dirname, '../src/index.html'), 'utf-8')
})()

app.use('/dist', express.static(path.resolve(__dirname, '../dist')))

require('./dev-server.config')(app)

app.get('*', (req, res) => {
  res.write(indexHTML)
  res.end()
})

app.listen(port, () => {
  console.log(`Dev server started at http://localhost:${port}`)
})
