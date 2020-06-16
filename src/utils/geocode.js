const request = require('request');

const geoCode = (address, callback) => {
    // if we put address it won't read the special caraters but the function 
    //encodeURIComponent(address) will be able to read special caraters
    //for exp ? becomes %3F
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?types=address&proximity=-122.39738575285674,37.7925147111369453&access_token=pk.eyJ1Ijoic2FuYWJrIiwiYSI6ImNrNnV3bW02azAwMG8zZm1peHZyNTl6NnUifQ.Xt7UcKF8SfEH8KJ1IeExEQ&limit=1'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to location services!',undefined)
        } else if(body.features.length === 0) {
            callback('Unable to find location.Try another search.!',undefined)
        } else {
            callback(undefined,{
                latitude: body.features[0].center[0],  
                longitude: body.features[0].center[1],
                location: body.features[0].place_name
                // we used the destructer method to remove response and just 
                // print body just like we did in app.js in the data object
                // location:response.body.features[0].place_name
            })
        }  
    })
}

module.exports = geoCode