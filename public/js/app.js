console.log('Client side javascript file is loaded!')

const weatherForm = document.querySelector('form')
const search = document.querySelector('.form-control')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')
const messageThree = document.querySelector('#message-3')
const messageFour = document.querySelector('#message-4')
const messageFive = document.querySelector('#message-5')
const messageSix = document.querySelector('#message-6')
const messageSeven = document.querySelector('#message-7')
const messageEight = document.querySelector('#message-8')
const messageNine = document.querySelector('#message-9')
const messageTen = document.querySelector('#message-10')
const image = document.getElementById("img1")

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value

    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''
    messageThree.textContent = ''
    messageFour.textContent = ''
    messageFive.textContent = ''
    messageSix.textContent = ''
    messageSeven.textContent = ''
    messageEight.textContent = ''
    messageNine.textContent = ''
    messageTen.textContent = ''
    // m2.textContent = ''
    // m3.textContent = ''
    // m4.textContent = ''
    // m5.textContent = ''
    // m6.textContent = ''
    // m7.textContent = ''
    // m8.textContent = ''
    // m9.textContent = ''
    // m0.textContent = ''


    fetch('/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                messageOne.textContent = data.error
                image.src = "images/error.png"
                image.style.display = 'block';
            } else {
                messageOne.textContent = 'Location  :  ' + data.location
                messageTwo.textContent = 'Max Temp  :  ' + data.forecast.maxTemp + '°C'
                messageThree.textContent = 'Min Temp  :  ' + data.forecast.minTemp + '°C'
                messageFour.textContent = 'Day Temp  :  ' + data.forecast.dayTemp + '°C'
                messageFive.textContent = 'Feels like (Day)  :  ' + data.forecast.dayFeel + '°C'
                messageSix.textContent = 'Night Temp  :  ' + data.forecast.nightTemp + '°C'
                messageSeven.textContent = 'Feels like (Night) :  ' + data.forecast.nightFeel + '°C'
                messageEight.textContent = 'Humidity  : ' + data.forecast.humidity + '%'
                messageNine.textContent = 'Chance of Rainfall  :  ' + data.forecast.pop*100 +'%'
                messageTen.textContent = 'Expect  :  ' + data.forecast.expect

                let wflag = data.forecast.expect
                console.log(wflag)
                if(wflag == 'light rain' || wflag == 'moderate rain' || wflag == 'light intensity shower rain'){
                    image.src = "images/rain.jpg"
                    image.style.display = 'block';
                }
                else if(wflag == 'freezing rain'){
                    image.src = "images/freezingrain.jpeg"
                    image.style.display = 'block';
                }
                else if(wflag == 'heavy intensity rain' || wflag == 'very heavy rain' || wflag == 'extreme rain' || wflag == 'shower rain' || wflag == 'ragged shower rain' || wflag == 'heavy intensity shower rain' ){
                    image.src = "images/rain3.jpg"
                    image.style.display = 'block';
                }
                else if(wflag == 'broken clouds' || wflag == 'few clouds'){
                    image.src = "images/brokenClouds.jpg"
                    image.style.display = 'block';
                }
                else if(wflag == 'overcast clouds' || wflag == 'scattered clouds'){
                    image.src = "images/overcastcloud.jpg"
                    image.style.display = 'block';
                }
                else if(wflag == 'clear sky'){
                    image.src = "images/summer1.jpg"
                    image.style.display = 'block';
                }
                else if(wflag == 'tornado'){
                    image.src = "images/tornado.jpg"
                    image.style.display = 'block';
                }
                else if(wflag == 'tornado' || wflag == 'sand/ dust whirls' || wflag == 'squalls'){
                    image.src = "images/windy.jpg"
                    image.style.display = 'block';
                }
                else if(wflag == 'haze' || wflag == 'smoke' || wflag == 'mist'){
                    image.src = "images/haze.jpg"
                    image.style.display = 'block';
                }
                else if(wflag == 'fog' || wflag == 'sand' || wflag == 'dust' || wflag == 'volcanic ash'){
                    image.src = "images/fog.png"
                    image.style.display = 'block';
                }
                else if(wflag == 'light snow' || wflag == 'snow' || wflag == 'heavy snow' || wflag == 'shower snow' || wflag == 'light shower snow' || wflag == 'heavy shower snow'){
                    image.src = "images/cold1.jpg"
                    image.style.display = 'block';
                }
                else if(wflag == 'Light shower sleet' || wflag == 'sleet' || wflag == 'shower sleet' || wflag == 'light rain and snow' || wflag == 'rain and snow'){
                    image.src = "images/cold.jpg"
                    image.style.display = 'block';
                }
                else if(wflag == 'light intensity drizzle' || wflag == 'drizzle' || wflag == 'heavy intensity drizzle' || wflag == 'light intensity drizzle rain' || wflag == 'drizzle rain' || wflag == 'heavy intensity drizzle rain' || wflag == 'shower rain and drizzle' || wflag == 'heavy shower rain and drizzle' || wflag == 'shower drizzle'){
                    image.src = "images/drizzle.jpg"
                    image.style.display = 'block';
                }
                else if(wflag == 'thunderstorm with light rain' || wflag == 'thunderstorm with rain' || wflag == 'thunderstorm with heavy rain' || wflag == 'thunderstorm with drizzle' || wflag == 'thunderstorm with heavy drizzle'){
                    image.src = "images/thunder2.jpg"
                    image.style.display = 'block';
                }
                else if(wflag == 'light thunderstorm' || wflag == 'thunderstorm' || wflag == 'heavy thunderstorm' || wflag == 'ragged thunderstorm	' || wflag == 'thunderstorm with light drizzle'){
                    image.src = "images/thunder.jpg"
                    image.style.display = 'block';
                }
            }
        })
    })
})


