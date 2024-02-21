function humanReadable (seconds) {
    let h=0
    let m=0
    while(seconds>59) {
        seconds-=60;
        m+=1
    }
    while(m>60) {
        m-=60;
        h+=1
    }
    const formatTime = (time) => time.toString().padStart(2, '0');
    return [formatTime(h), formatTime(m), formatTime(seconds)].join(':');
}

console.log(humanReadable(359999))
//console.log(humanReadable(000000))