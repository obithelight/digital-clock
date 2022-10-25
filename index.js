const hourElement = document.getElementById('hour')
const minuteElement = document.getElementById('minutes')
const secondElement = document.getElementById('seconds')
const ampmElement = document.getElementById('ampm')
const timeOfDay = document.getElementById('timeOfDay')

function updateClock(){
    let hr = new Date().getHours()
    let mins = new Date().getMinutes()
    let secs = new Date().getSeconds()
    let ampm = 'AM'
    let dayTime = 'MORNING'

    dayTime = hr < 12 ? 'MORNING' : 
              hr > 12 && hr < 18 ? 
              'AFTERNOON' : 'NIGHT' 
    ampm = hr < 12 ? 'AM' : 'PM' 
    hr = hr > 12 ? hr - 12 : hr 
    hr = hr < 10 ? '0' + hr : hr
    mins = mins < 10 ? '0' + mins : mins
    secs = secs < 10 ? '0' + secs : secs

    hourElement.innerText = hr
    minuteElement.innerText = mins
    secondElement.innerText = secs
    ampmElement.innerText = ampm
    timeOfDay.innerText = dayTime
     
    setTimeout(() => {
        updateClock()
    }, 1000);
}
updateClock()