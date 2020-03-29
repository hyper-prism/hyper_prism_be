require('dotenv').config()

let express = require('express')
let server = express()
let cors = require('cors')
let helmet = require('helmet')


server.use(express.json())
server.use(cors())
server.use(helmet())

server.get('/', (req, res) => {
    res.status(200).send("You have successfully connected!")
  }
)


module.exports = server 