const db = require('../data/dbConfig')

module.exports = {
    get, 
    add, 
    getById,
    getByUserId
}

function get(){
    return db('userStats')
    .select([
        'userStats.id',
        'userStats.score',
        'userStats.rounds',
        'userStats.turns',
        'userStats.awards',
        'userStats.date',
        'userStats.rank',
        'users.username AS users.username',
        'users.email AS users.email'
    ])
    .join('users', 'users.id', 'userStats.user_id')
}

function add(user){
    return db('userStats')
        .insert(user, 'id')
        .then(([id]) => getById(id))
}

function getById(id){
    return get().where({'userStats.id': id}).first()
}

function getByUserId(id){
    return get().where({'userStats.user_id': id})
}