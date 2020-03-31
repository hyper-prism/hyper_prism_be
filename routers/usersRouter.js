const router = require('express').Router()
const Users = require('../helpers/user-helper')
const UserStats = require('../helpers/userStats-helper')



router.get('/', (req, res) => {
    Users.find().then(response => {
        res.status(200).json(response)
    })
    .catch(error => {
        res.status(500).json({error: "there was an error retrieving your info", error})
    })
})


router.get('/:id', (req, res) => {
    const {id} = req.params
    Users.findById(id).then(response => {
        if(resonse){
            res.status(200).json(response)
        } else {
            res.status(404).json({error: "Incorrect Credentials"})
        }
    })
    .catch(error => {
        res.status(500).json({error: "There was an error retrieving your information", error})
    })
})

router.post('/', (req, res) => {
    let body = req.body
    Users.add(body).then(response => {
        if(response){
            res.status(200).json(response)
        } else {
            res.status(400).json({error: "Your credentials did not match", error})
        }
    })
    .catch(error => {
        res.status(500).json({error: "There was an error retrieving your information", error})
    })
})

router.delete('/:id', (req, res) => {
    const {id} = req.params
    Users.del(id).then(response => {
        res.status(200).json(response)
    })
    .catch(error => {
        res.status(500).json({error: "there was an error deleting the user", error})
    })
})

module.exports = router