const db = require('../data/dbConfig')
const UserStats = require('./userStats-helper')

module.exports = {
    add, 
    find, 
    findBy,
    findByUsername,
    findById
}

function find(){
    return db('users').select('id', 'username')
}

function findBy(user){
    return db('users').where(user)
}

function findByUsername(username){
    return findBy({username}).first()
}

function add(user){
    return db('users')
        .insert(user, 'id')
        .then(([id]) => findById(id))
}

function findById(id){
    return db('users').where({id}).first()
    .then(user => {
        return UserStats.getByUserId(id)
        .then(userStats => {
            user.userStats = userStats
            return user
        })
    })
}