require('dotenv').config()

let express = require('express')
let server = express()
let cors = require('cors')
let helmet = require('helmet')


server.use(express.json())
server.use(cors())
server.use(helmet())

const authentication = require('../auth/authentication')
server.use('/api/authentication', authentication)

const usersRouter = require('../routers/usersRouter')
server.use('/api/users', usersRouter)

const userStats = require('../routers/userStats')
server.use('/api/userStats', userStats)

server.get('/', (req, res) => {
    res.status(200).send("You have successfully connected!")
  }
)


module.exports = server 