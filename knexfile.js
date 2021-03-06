// Update with your config settings.
require('dotenv').config('/.env')

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/mw.sqlite3'
    },
    useNullAsDefault: true,
    pool: {
      afterCreate: (conn, done) => {
          conn.run('PRAGMA foreign_keys = ON', done)
      },
    },
    migrations:{
        directory: './data/migrations'
    },
    seeds:{
        directory: './data/seeds'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'pg',
    useNullAsDefault: true,
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: './data/migrations'
    }
  }

};
