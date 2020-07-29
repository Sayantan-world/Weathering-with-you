const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.openweathermap.org/data/2.5/onecall?lat=' + latitude + '&lon=' + longitude + '&units=metric&appid=84603a9690cbf53abc0064df63d23645'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined,{
            maxTemp :   body.daily[0].temp.max,
            minTemp :  body.daily[0].temp.min,
            dayTemp :  body.daily[0].temp.day,
            dayFeel : body.daily[0].feels_like.day,
            nightTemp : body.daily[0].temp.night,
            nightFeel : body.daily[0].feels_like.night,
            humidity :  body.daily[0].humidity,
            pop :  body.daily[0].pop,
            expect : body.daily[0].weather[0].description
            })
        }
    })
}

module.exports = forecast