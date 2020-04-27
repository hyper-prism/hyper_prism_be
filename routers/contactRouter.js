let router = require('express').Router()
let db = require('../data/dbConfig')


router.get('/', (req, res) => {
    db('contact').then(response => {
        res.status(200).json(response)
    })
    .catch(error => {
        res.status(500).json({error: "there was an error gathering your data", error})
    })
})

router.get('/:id', (req, res) => {
    let {id} = req.params
    db('contact').where({id}).then(response => {
        res.status(200).json(response)
    })
    .catch(error => {
        res.status(500).json({error: "there was an error gathering your data", error})
    })
})

router.post('/', (req, res) => {
    let body = req.body
    db('contact').insert(body).then(response => {
        res.status(200).json(response)
    })
    .catch(error => {
        res.status(500).json({error: "there was an error posting your data", error})
    })
})

router.delete('/:id', (req, res) => {
    let {id} = req.params
    db('contact').where({id}).del().then(response => {
        res.status(200).json(response)
    })
    .catch(error => {
        res.status(500).json({error: "there was an error deleting your data", error})
    })
})

router.put('/:id', (req, res) => {
    let {id} = req.params
    let body = req.body
    db('contact').where({id}).update(body).then(response => {
        res.status(200).json(response)
    })
    .catch(error => {
        res.status(500).json({error: "there was an error updating your data", error})
    })
})


module.exports = router