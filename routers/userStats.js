const router = require('express').Router()
const userStats = require('../helpers/userStats-helper')
const db = require('../data/dbConfig')

router.get('/', (req, res) => {
    userStats.get().then(response => {
        if(response){
            res.status(200).json(response)
        } else {
            res.status(404).json({error: "Incorrect credentials", error})
        }
    })
    .catch(error => {
        res.status(500).json({error: "There was an error retrieving the data", error})
    })
})

router.get('/:id', (req, res) => {
    let {id} = req.params
    userStats.getById(id).then(response => {
        if(response){
            res.status(200).json(response)
        } else {
            res.status(404).json({error: "Incorrect credentials", error})
        }
    })
    .catch(error => {
        res.status(500).json({error: "There was an error retrieving your data", error})
    })
})


router.post('/', (req, res) => {
    let body = req.body
    db('userPost').insert(body).then(response => {
        if(response){
            res.status(200).json(response)
        } else {
            res.status(404).json({error: "Incorrect credentials", error})
        }
    })
    .catch(error => {
        res.status(500).json({error: "There was an error posting your data", error})
    })
})

router.delete('/:id', (req, res) => {
    const {id} = req.params
    db('userPost').where({id}).del().then(response => {
        if(response){
            res.status(200).json(response)
        } else {
            res.status(404).json({error: "Incorrect Credentials", error})
        }
    })
    .catch(error => {
        res.status(500).json({error: "There was an error deleting your data", error})
    })
})


module.exports = router