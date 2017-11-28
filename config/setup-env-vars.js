const fs = require('fs')
const path = require('path')

const readPath = path.resolve(__dirname, '../.sample-env')
const writePath = path.resolve(__dirname, '../.env')

fs.createReadStream(readPath)
  .pipe(fs.createWriteStream(writePath))
