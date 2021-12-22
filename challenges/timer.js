const time = new Date()
const minute = time.getMinutes()
const minuteNow = minute+5
console.log('start at ',minute,minuteNow)
const set = setInterval( () => {
    console.log( 'five minutes',minute)
    if(minuteNow === minute+5){
        console.log('equal')
    }
}, 300000 );