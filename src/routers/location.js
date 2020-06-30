const express = require('express')
const Location = require('../models/location')
const router = new express.Router()
const auth = require('../middleware/auth')

router.post('/locations', auth, async (req, res) => {
    const location = new Location({ 
        ...req.body,
        sender: req.user._id,
        from: req.user.email
        
    })

    try {
        await location.save()
        res.status(201).send(location)
    } catch(e) {
        res.status(400).send(e)
    }
})

router.get('/locations/me', auth, async (req, res) => {
    const currentUseremail = req.user.email
    console.log(currentUseremail)
    try {
        const locations = await Location.find({"receiver": currentUseremail})        
        res.send(locations)

    } catch (e) {
        res.status(500).send()
    }
})
module.exports = router