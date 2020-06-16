const express = require('express')
const Location = require('../models/location')
const router = new express.Router()
const auth = require('../middleware/auth')
const geocode = require('../utils/geocode')

router.get('/locations', async (req, res) => {
    try {
        const address = req.query.location

        if (!address) {
            return res.status(400).send({ error : 'Provide address!'})
        }else {
            geocode(address,(error, {latitude , longitude, location}) => {
                if (error) {
                   return res.status(500)
                } 
                res.send({longitude, latitude, location})
            })
        }
    } catch (e) {
        res.status(500).send()
    }
})

router.post('/locations', async (req, res) => {
    const location = new Location(req.body)

    try {
        await location.save()
        res.status(201).send(location)
    } catch(e) { 
        res.status(400).send(e)
    }  
})

module.exports = router