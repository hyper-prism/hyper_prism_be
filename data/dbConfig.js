let knex = require('knex')
let secrets = require('../config/secrets')
let environment = secrets.environment || 'development'

let dbConfig = require('../knexfile.js')[environment]

module.exports = knex(dbConfig)